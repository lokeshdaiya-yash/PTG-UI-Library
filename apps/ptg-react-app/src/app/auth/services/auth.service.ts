/**
 * @since March 2022
 * @author Ankit patidar
 * @desc Generic class for auth service
 * 
*/

import { restPost } from '../../services/services';
import * as API from '../../constants/apiUrl';

class AuthService {
  private TOKEN_KEY = 'userdata';
  private ROLE_TYPE = 'role';


  setToken(token: any): void {
    if (token) {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }
  getToken(): any {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  setRole(role: any): void {
    if (role) {
      localStorage.setItem(this.ROLE_TYPE, role);
    }
  }
  getRole(): any {
    return localStorage.getItem(this.ROLE_TYPE);
  }
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  login(payload: any): any {
    return restPost(API.LOGIN_API, payload);
  }

  signUp(payload: any): any {
    return restPost(API.SIGNUP_API, payload);
  }

  forgot(payload: any): any {
    return restPost(API.FORGOT_API, payload);
  }

  resetPassword(payload: any): any {
    return restPost(API.RESET_API, payload);
  }

  gridData():any{
    const payload={data:"data"}
    return restPost(API.GRID_DATA,payload);
  }
}

export const authClass = new AuthService();
