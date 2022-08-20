import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('ProductId'),'getProductId';
    if(this.getparamid)
    {
    this.service.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res,'res==>');
      this.userForm.patchValue({
        ProductName:res.data[0].ProductName,
        CategoryId:res.data[0].CategoryId,
        CategoryName:res.data[0].CategoryName
      });
    });
  }
  }
  userForm = new FormGroup({
    'ProductName':new FormControl('',Validators.required),
    'CategoryId':new FormControl('',Validators.required),
    'CategoryName':new FormControl('',Validators.required),  
  });

  userSubmit ()
  {
    if(this.userForm.valid)
    {
      console.log(this.userForm.value)
      this.service.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.userForm.reset();
        this.successmsg = res.message;
      })
    }
    else
    {
      this.errormsg = 'all fiels is required !';
    }
  }

  userUpdate()
  {
    console.log(this.userForm.value,'updatedform');
    if(this.userForm.valid)
    {
      this.service.updateData(this.userForm.value,this.getparamid).subscribe((res)=>{
      console.log(res,'resupdated');
      this.successmsg = res.message;
      });
    }else
    {
      this.errormsg = 'all field is required';
    }
  }

}
