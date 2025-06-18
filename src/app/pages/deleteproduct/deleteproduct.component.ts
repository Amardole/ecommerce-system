import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-deleteproduct',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent {
  productId!: number;
  successMessage: string = '';
  errorMessage: string = '';
  showSuccess: boolean = false;
  showError: boolean = false;

  constructor(private productService: ProductService) {}

  deleteProduct() {
    if (!this.productId) {
      alert("Please enter a product ID.");
      return;
    }

    this.productService.deleteProduct(this.productId).subscribe({
      next: () => {
        this.successMessage = `✔️ Product with ID ${this.productId} deleted successfully.`;
        this.showSuccess = true;
        this.showError = false;
        this.productId = 0;

        setTimeout(() => {
          this.showSuccess = false;
          this.successMessage = '';
        }, 5000);
      },
      error: (err) => {
        if (err.status === 404) {
          this.errorMessage = `❌ Product with ID ${this.productId} not found.`;
        } else {
          this.errorMessage = `❌ Error deleting product.`;
        }
        this.showError = true;
        this.showSuccess = false;

        setTimeout(() => {
          this.showError = false;
          this.errorMessage = '';
        }, 5000);
      }
    });
  }
}
