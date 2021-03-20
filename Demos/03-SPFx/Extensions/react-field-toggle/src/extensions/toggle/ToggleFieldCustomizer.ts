import * as React from "react";
import * as ReactDOM from "react-dom";

import { Log } from "@microsoft/sp-core-library";
import { override } from "@microsoft/decorators";
import {
  BaseFieldCustomizer,
  IFieldCustomizerCellEventParameters,
} from "@microsoft/sp-listview-extensibility";
import { SPPermission } from "@microsoft/sp-page-context";
import * as strings from "ToggleFieldCustomizerStrings";
import Toggle from "./components/Toggle";
import { sp } from "@pnp/sp/presets/core";

export interface IToggleProperties {
  sampleText?: string;
}

const LOG_SOURCE: string = "ToggleFieldCustomizer";

export default class ToggleFieldCustomizer extends BaseFieldCustomizer<IToggleProperties> {
  
  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, "Activated ToggleFieldCustomizer with properties:");
    Log.info(LOG_SOURCE, JSON.stringify(this.properties, undefined, 2));
    Log.info(
      LOG_SOURCE,
      `The following string should be equal: "Toggle" and "${strings.Title}"`
    );

    sp.setup({
      spfxContext: this.context,
    });

    sp.web.get().then((i) => {
      console.log(i.Title);
    });

    return super.onInit();
  }

  @override
  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
    // Use this method to perform your custom cell rendering.  The CellFormatter is a utility
    // that you can use to convert the cellValue to a text string.
    const value: string = event.fieldValue;
    const id: string = event.listItem.getValueByName("ID").toString();
    const hasPermissions: boolean = this.context.pageContext.list.permissions.hasPermission(
      SPPermission.editListItems
    );

    const toggle: React.ReactElement<{}> = React.createElement(Toggle, {
      checked: value,
      id: id,
      disabled: !hasPermissions,
      onChanged: this.onToggleValueChanged.bind(this),
    });

    ReactDOM.render(toggle, event.domElement);
  }

  @override
  public onDisposeCell(event: IFieldCustomizerCellEventParameters): void {
    // This method should be used to free any resources that were allocated during rendering.
    // For example, if your onRenderCell() called ReactDOM.render(), then you should
    // call ReactDOM.unmountComponentAtNode() here.
    ReactDOM.unmountComponentAtNode(event.domElement);
    super.onDisposeCell(event);
  }

  onToggleValueChanged = (value: boolean, id: string) => {
    let updateObj: any = {};
    updateObj[this.context.field.internalName] = value;

    // item.update(updateObj, item["odata.etag"])
    //   .then((result: IItemUpdateResult): void => {
    //     console.log(`Item with ID: ${id} successfully updated`);
    //   }, (error: any): void => {
    //     console.log('Loading latest item failed with error: ' + error);
    //   });
  };
}
