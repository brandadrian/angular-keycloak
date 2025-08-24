const Keycloak = require("keycloak-connect");
const session = require("express-session");
const memoryStore = new session.MemoryStore();
const kcConfig = {
  clientId: "brandclient",
  bearerOnly: true,
  serverUrl: 'http://localhost:8080',
  realm: "brand",
  realmPublicKey: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1cG/7hljRiJbREdZJlT/piut+XUxePv0RNQ3gatCasziQu+l2xmil9Ohd9uR80oNJJiHCFLwP84+st5ng/7mf+44Qolxw0TTTyAdEjEIN+rIylqOi80zMudYROtK/QVrqidVVE9y8t5MswczHOtb3MSu1kEFxofzDVl5WgPPOOUA7OBqILylx6tZnzmJzeB+fu2BT2wXBAmD6eGNoLmO/3amt33dlwP1L1NoHTl/nYW0vHz0N9wJF1w2jCLIlLdJ9QxAdZQoJXBtWtDRhen79wCzJFlTwtlKkVg3kuSVZXKAbfPJI/PhxecLp2oH/2N11jisyhbymyzpyHchleQ2OwIDAQAB"
};

export const keycloak = new Keycloak({ store: memoryStore }, kcConfig);
