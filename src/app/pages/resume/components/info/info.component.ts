import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,MatIconModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{

  dataForm:FormGroup=this.formBuilder.group({
    lastName:[{value:'',disabled: true}],
    firstName:[{value:'',disabled: true}]
  })
  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit(): void {
    this.dataForm.setValue({
      firstName:'Daniel',
      lastName:'Abril'
    })
  }
}
