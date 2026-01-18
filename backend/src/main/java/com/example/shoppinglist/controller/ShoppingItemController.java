package com.example.shoppinglist.controller;

import com.example.shoppinglist.model.ShoppingItem;
import com.example.shoppinglist.service.ShoppingItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "http://localhost:3000")
public class ShoppingItemController {

    private final ShoppingItemService service;

    public ShoppingItemController(ShoppingItemService service) {
        this.service = service;
    }

    // GET all items
    @GetMapping
    public List<ShoppingItem> getItems() {
        return service.getAllItems();
    }

    // ADD new item
    @PostMapping
    public ShoppingItem addItem(@RequestBody ShoppingItem item) {
        return service.addItem(item);
    }

    // TOGGLE packed checkbox
    @PutMapping("/{id}/toggle")
    public ShoppingItem togglePacked(@PathVariable Long id) {
        return service.togglePacked(id);
    }

    // DELETE item
    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable Long id) {
        service.deleteItem(id);
    }
}
