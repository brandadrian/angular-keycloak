import { environment } from '../environments/environment';

export const oidcConfig = {
  config: {
    authority: environment.keycloak.url + '/realms/' + environment.keycloak.realm,
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: environment.keycloak.clientId,
    scope: 'openid profile email',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    secureRoutes: [environment.backendUrl],
    logLevel: 1,
    renewTimeBeforeTokenExpiresInSeconds: 5,
    revokeRefreshTokenOnLogout: true,
  }
};
