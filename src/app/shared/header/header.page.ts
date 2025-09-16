import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.page.html',
  styleUrl: './header.page.scss'
})
export class HeaderPage {
  @Input() brand = 'TATICONE';
}
