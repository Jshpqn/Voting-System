const msalConfig = {
    auth: {
        clientId: '6a7ae613-d2d6-4d73-adc2-ca052d3ff311',
        authority: 'https://login.microsoftonline.com/common',
        redirectUri: 'https://jshpqn.github.io/Voting-System/login.html',
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true,
    },
};

const loginRequest = {
    scopes: ['openid', 'profile', 'User.Read'],
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

async function signIn() {
    try {
        msalInstance.loginPopup(loginRequest, (error, authResponse) => {
            if (error) {
                console.error('Authentication error:', error);
            } else if (authResponse) {
                if (authResponse.account) {
                    console.log("tapos");
                }
            }
        });
    } catch (error) {
        console.error('error:', error);
    }
}