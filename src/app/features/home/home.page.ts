import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderPage } from '../../shared/header/header.page';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [RouterLink, HeaderPage],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

}
