# Graph Teamwork

[Graph Teamwork REST Reference](https://docs.microsoft.com/en-us/graph/api/resources/teams-api-overview?view=graph-rest-1.0)

## Demos

### Use Teamwork REST Endpoint

Operations are provided in `use-teamwork.http`.

Create Microsoft 365 group:

Scopes: [Group.Create, Group.ReadWrite.All, Directory.ReadWrite.All]

```json
POST https://graph.microsoft.com/v1.0/groups
{
  "displayName":"teams development",
  "mailNickname":"teams-dev",
  "description":"a group for teams development",
  "visibility":"Private",
  "groupTypes":["Unified"],
  "mailEnabled":true,
  "securityEnabled":false,
  "members@odata.bind":[
    "https://graph.microsoft.com/v1.0/users/25853297-1418-4fc4-96ec-22f8bc83a64b",
  ],
  "owners@odata.bind":[
    "https://graph.microsoft.com/v1.0/users/25853297-1418-4fc4-96ec-22f8bc83a64b"
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

### Teamwork Tab

- Show app registration `teamworks-tab`
- Update ngrok Url in:
    - Visual Studio Code project /.env file
    - Azure AD Application > Authentication > Redirect URIs
    - Azure AD Application > Expose an API > Application ID URI