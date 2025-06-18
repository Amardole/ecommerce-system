package com.example.e_commerce.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.e_commerce.entity.Products;

public interface ProductsRepo extends JpaRepository<Products, Long> {

}
