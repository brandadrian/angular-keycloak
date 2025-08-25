export const environment = {
  production: true,
  keycloak: {
    url: 'http://localhost:8080',
    realm: 'brand',
    clientId: 'brandclient',
    adminRole: 'brandclient-role-admin',
    userRole: 'brandclient-role-user'
  },
  backendUrl: 'http://localhost:9090'
};
