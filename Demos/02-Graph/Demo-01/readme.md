# Using Graph and Query Params

$select:

```
https://graph.microsoft.com/v1.0/me/messages?$select=from,subject
```

$orderby:

```
https://graph.microsoft.com/v1.0/users?$orderby=displayName
```

$top:

```
https://graph.microsoft.com/v1.0/users?$top=2
```

$skip:

```
https://graph.microsoft.com/v1.0/me/events?$orderby=createdDateTime& desc$skip=10
```

$expand:

```
https://graph.microsoft.com/v1.0/me/drive/root?$expand=children
```

$search:

```
https://graph.microsoft.com/v1.0/me/messages?$search="pizza"
```
