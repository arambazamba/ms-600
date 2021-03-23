# Asset Deployment

[SharePoint solution packaging](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/basics/notes-on-solution-packaging)

Custom feature XML
To support provisioning of various SharePoint resources (such as List Templates, Pages, or Content Types), custom feature XML may also be injected into the package. This is used to provision resources necessary for applications, but may also be used for web parts. The documentation for Feature XML is located at Feature.xml Files.

The packaging task looks for the custom feature XML in `./sharepoint/feature_xml`. Every file in this folder is included in the final application package. However, the task relies on the contents of the \_rels/ folder to determine which custom features are defined.

Essentially, it assumes that each .xml.rels file is related to a feature.xml of the same name at the top level of the feature_xml/, and adds a relationship to the AppManifest.xml.rels file that includes that feature in the package.
