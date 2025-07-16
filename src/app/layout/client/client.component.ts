import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-client',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {

}
