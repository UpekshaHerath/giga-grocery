package com.inventoryManagement.backend.repository;

import com.inventoryManagement.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    /**
     * This method will return a product from the database based on the product name
     * @param name
     * @return List<Product>
     */
    @Query(value = "SELECT * FROM Product p WHERE p.name = :name", nativeQuery = true)
    Product findByName(String name);

    /**
     * This method will filter products according to price range
     * @param minPrice
     * @param maxPrice
     * @return List<Product>
     */
    @Query(value = "SELECT * FROM Product p WHERE p.price BETWEEN :minPrice AND :maxPrice", nativeQuery = true)
    List<Product> filterProductsAccordingToPrice(double minPrice, double maxPrice);

}
