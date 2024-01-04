// routes/notes.js
const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');
const { authenticateUser } = require('../middlewares/authMiddleware');

router.get('/notes', authenticateUser, notesController.getAllNotes);
router.get('/notes/:id', authenticateUser, notesController.getNoteById);
router.post('/notes', authenticateUser, notesController.createNote);
router.put('/notes/:id', authenticateUser, notesController.updateNote);
router.delete('/notes/:id', authenticateUser, notesController.deleteNote);
router.post('/notes/:id/share', authenticateUser, notesController.shareNote);
router.get('/search', authenticateUser, notesController.searchNotes);

module.exports = router;
