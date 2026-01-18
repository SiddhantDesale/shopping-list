package com.example.shoppinglist.repository;

import com.example.shoppinglist.model.ShoppingItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingItemRepository
        extends JpaRepository<ShoppingItem, Long> {
}
