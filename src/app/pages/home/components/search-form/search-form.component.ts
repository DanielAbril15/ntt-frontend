import { CommonModule } from '@angular/common';
import { Component, ErrorHandler } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchService } from '../../../../core/services/search.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent {
  documentError:string=''

  searchForm:FormGroup = this.formBuilder.group({
    documentType:['', Validators.required],
    document:['',[Validators.required,Validators.minLength(8),Validators.maxLength(11)]]
  })

  constructor(
    private formBuilder:FormBuilder,
    private searchSvc:SearchService,
    private router: Router,
  ){
  }


  onSearch(){
    this.searchSvc.getUserData(this.searchForm.controls['documentType'].value,this.searchForm.controls['document'].value).pipe(
      catchError((err:any)=>{
        if (err.status === 400) {
          Swal.fire({
            title: 'Error!',
            text: 'El tipo de documento no existe',
            icon: 'error',
          })
        }else if(err.status === 404){
          Swal.fire({
            title: 'Error!',
            text: 'El usuario no existe',
            icon: 'error',
          })
        }else if(err.status === 500){
          Swal.fire({
            title: 'Error!',
            text: 'La cedula no puede contener letras',
            icon: 'error',
          })
        }
        throw err
      })
    ).subscribe(res=>{
      
      this.searchSvc.saveUserData(res)
      this.router.navigate(['/resumen']);
    })
  }

}
