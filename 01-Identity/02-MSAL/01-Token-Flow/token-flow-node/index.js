async function doAuth() {
  const tenant = "d92b247e-90e0-4469-a129-6a32866c0d0a";
  const config = {
    auth: {
      clientId: "eeb155cb-d4c6-4864-9184-cf10a6e02715",
      authority: `https://login.microsoftonline.com/${tenant}`,
      redirectUri: "http://localhost:8080",
    },
  };
  const client = new Msal.UserAgentApplication(config);
  const scopes = {
    scopes: ["user.read"],
  };

  //Login -> Get ID Token
  const loginResponse = await client.loginPopup(scopes);

  logAndShow("Login Request", loginResponse);

  //Get AccessToken
  const tokenResponse = await client.acquireTokenSilent(scopes);
  logAndShow("Token Response", tokenResponse);

  //Read Profile
  //Notice beta endpoint with extended profile info
  const qryProfile = "https://graph.microsoft.com/beta/me";
  const profileResp = await fetch(qryProfile, {
    headers: {
      Authorization: "Bearer " + tokenResponse.accessToken,
    },
  });
  const profile = await profileResp.json();
  logAndShow("Profile", profile);

  //Call Sharepoint using Graph -> SharePoint REST API v2
  const spTenant = "integrationsonline";
  const spScope = {
    scopes: ["Sites.ReadWrite.All"],
  };
  const spTokenResponse = await client.acquireTokenSilent(spScope);
  logAndShow("Token Response", spTokenResponse);

  const qrySPLists = `https://graph.microsoft.com/v1.0/sites/${spTenant}.sharepoint.com/lists`;
  const listResp = await fetch(qrySPLists, {
    headers: {
      Authorization: "Bearer " + spTokenResponse.accessToken,
    },
  });
  const lists = await listResp.json();
  logAndShow("Lists", lists.value);
}

function logAndShow(lbl, msg) {
  console.log(`${lbl}:`, msg);
  document.getElementById("result").innerHTML = JSON.stringify(msg);
}
