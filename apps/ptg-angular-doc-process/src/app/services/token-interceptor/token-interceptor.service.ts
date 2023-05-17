/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @interceptor Interceptor Service;
 * @description This service for TokenInterceptor
 */


import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { getLastItem } from '../../common/utils/utils';
import { ENDPOINTS } from '../../../config/index';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  endPoints = ENDPOINTS;
  constructor(private authService: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const URLToExclude = this.endPoints.URLToExclude;
    console.log('Invoking intercepter');
    if (!(URLToExclude.findIndex((url) =>getLastItem(request.url).includes(url)) > -1)) 
    {
      const token = JSON.parse(this.authService.getToken())?.accessToken;
      request = request.clone({
        setHeaders: {
          'x-access-token': `${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
