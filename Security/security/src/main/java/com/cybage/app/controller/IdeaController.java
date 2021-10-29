package com.cybage.app.controller;

import com.cybage.app.dao.IdeaRepository;
import com.cybage.app.entity.Idea;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ideas")
public class IdeaController {
  @Autowired
  private IdeaRepository repository;

  @GetMapping
  public List<Idea> findAll() {
    return repository.findAll();
  }
  
  @PostMapping
  public Idea add(@RequestBody Idea idea) {
    Idea model = new Idea();
    model.setCreatedAt(new Date());
    model.setTitle(idea.getTitle());
    model.setDescription(idea.getDescription());
    return repository.saveAndFlush(model);
  }
  
  @GetMapping(value = "/{id}")
  public Optional<Idea> findOne(@PathVariable long id) {
    return repository.findById(id);
  }
  
  @PutMapping(value = "/{id}")
  public Idea update(@PathVariable long id, @RequestBody Idea idea) {
    Idea model = repository.getById(id);
    if (model != null) {
      model.setTitle(idea.getTitle());
      model.setDescription(idea.getDescription());
      return repository.saveAndFlush(model);
    }
    return null;
  }
  
  @DeleteMapping(value = "/{id}")
  public void delete(@PathVariable long id) {
    repository.deleteById(id);
  }
}