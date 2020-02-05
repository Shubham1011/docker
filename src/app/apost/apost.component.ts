import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { error } from 'protractor';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-apost',
  templateUrl: './apost.component.html',
  styleUrls: ['./apost.component.css']
})
export class ApostComponent implements OnInit {
@Input('parentD') public name;
public post=[]
public errormsg=''
public freshcomment={}
public showpostbtn=true;
public comments=[]
public newcommentpostid='';
public newcomment='sdsd';
public showcomment=false;
public showpost=false; 
public showadd=false;
public showerror=true;
public seenpid=''
public nopost=false
@Output() public childevent=new EventEmitter()
  constructor(private p_service:PostServiceService,private router:Router,private activeroute:ActivatedRoute) {

   }

  
  send(){
    this.childevent.emit('hello world')
  }
  ngOnInit() {
    this.p_service.getEmployee().subscribe(data=>this.post=data ,
                                          error=>this.errormsg=error)
                                          this.activeroute.paramMap.subscribe((params:ParamMap)=>{
                                            this.seenpid=params.get('id')
                                          })
                                          this.showpostbtn=true
                                          this.nopost=false
    
  }
  
  showpostmethod(){
    alert("Don't worry !! Lemme check if any")
    this.ngOnInit() 
    if(this.post.length===0)
    {
      this.nopost=true
  this.showpost=false
  
    }
    this.showpost=true
    this.showcomment=false
    this.showadd=false
    this.showpostbtn=false

  }
  home(){
    this.router.navigate[('/post')]
  }
  showcommentmethod(id){

   alert(id)
   this.newcommentpostid=id
    this.showpost=false
    this.showcomment=true
    this.showadd=false
    this.p_service.getComment(id).subscribe(data=>this.comments=data)
    this.newcomment=''
    this.post = this.post.filter(
      apost => apost._id === id);
  }

  addcomment(){
    alert(this.newcomment+'to'+this.newcommentpostid)
    
    this.p_service.addcommenttopost(this.newcommentpostid,this.newcomment).subscribe(data=>this.freshcomment=data)
    console.log(this.freshcomment);
    alert('comment added successfully')
    this.showpost=true;
    this.showcomment=false;
    this.showadd=false;
this.ngOnInit()
  }
   hide(){
    this.showpost=false
    this.showcomment=false
    this.showadd=false
    this.showpostbtn=true
    this.ngOnInit()
   }  

   found(id){
this.router.navigate(['/found',id])
   }

   seen(sid)
   {
     return sid===this.seenpid
     
   }

}
