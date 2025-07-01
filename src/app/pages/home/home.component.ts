import { Component } from '@angular/core';

import { HeaderComponent } from "../../components/header/header.component";
import { SearchFilterComponent } from '../../components/search-filter/search-filter.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SearchFilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
