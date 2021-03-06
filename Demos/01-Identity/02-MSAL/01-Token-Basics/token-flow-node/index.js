async function doAuth() {
    const spTenant = "integrationsonline";
    const tenant = "d92b247e-90e0-4469-a129-6a32866c0d0a";

    const config = {
        auth: {
            clientId: "eeb155cb-d4c6-4864-9184-cf10a6e02715",
            authority: `https://login.microsoftonline.com/${tenant}`,
            postLogoutRedirectUri: "http://localhost:8080",
        },
    };

    const scopes = {
        scopes: ["user.read"],
    };

    //Creadte MSAL App with Scope to read User Profile
    const msalClient = new Msal.UserAgentApplication(config);

    //Login -> Get ID Token
    const loginResponse = await msalClient
        .loginPopup(scopes)
        .then((loginResponse) => {
            console.log("id_token acquired at: " + new Date().toString());
            console.log("LoginResponse", loginResponse);

            if (msalClient.getAccount()) {
                console.log("Account", msalClient.getAccount());
            }
        })
        .catch((error) => {
            console.log(error);
        });

    //Get AccessToken
    const resp = await msalClient.acquireTokenSilent(scopes);
    console.log("acquireTokenSilent Response", resp);

    //Read Profile
    //Notice beta endpoint with extended profile info
    const qryProfile = "https://graph.microsoft.com/beta/me";
    const profileResp = await fetch(qryProfile, {
        headers: {
            Authorization: "Bearer " + resp.accessToken,
        },
    });
    const profile = await profileResp.json();
    console.log("Profile", profile);

    //Call Sharepoint using Graph -> SharePoint REST API v2
    const spScope = {
        scopes: ["Sites.ReadWrite.All"],
    };
    // const spGraphResp = await msalClient.acquireTokenSilent(spScope);
    // console.log("Token Response", spGraphResp);

    //Use SharePoint Rest v2 Endpoint
    const qrySPLists = `https://graph.microsoft.com/v1.0/sites/${spTenant}.sharepoint.com/lists`;
    const listResp = await fetch(qrySPLists, {
        headers: {
            Authorization: "Bearer " + resp.accessToken,
        },
    });
    const lists = await listResp.json();
    console.log("SP Lists V2 Endpoint", lists.value);

    //Use SharePoint Rest v1 Endpoint
    const spScopeV1 = {
        scopes: [`https://${spTenant}.sharepoint.com/.default`],
    };

    const sprest = await msalClient.acquireTokenSilent(spScopeV1);
    const qrySPListsV1 = `https://${spTenant}.sharepoint.com/_api/web/lists`;
    const titleResp = await fetch(qrySPListsV1, {
        headers: {
            Authorization: "Bearer " + sprest.accessToken,
            accept: "application/json;odata=verbose",
        },
    });
    const title = await titleResp.json();
    console.log("SP Lists V1 Endpoint", title);
}
