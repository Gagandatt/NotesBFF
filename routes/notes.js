// routes/notes.js
const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');
const { authenticateUser } = require('../middlewares/authMiddleware');

router.get('/api/notes', authenticateUser, notesController.getAllNotes);
router.get('/api/notes/:id', authenticateUser, notesController.getNoteById);
router.post('/api/notes', authenticateUser, notesController.createNote);
router.put('/api/notes/:id', authenticateUser, notesController.updateNote);
router.delete('/api/notes/:id', authenticateUser, notesController.deleteNote);
router.post('/api/notes/:id/share', authenticateUser, notesController.shareNote);
router.get('/api/search', authenticateUser, notesController.searchNotes);

module.exports = router;
