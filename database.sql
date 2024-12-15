CREATE DATABASE plant_recipes;
CREATE TABLE plants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  scientific_name VARCHAR(255),
  image_url VARCHAR(255)
);
CREATE TABLE plantrecipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  ingredients TEXT,
  instructions TEXT,
  plant_id INT,
  FOREIGN KEY (plant_id) REFERENCES plants(id) ON DELETE CASCADE
);

CREATE DATABASE fish_recipes;
CREATE TABLE fish (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  scientific_name VARCHAR(255),
  image_url VARCHAR(255)
);
CREATE TABLE fishrecipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  ingredients TEXT,
  instructions TEXT,
  fish_id INT,
  FOREIGN KEY (fish_id) REFERENCES fish(id) ON DELETE CASCADE
);

CREATE DATABASE game_recipes;
CREATE TABLE game (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  scientific_name VARCHAR(255),
  image_url VARCHAR(255)
);
CREATE TABLE gamerecipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  ingredients TEXT,
  instructions TEXT,
  game_id INT,
  FOREIGN KEY (game_id) REFERENCES game(id) ON DELETE CASCADE
);