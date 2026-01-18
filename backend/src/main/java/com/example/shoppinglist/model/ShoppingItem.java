package com.example.shoppinglist.model;

import jakarta.persistence.*;

@Entity
@Table(name = "shopping_items")
public class ShoppingItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String itemName="";

    private int quantity= 1;

    private String unit="";

    private boolean packed;

    // REQUIRED default constructor
    public ShoppingItem() {}

    public ShoppingItem(String itemName, int quantity, String unit, boolean packed) {
        this.itemName = itemName;
        this.quantity = quantity;
        this.unit = unit;
        this.packed = packed;
    }

    public Long getId() {
        return id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public boolean isPacked() {
        return packed;
    }

    public void setPacked(boolean packed) {
        this.packed = packed;
    }
}
