package com.inventoryManagement.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Product")
public class Product {

    @Id
    @GeneratedValue
    private int productID;
    private String name;
    private String description;
    private double price;
    private double stock;

}
