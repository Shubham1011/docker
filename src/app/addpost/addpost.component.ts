import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { Router } from '@angular/router';
import { APost } from '../apost';
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})

export class AddpostComponent implements OnInit {

  constructor(private postservice:PostServiceService,
    private router:Router) { }
  public rpost={}
  public apost=new APost('hello','this is it',[],"2dddwdwdw")
public data={}
  ngOnInit() {

     

  }
addpost(data){
  this.postservice.addpost(data).subscribe(d=>this.rpost=d)
  this.router.navigate(['/post'])
}


}
