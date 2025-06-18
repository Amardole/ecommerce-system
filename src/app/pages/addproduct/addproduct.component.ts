import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  product = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    imgurl: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(private productService: ProductService) {}

  addProduct() {
    if (
      !this.product.name ||
      !this.product.description ||
      !this.product.price ||
      !this.product.quantity ||
      !this.product.imgurl
    ) {
      this.errorMessage = 'All fields are required!';
      this.successMessage = '';
      return;
    }

    this.productService.addProduct(this.product).subscribe({
      next: () => {
        this.successMessage = '✅ Product added successfully!';
        this.errorMessage = '';
        this.product = { name: '', description: '', price: 0, quantity: 0, imgurl: '' };
      },
      error: () => {
        this.errorMessage = '❌ Failed to add product.';
        this.successMessage = '';
      }
    });
  }
}
