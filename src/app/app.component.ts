import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { DeleteproductComponent } from './pages/deleteproduct/deleteproduct.component';
import { EditproductComponent } from './pages/editproduct/editproduct.component';
import { ViewallComponent } from './pages/viewall/viewall.component';

@Component({
  selector: 'app-root',
  imports: [ AddproductComponent ,DeleteproductComponent,EditproductComponent,ViewallComponent,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
