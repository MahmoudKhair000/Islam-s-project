import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
