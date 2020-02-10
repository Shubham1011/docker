import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray, Form } from '@angular/forms';

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

  get array(){
    return this.data.get('comments') as FormArray
  }

  addtoarray(){
    this.array.push(this.formbuilder.control(''))
  }

  data=this.formbuilder.group({
    title:['',[Validators.required,Validators.minLength(3)]],
    content:[''],
    agree:[true],
    email:['',[Validators.email]],
    comments:this.formbuilder.array([])
  })

}
