import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-explore',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {

}
