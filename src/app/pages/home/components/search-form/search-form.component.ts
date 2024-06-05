import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchService } from '../../../../core/services/search.service';
import { Router } from '@angular/router';

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
    // this.searchSvc.saveDocumentData(this.searchForm.controls['document'].value)
    console.log(this.searchForm.value);
    
    this.router.navigate(['/resumen']);
  }

}
