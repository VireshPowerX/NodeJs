import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiserviceService) { }
  totalLength:any;
  page:number = 1;
  readData:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllData();
  }

  deleteID(ProductId:any)
  {
    console.log(ProductId,'deleteProductId==>');
    this.service.deleteData(ProductId).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = res.message;
      this.getAllData();
    });
  }

getAllData()
{
this.service.getAllData().subscribe((res)=>{
  console.log(res,"res==>");
  this.readData = res.data;
  this.totalLength = res.length;
});
}
}
