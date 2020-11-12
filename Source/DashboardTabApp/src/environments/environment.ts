export const environment = {
    production: false,
    apiBaseUrl: "https://enovadeqbotnew.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "f3b0b74e-b987-4e66-928a-6f077de4c833",
        clientId: "225741f1-3c92-44bf-994d-c22537df11de",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
