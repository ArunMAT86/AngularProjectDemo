import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  template: `<app-login/>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
