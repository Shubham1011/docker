import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Ipost } from './post';
import { Observable } from 'rxjs';
import { comment } from './comment';
import {  throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';
import { ApostComponent } from './apost/apost.component';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
public newpostid=''
public comments=[]
  constructor(private httpclient:HttpClient) { }
  getEmployee():Observable<Ipost[]>{
return this.httpclient.get<Ipost[]>('http://localhost:3000/post/getallposts').pipe(catchError(this.errorhandler))
  }

  getComment(id):Observable<comment[]>{
    return this.httpclient.get<comment[]>('http://localhost:3000/post/getcommentbypostid/'+id)
  }

addcommenttopost(pid,comment):Observable<comment>{
  
  return this.httpclient.post<comment>('http://localhost:3000/post/'+pid+'/addcomment',{"content":comment,
"post":pid})
}

errorhandler(error:HttpErrorResponse)
{
  
 return  throwError(error.message || "Server Error")     
}

deletepostbyid(pid):Observable<Ipost>{
  return this.httpclient.delete<Ipost>('http://localhost:3000/post/deletebyid/'+pid)

}

addpost(post):Observable<Ipost>{
  return this.httpclient.post<Ipost>('http://localhost:3000/post/addpost',post)
}
}
