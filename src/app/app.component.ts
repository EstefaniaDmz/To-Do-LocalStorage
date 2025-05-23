import { Component } from '@angular/core';
import { MainComponent } from "./modules/to-do/pages/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoproject';
}
