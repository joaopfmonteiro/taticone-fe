import { Component } from '@angular/core';
import { HeaderPage } from '../../shared/header/header.page';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderPage],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss',
    '../../styles/forms.scss'
  ]
})
export class LoginPage {

}
