import { environment } from "../environments/environment";
const baseUrl = environment.baseUrl
export const ENDPOINTS = {
    login: `${baseUrl}auth/login`,
    signup: `${baseUrl}auth/signup`,
    files: `${baseUrl}user/fileList`,
    fileList: `${baseUrl}user/fileListing`,
    updateFile: `${baseUrl}user/updateFile`,
    deleteFile: `${baseUrl}user/deleteFile`,
    user: `${baseUrl}user`,
    updatePassword: `${baseUrl}user/updatePassword`,
    forgetPassword: `${baseUrl}user/forgetPassword`,
    uploadFile: `${baseUrl}user/uploadFile`,
    fileDetails: `${baseUrl}user/fileDetails`,
    uploadSignature: `${baseUrl}user/uploadSignature`,
    URLToExclude: ['login', 'signup', 'forgetPassword'],
}