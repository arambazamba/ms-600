/* eslint-disable quotes */
exports.msalConfiguration = {
  authority: "https://login.microsoftonline.com/common",
  clientID: "7adb8d94-4233-4f7c-9563-87bdeb7ad27a",
  clientSecret: "RTU7Q~Qedv2MD7xLzRn3Ea6VW3Khhg3q6jQon",
  tenantID: "d92b247e-90e0-4469-a129-6a32866c0d0a",
  redirectUri: "http://localhost:3000/callback",
};

exports.subscriptionConfiguration = {
  changeType: "Created",
  notificationUrl: "https://9c336ce4351f.ngrok.io/listen",
  resource: "me/mailFolders('Inbox')/messages",
  clientState: "cLIENTsTATEfORvALIDATION",
  includeResourceData: false,
};

exports.certificateConfiguration = {
  certificateId: "myCertificateId",
  relativeCertPath: "./certificate.pem",
  relativeKeyPath: "./key.pem",
  password: "Password123",
};
