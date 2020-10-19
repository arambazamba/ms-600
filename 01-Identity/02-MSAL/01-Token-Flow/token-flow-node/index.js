async function doAuth() {
  const config = {
    auth: {
      clientId: "024bf89c-83e1-45b5-8797-f013cf920cc5",
      authority: "https://login.microsoftonline.com/common/",
      redirectUri: "http://localhost:8080",
    },
  };
  var client = new Msal.UserAgentApplication(config);
  var request = {
    scopes: ["user.read"],
  };

  //Login -> Get IDToken
  let loginResponse = await client.loginPopup(request);
  logAndShow("Login Request", loginResponse);

  //Get AccessToken
  let tokenResponse = await client.acquireTokenSilent(request);
  logAndShow("Token Response", tokenResponse);

  //Read Profile
  let qryProfile = "https://graph.microsoft.com/beta/me";
  let profileResp = await fetch(qryProfile, {
    headers: {
      Authorization: "Bearer " + tokenResponse.accessToken,
    },
  });
  let profile = await profileResp.json();
  logAndShow("Profile", profile);
}

function logAndShow(lbl, msg) {
  console.log(`${lbl}:`, msg);
  document.getElementById("result").innerHTML = JSON.stringify(msg);
}
