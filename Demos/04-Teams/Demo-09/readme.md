# Graph Teamwork



## Demos

Create Microsoft 365 group:

```json
POST https://graph.microsoft.com/v1.0/groups
{
  "displayName":"Flight 157",
  "mailNickname":"flight157",
  "description":"Everything about flight 157",
  "visibility":"Private",
  "groupTypes":["Unified"],
  "mailEnabled":true,
  "securityEnabled":false,
  "members@odata.bind":[
    "https://graph.microsoft.com/v1.0/users/bec05f3d-a818-4b58-8c2e-2b4e74b0246d",
    "https://graph.microsoft.com/v1.0/users/ae67a4f4-2308-4522-9021-9f402ff0fba8",
    "https://graph.microsoft.com/v1.0/users/eab978dd-35d0-4885-8c46-891b7d618783",
    "https://graph.microsoft.com/v1.0/users/6a1272b5-f6fc-45c4-95fe-fe7c5a676133"
  ],
  "owners@odata.bind":[
    "https://graph.microsoft.com/v1.0/users/6a1272b5-f6fc-45c4-95fe-fe7c5a676133",
    "https://graph.microsoft.com/v1.0/users/eab978dd-35d0-4885-8c46-891b7d618783"
  ]
}
```

Convert it to a Microsoft Teams:

```json
POST https://graph.microsoft.com/v1.0/teams
Content-Type: application/json
{
  "template@odata.bind": "https://graph.microsoft.com/v1.0/teamsTemplates('standard')",
  "group@odata.bind": "https://graph.microsoft.com/v1.0/groups('groupId')"
}
```

List Teams:

```json
GET https://graph.microsoft.com/v1.0/groups?$select=id,resourceProvisioningOptions
```

List all teams the current user has joined:

```json
GET https://graph.microsoft.com/v1.0/me/joinedTeams
```

Add this Demo https://docs.microsoft.com/en-us/learn/modules/msteams-teamwork-endpoint/3-exercise-teamwork-endpoint-introduction