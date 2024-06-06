import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  API_URL:string = 'http://localhost:8000'
  constructor(private http:HttpClient) { }
  uploadImage = (data:any)=>{
      return this.http.post(this.API_URL+'/files/upload',data)
  }
  AnyuploadImage = (data:any)=>{
    return this.http.post(this.API_URL+'/files/anyupload',data)
  }
}
