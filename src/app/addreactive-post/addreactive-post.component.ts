import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-addreactive-post',
  templateUrl: './addreactive-post.component.html',
  styleUrls: ['./addreactive-post.component.css']
})
export class AddreactivePostComponent implements OnInit {

  
  constructor(private formbuilder:FormBuilder,
    ) { }

  ngOnInit() {
    
   
  } 

  data=this.formbuilder.group({
    title:['',Validators.required],
    content:[''],
    agree:[true]
  })

}
