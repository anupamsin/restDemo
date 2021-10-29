package com.cybage.app.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class Idea {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  
  @Column
  private String title;
  
  @Column
  private String description;
  
  @Column
  private Date createdAt;

}