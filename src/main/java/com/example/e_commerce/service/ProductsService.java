package com.example.e_commerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.e_commerce.entity.Products;
import com.example.e_commerce.repo.ProductsRepo;

@Service
public class ProductsService {
	
	@Autowired
	private ProductsRepo productsRepo; // ✅

	
	public List<Products> getAllProducts(){
		return productsRepo.findAll();
	}
	
	public Products getProductById(Long id) {
		return productsRepo.findById(id).orElse(null);
	}
	
	public Products saveProduct(Products product) {
		return productsRepo.save(product);
	}
	
	
	public Products updateProduct(Long id , Products Updatedproduct) {
		Products ex = productsRepo.findById(id).orElse(null);
		if(ex != null) {
			ex.setName(Updatedproduct.getName());
            ex.setDescription(Updatedproduct.getDescription());
            ex.setPrice(Updatedproduct.getPrice());
            ex.setQuantity(Updatedproduct.getQuantity());
            ex.setImgurl(Updatedproduct.getImgurl());
            return productsRepo.save(ex);
        }
		return null;	
	}
	
	public void DeleteProduct(Long id) {
		productsRepo.deleteById(id);
	}

}
