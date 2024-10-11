import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
@Component({
  selector: 'tab-menu',
  standalone: true,
  imports: [TabViewModule],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.scss'
})
export class TabMenuComponent {

}
