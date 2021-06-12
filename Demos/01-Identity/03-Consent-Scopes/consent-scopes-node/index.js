async function doAuth() {
    const tenant = "d92b247e-90e0-4469-a129-6a32866c0d0a";

    const config = {
        auth: {
            clientId: "b910717b-2aca-4f1c-9aa3-1de20a22b1e0",
            authority: `https://login.microsoftonline.com/${tenant}`,
            postLogoutRedirectUri: "http://localhost:8080",
        },
    };

    const scopes = {
        scopes: ["User.Read", "Files.Read"],
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

    //Read Files
    const qry = "https://graph.microsoft.com/v1.0/me/drive/recent";
    const filesResp = await fetch(qry, {
        headers: {
            Authorization: "Bearer " + resp.accessToken,
        },
    });
    const files = await filesResp.json();
    console.log("files", files);
}
