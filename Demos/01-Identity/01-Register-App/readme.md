# Register App

## Demos

- Explain App Registration Process and Manifest

  - Explain appRoles User | Application
  - Mention Claims (context.User.HasClaim(ClaimTypes.Role, "Admin") and Azure SecGroups

  ```json
  "appRoles": [
  {
  "allowedMemberTypes": [ "User" ],
  "description": "Administrator role for Product Catalog web application.",
  "displayName": "ProductAdministrators",
  "id": "98ce9517-557f-4ac5-b827-f18d948ee552",
  "isEnabled": true,
  "lang": null,
  "origin": "Application",
  "value": "ProductAdministrators"
  },
  ```

- Create App Registration using Azure CLI with permissions

## Readings

[Application Roles](https://docs.microsoft.com/en-us/azure/architecture/multitenant-identity/app-roles)

[az ad sp](https://docs.microsoft.com/en-us/cli/azure/ad/sp?view=azure-cli-latest#az_ad_sp_create_for_rbac)

[az ad app](https://docs.microsoft.com/en-us/cli/azure/ad/app?view=azure-cli-latest)

[Scoping application permissions to specific Exchange Online mailboxes](https://docs.microsoft.com/en-us/graph/auth-limit-mailbox-access)

> Note: You might not give an App the permissions on all Exchange Mailboxes
