// backend/routes/notes.js

const express = require('express');
const router = express.Router();
const db = require('../models'); // Import your database models

// GET all notes
router.get('/notes', async (req, res) => {
  try {
    const notes = await db.Note.findAll();
    res.json(notes);
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST a new note
router.post('/notes', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = await db.Note.create({ title, content });
    res.status(201).json(newNote);
  } catch (error) {
    console.error('Error creating note:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Other CRUD routes (PUT, DELETE) can be implemented similarly

module.exports = router;
