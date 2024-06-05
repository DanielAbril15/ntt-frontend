import { Component } from '@angular/core';
import { SearchFormComponent } from './components/search-form/search-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
