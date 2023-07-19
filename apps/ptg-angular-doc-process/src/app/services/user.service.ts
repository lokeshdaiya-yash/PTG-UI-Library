import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../../config';
import {ResetPasswordModel} from '../dashboard/user/models/password-model';
import { FileModel } from '../dashboard/user/models/file-model';
import { BehaviorSubject, Observable } from 'rxjs';
import {UserModel} from '../dashboard/user/models/user-model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUserName = new BehaviorSubject<string>('User');
  private dataSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
  data: Observable<string> = this.dataSource.asObservable();

  endPOints = ENDPOINTS;
  loggeduserdata: string;
  constructor(private http: HttpClient) { }

  resetPassword(passwordData: ResetPasswordModel){
    return this.http.post(this.endPOints.updatePassword, passwordData);
  }
  getUserData(data: any){
    return this.http.post(`${this.endPOints.user}/userData`,data);
  }
  updateUserdetails(data:UserModel){
    return this.http.post(`${this.endPOints.user}/updateUser`,data);
  }

  setUsername(name:string){
    this.loggedUserName.next(name);
  }

  getLoggedUserName(){
    return this.loggedUserName.asObservable();
  }

  uploadFiles(fileData: any){
    console.log(fileData);
    console.log(this.endPOints.uploadFile)
    return this.http.post(this.endPOints.uploadFile, fileData);
  }

  uploadSignature(signatureData: any){
    console.log(signatureData)
    return this.http.post(this.endPOints.uploadSignature,signatureData);
    
  }

  getFile(data: any){
    return this.http.post(this.endPOints.fileDetails, data);
  }

  getFileList(payLoad: any){
    return this.http.post(this.endPOints.fileList,payLoad);
  }

  sendFileName(data: string) {
    this.dataSource.next(data);
  }

  saveFile(fileData: any){
    return this.http.post(this.endPOints.updateFile,fileData);
  }

  deleteFile(fileData: any){
    return this.http.post(this.endPOints.deleteFile,fileData);
  }

}
