import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostServiceService } from '../post-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.css']
})
export class FoundComponent implements OnInit {
public pid=''
public post={}
  constructor(
    private postservice:PostServiceService,
    private activeroute:ActivatedRoute,
    private route:Router
  ) {
   
   }

  ngOnInit() {
this.activeroute.paramMap.subscribe((params:ParamMap)=>{
  this.pid=params.get('id')
})
  }

  del(){

    this.postservice.deletepostbyid(this.pid).subscribe(data=>this.post=data)
this.route.navigate(['/post'])
  }

  back(){
    this.route.navigate(['/post',{id:this.pid}])
  }

}
