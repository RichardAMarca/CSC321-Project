const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'plant_recipes',
  database: 'fish_recipes',
  database: 'game_recipes',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database!');
});

app.use(bodyParser.json());

// Get all plants
app.get('/plants', (req, res) => {
  db.query('SELECT * FROM plants', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get all plant recipes
app.get('/plantrecipes', (req, res) => {
  db.query('SELECT * FROM plantrecipes', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get recipes for a specific plant
app.get('/plantrecipes/:plantId', (req, res) => {
  const plantId = req.params.plantId;
  db.query('SELECT * FROM plantrecipes WHERE plant_id = ?', [plantId], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new plant
app.post('/plants', (req, res) => {
  const { name, description, scientific_name, image_url } = req.body;
  db.query(
    'INSERT INTO plants (name, description, scientific_name, image_url) VALUES (?, ?, ?, ?)',
    [name, description, scientific_name, image_url],
    (err, result) => {
      if (err) throw err;
      res.status(201).json({ id: result.insertId, name, description });
    }
  );
});

// Add a new plant recipe
app.post('/plantrecipes', (req, res) => {
  const { name, ingredients, instructions, plant_id } = req.body;
  db.query(
    'INSERT INTO plantrecipes (name, ingredients, instructions, plant_id) VALUES (?, ?, ?, ?)',
    [name, ingredients, instructions, plant_id],
    (err, result) => {
      if (err) throw err;
      res.status(201).json({ id: result.insertId, name, ingredients });
    }
  );
});

// Get all fish
app.get('/fish', (req, res) => {
  db.query('SELECT * FROM fish', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get all fish recipes
app.get('/fishrecipes', (req, res) => {
  db.query('SELECT * FROM fishrecipes', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get recipes for a specific fish
app.get('/fishrecipes/:fishId', (req, res) => {
  const fishId = req.params.fishId;
  db.query('SELECT * FROM fishrecipes WHERE fish_id = ?', [fishId], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new fish
app.post('/fish', (req, res) => {
  const { name, description, scientific_name, image_url } = req.body;
  db.query(
    'INSERT INTO fish (name, description, scientific_name, image_url) VALUES (?, ?, ?, ?)',
    [name, description, scientific_name, image_url],
    (err, result) => {
      if (err) throw err;
      res.status(201).json({ id: result.insertId, name, description });
    }
  );
});

// Add a new fish recipe
app.post('/fishrecipes', (req, res) => {
  const { name, ingredients, instructions, fish_id } = req.body;
  db.query(
    'INSERT INTO fishrecipes (name, ingredients, instructions, fish_id) VALUES (?, ?, ?, ?)',
    [name, ingredients, instructions, fish_id],
    (err, result) => {
      if (err) throw err;
      res.status(201).json({ id: result.insertId, name, ingredients });
    }
  );
});

// Get all game
app.get('/game', (req, res) => {
  db.query('SELECT * FROM game', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get all game recipes
app.get('/gamerecipes', (req, res) => {
  db.query('SELECT * FROM gamerecipes', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get recipes for a specific game
app.get('/gamerecipes/:gameId', (req, res) => {
  const gameId = req.params.gameId;
  db.query('SELECT * FROM gamerecipes WHERE game_id = ?', [gameId], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new game
app.post('/game', (req, res) => {
  const { name, description, scientific_name, image_url } = req.body;
  db.query(
    'INSERT INTO game (name, description, scientific_name, image_url) VALUES (?, ?, ?, ?)',
    [name, description, scientific_name, image_url],
    (err, result) => {
      if (err) throw err;
      res.status(201).json({ id: result.insertId, name, description });
    }
  );
});

// Add a new game recipe
app.post('/gamerecipes', (req, res) => {
  const { name, ingredients, instructions, game_id } = req.body;
  db.query(
    'INSERT INTO gamerecipes (name, ingredients, instructions, game_id) VALUES (?, ?, ?, ?)',
    [name, ingredients, instructions, game_id],
    (err, result) => {
      if (err) throw err;
      res.status(201).json({ id: result.insertId, name, ingredients });
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
