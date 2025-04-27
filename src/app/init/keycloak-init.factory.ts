import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      /*config: {
        url: 'http://localhost:8080',
        realm: 'master',
        clientId: 'brandclient',
      },*/
      config: {
        url: 'https://brand-keycloak.azurewebsites.net',
        realm: 'master',
        clientId: 'brand-fe-test-client',
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
      bearerExcludedUrls: ['/assets'],
      /*initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },*/
    });
}