package com.example.e_commerce.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.e_commerce.entity.Products;
import com.example.e_commerce.repo.*;
import com.example.e_commerce.service.ProductsService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductsController {

    @Autowired
    private ProductsService service;

    @Autowired
    private ProductsRepo repository;

    
    @GetMapping
    public List<Products> getAllProduct() {
        return service.getAllProducts();
    }

    
    @GetMapping("/{id}")
    public ResponseEntity<Products> getProductById(@PathVariable Long id) {
        Products product = service.getProductById(id);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

  
    @PostMapping
    public Products addProducts(@RequestBody Products product) {
        return service.saveProduct(product);
    }

 
    @PutMapping("/{id}")
    public ResponseEntity<Products> updateProduct(@PathVariable Long id, @RequestBody Products product) {
        Products updated = service.updateProduct(id, product);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        Optional<Products> existingProduct = repository.findById(id);
        if (existingProduct.isPresent()) {
            service.DeleteProduct(id);
            return ResponseEntity.noContent().build(); // 204 No Content
        } else {
            return ResponseEntity.notFound().build(); // 404 Not Found
        }
    }
}
