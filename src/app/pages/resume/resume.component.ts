import { Component } from '@angular/core';
import { InfoComponent } from './components/info/info.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [InfoComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  constructor(){}
}
