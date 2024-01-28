package com.inventoryManagement.backend.controller;

import com.inventoryManagement.backend.entity.Product;
import com.inventoryManagement.backend.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("product")
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class ProductController {

    @Autowired
    private ProductService productService;

    /**
     * This method will save a product to the database
     * @param product
     * @return ResponseEntity
     */
    @PostMapping("/addProduct")
    public Product addProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    /**
     * This method will return a products from the database based on the productID
     * @return List<Product>
     */
    @GetMapping("/products")
    public List<Product> findAllProducts() {
        return productService.getProducts();
    }

    /**
     * This method will return a product from the database based on the productID
     * @param productID
     * @return Product
     */
    @GetMapping("/productByID/{productID}")
    public Product findProductById(@PathVariable int productID) {
        return productService.getProductByID(productID);
    }

    /**
     * This method will return a product from the database based on the product name
     * @param name
     * @return List<Product>
     */
    @GetMapping("/productByName/{name}")
    public Product findProductByName(@PathVariable String name) {
        return productService.getProductByName(name);
    }

    /**
     * This method will update a product in the database
     * @param product
     * @return Product
     */
    @PutMapping("/update")
    public Product updateProduct(@RequestBody Product product) {
        return productService.updateProduct(product);
    }

    /**
     * This method will delete a product in the database based on the productID
     * @param productID
     * @return ResponseEntity
     */
    @DeleteMapping("/delete/{productID}")
    public ResponseEntity deleteProduct(@PathVariable int productID) {
        return productService.deleteProduct(productID);
    }

    /**
     * This method will filter products according to price
     * @param minPrice
     * @param maxPrice
     * @return List<Product>
     */
    @GetMapping("/filterProductsAccordingToPrice/{minPrice}/{maxPrice}")
    public List<Product> filterProductsAccordingToPrice(@PathVariable double minPrice, @PathVariable double maxPrice) {
        return productService.filterProductsAccordingToPrice(minPrice, maxPrice);
    }

}
