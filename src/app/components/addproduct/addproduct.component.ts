import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadService } from '../../upload.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
    constructor(private uploadService: UploadService){}
    productform = new FormGroup({
      name: new FormControl('',Validators.required),
      shortdescription: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      category: new FormControl('',Validators.required),
      thumbnail: new FormControl('',Validators.required),
      images: new FormControl('',Validators.required),
      start_price: new FormControl('',Validators.required),
      start_time: new FormControl('',Validators.required),
      end_time: new FormControl('',Validators.required),
      step: new FormControl('',Validators.required)
    })
    thumbnail:string = ''
    onUpload = (e:any)=>{
        // console.log(e.target.files[0]);
        const dataform = new FormData();
        dataform.append('file', e.target.files[0])  
          this.uploadService.uploadImage(dataform).subscribe(
            (data:any)=>{
                console.log(data);     
                this.thumbnail = this.uploadService.API_URL+data?.url
                this.productform.controls.thumbnail.setValue(this.uploadService.API_URL+data?.url)           
            }
            ,error=>{
              console.log(error);
              
            }
          )
    }
}
