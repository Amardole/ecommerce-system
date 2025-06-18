import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-editproduct',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {
  productId!: number;
  product: any = null;
  successMsg = '';
  errorMsg = '';

  constructor(private productService: ProductService) {}

  fetchProduct() {
    if (!this.productId) return;

    this.productService.getProductById(this.productId).subscribe({
      next: (data) => {
        this.product = data;
        this.successMsg = '';
        this.errorMsg = '';
      },
      error: () => {
        this.product = null;
        this.errorMsg = '❌ Product not found!';
      }
    });
  }

  updateProduct() {
    if (!this.productId || !this.product) return;

    this.productService.updateProduct(this.productId, this.product).subscribe({
      next: () => {
        this.successMsg = '✅ Product updated successfully!';
        this.errorMsg = '';

        // Hide form and reset after 5 seconds
        setTimeout(() => {
          this.product = null;
          this.productId = 0;
          this.successMsg = '';
        }, 1200);
      },
      error: () => {
        this.successMsg = '';
        this.errorMsg = '❌ Failed to update product.';
      }
    });
  }
}
