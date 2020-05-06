import {InjectionToken} from '@angular/core';
import { environment } from '../../environments/environment';


export let ENDPOINTS_CONFIG = new InjectionToken('endpoints.config');

export const EndpointsConfig: any = {
  signUp: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + environment.firebase.apiKey,
  logIn: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + environment.firebase.apiKey
}
