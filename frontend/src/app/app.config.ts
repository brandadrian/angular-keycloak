import { APP_INITIALIZER, ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAuth } from 'angular-auth-oidc-client';
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { oidcConfig } from "./auth.config";
import {
  provideHttpClient,
  withInterceptors,
} from "@angular/common/http";
import { tokenInterceptor } from './interceptors/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAuth(oidcConfig),
    provideHttpClient(
      withInterceptors([tokenInterceptor])
    ),
  ],
};


