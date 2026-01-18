package com.example.shoppinglist.service;

import com.example.shoppinglist.exception.ResourceNotFoundException;
import com.example.shoppinglist.model.ShoppingItem;
import com.example.shoppinglist.repository.ShoppingItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoppingItemService {

    private final ShoppingItemRepository repository;

    public ShoppingItemService(ShoppingItemRepository repository) {
        this.repository = repository;
    }

    public List<ShoppingItem> getAllItems() {
        return repository.findAll();
    }

    public ShoppingItem addItem(ShoppingItem item) {
        item.setPacked(false);
        return repository.save(item);
    }

    public ShoppingItem togglePacked(Long id) {
        ShoppingItem item = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Item not found"));

        item.setPacked(!item.isPacked());
        return repository.save(item);
    }

    public void deleteItem(Long id) {
        if (!repository.existsById(id)) {
            throw new ResourceNotFoundException("Item not found");
        }
        repository.deleteById(id);
    }
}
