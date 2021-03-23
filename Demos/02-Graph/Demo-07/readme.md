# Manage a group lifecycle on Microsoft Graph

Get groups:

```
https://graph.microsoft.com/v1.0/groups
```

Get group owner:

```
https://graph.microsoft.com/v1.0/groups/11a924f6-6baf-4500-b056-6488c1284951/owners
```

Get the list of groups where a user is an owner:

```
https://graph.microsoft.com/v1.0/me/ownedObjects
```

Get the list of groups where a user is a member:

```
https://graph.microsoft.com/v1.0/me/memberOf
```

Create a group:

```
https://graph.microsoft.com/v1.0/groups
Content-Type	application/json
{
    "displayName": "Library Assist",
    "mailEnabled": false,
    "mailNickname": "library",
    "securityEnabled": true
}
```
