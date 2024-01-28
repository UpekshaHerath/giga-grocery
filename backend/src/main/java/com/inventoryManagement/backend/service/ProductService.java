package com.inventoryManagement.backend.service;

import com.inventoryManagement.backend.entity.Product;
import com.inventoryManagement.backend.repository.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    /***
     * This method will save a product to the database
     * @param product
     * @return Product
     */
    public Product saveProduct(Product product) {
        try {
            if (this.getProductByName(product.getName()) != null && product.getPrice() < 0 && product.getStock() < 0 && product.getName().equals("")) {
                log.info("Product already exists !!");
                return null;
            }
            if (product.getName() == "" && product.getPrice() == 0 && product.getStock() == 0 && product.getDescription() == "") {
                log.info("Product is empty");
                return null;
            }
            productRepository.save(product);
            log.info("Product added successfully!!");
            return getProductByName(product.getName());
        } catch (Exception e) {
            log.error("Product didn't added !!");
            return null;
        }
    }

    /***
     * This method will return a product from the database based on the productID
     * @param
     * @return Product
     */
    public List<Product> getProducts() {
        if (productRepository.findAll().isEmpty()) {
            return null;
        }
        return productRepository.findAll();
    }

    /***
     * This method will return a product from the database based on the productID
     * @param productID
     * @return Product
     */
    public Product getProductByID(int productID) {
        if (productRepository.findById(productID).isEmpty()) {
            return null;
        }
        return productRepository.findById(productID).orElse(null);
    }

    /***
     * This method will return a product from the database based on the name
     * @param name
     * @return List<Product>
     */
    public Product getProductByName(String name) {
        log.info("product get by name method");
        if (productRepository.findByName(name) == null) {
            return null;
        }
        log.info(productRepository.findByName(name).toString());
        return productRepository.findByName(name);
    }

    /***
     * This method will delete a product in the database based on the productID
     * @param productID
     * @return String
     */
    public ResponseEntity deleteProduct(int productID) {
        if (productRepository.findById(productID).isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found!!");
        } else {
            try {
                productRepository.deleteById(productID);
                return ResponseEntity.status(HttpStatus.OK).body("Product removed successfully!! ");
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
            }
        }
    }

    /***
     * This method will update a product in the database based on the productID
     * @param product
     * @return Product
     */
    public Product updateProduct(Product product) {
        if (productRepository.findById(product.getProductID()).isEmpty() || product.getPrice() < 0 || product.getStock() < 0) {
            return null;
        }
        try {
            if (product.getProductID() > 0) {
                Product existingProduct = productRepository.findById(product.getProductID()).orElse(null);
                existingProduct.setProductID(product.getProductID());
                existingProduct.setName(product.getName());
                existingProduct.setDescription(product.getDescription());
                existingProduct.setPrice(product.getPrice());
                existingProduct.setStock(product.getStock());
                return productRepository.save(existingProduct);
            } else {
                return null;
            }
        } catch (Exception e) {
            return null;
        }
    }

    /**
     * This method will filter products according to price range
     * @param minPrice
     * @param maxPrice
     * @return
     */
    public List<Product> filterProductsAccordingToPrice(double minPrice, double maxPrice) {
        if (productRepository.findAll().isEmpty()) {
            return null;
        }
        if (minPrice > maxPrice) {
            double temp = minPrice;
            minPrice = maxPrice;
            maxPrice = temp;
        }
        return productRepository.filterProductsAccordingToPrice(minPrice, maxPrice);
    }

}
