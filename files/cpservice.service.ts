import { Injectable } from '@angular/core';
 
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';

@Injectable()
export class CpserviceService {
 
  constructor(private  httpClient: HttpClient) { }


  changePassword(currentPassword, confirmPassword)
  {
    this.httpClient.post<any>("http://localhost:1212/users",{
      "id":"5","uri":"http://google.com","firstName":"Yogesh","lastName":"Dhawale"
    },
  {}).subscribe((res)=>{
      console.log(res);

    });
    return currentPassword;
  }
}
