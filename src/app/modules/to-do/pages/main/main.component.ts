import { Component } from '@angular/core';

import { HeaderComponent } from '../../../shared/components/header/header.component';
import { ToDoTableComponent } from '../../components/to-do-table/to-do-table.component';
import { RibbonComponent } from '../../../shared/components/ribbon/ribbon.component';

@Component({
  selector: 'to-do-main-page',
  standalone: true,
  imports: [HeaderComponent, ToDoTableComponent, RibbonComponent],
  templateUrl: './main.component.html',
  styles: ``
})
export class MainComponent {

}
