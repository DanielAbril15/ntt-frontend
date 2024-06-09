import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { SearchService } from '../../../../core/services/search.service';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,MatIconModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{

  userData!:User

  dataForm:FormGroup=this.formBuilder.group({
    lastName:[{value:'',disabled: true}],
    firstName:[{value:'',disabled: true}]
  })
  constructor(
    private formBuilder:FormBuilder,
    private searchSvc: SearchService
  ){
    this.userData = this.searchSvc.getUsetStorage()
  }
  ngOnInit(): void {
    this.dataForm.setValue({
      firstName:this.userData.firstName,
      lastName:this.userData.firstLastName
    })
  }

  back(){
    sessionStorage.removeItem('clientData')
  }
}
