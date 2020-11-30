export const environment = {
    production: false,
    apiBaseUrl: "https://qbotenovade.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "f3b0b74e-b987-4e66-928a-6f077de4c833",
        clientId: "2c212938-677f-4678-9cd2-55561e276aa9",
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
