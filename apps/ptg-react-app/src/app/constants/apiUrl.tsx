/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Constant file only for api urls
 * 
*/

import { environment } from "../../environments/environment";
export const LOGIN_API = `${environment.baseUrl}auth/local`;
export const SIGNUP_API = `${environment.baseUrl}auth/local/register`;
export const FORGOT_API = `${environment.baseUrl}auth/forgot-password`;
export const RESET_API = `${environment.baseUrl}auth/reset-password`;
export const GRID_DATA = `${environment.baseUrl}gridData`;