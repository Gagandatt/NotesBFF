const Note = require('../models/note');
const User = require('../models/user');

// Get all notes for the authenticated user
const getAllNotes = async (req, res) => {
    try {
        const userId = req.user.userId;
        const notes = await Note.find({ userId });
        res.json({ notes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get a note by ID for the authenticated user
const getNoteById = async (req, res) => {
    try {
        const userId = req.user.userId;
        const noteId = req.params.id;
        // Find the note by ID and user ID
        const note = await Note.findOne({ _id: noteId, userId });
        console.log(note)

        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.json({ note });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Create a new note for the authenticated user
const createNote = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required fields.' });
        }
        const newNote = new Note({
            userId,
            title,
            content,
        });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update an existing note by ID for the authenticated user
const updateNote = async (req, res) => {
    try {
        const userId = req.user.userId;
        const noteId = req.params.id;
        const { title, content } = req.body;

        const updatedNote = await Note.findOneAndUpdate(
            { _id: noteId, userId },
            { title, content, updatedAt: Date.now() },
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ error: 'Note not found' });
        }

        res.json(updatedNote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a note by ID for the authenticated user
const deleteNote = async (req, res) => {
    try {
        const userId = req.user.userId;
        const noteId = req.params.id;
        // Check if the note exists
        const existingNote = await Note.findOne({ _id: noteId, userId });
        if (!existingNote) {
            return res.status(404).json({ error: 'Note not found' });
        }
        // Delete the note
        await existingNote.deleteOne();
        res.json({ message: 'Note deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Share a note with another user for the authenticated user
const shareNote = async (req, res) => {
    try {
        const userId = req.user.userId;
        const noteId = req.params.id;
        const { username } = req.body;

        // Check if the note exists
        const existingNote = await Note.findOne({ _id: noteId, userId });

        if (!existingNote) {
            return res.status(404).json({ error: 'Note not found' });
        }

        // Check if the user to share with exists
        const userToShareWith = await User.findOne({ username });
        console.log(userToShareWith)
        if (!userToShareWith) {
            return res.status(404).json({ error: 'User to share with not found' });
        }
        existingNote.sharedWith = existingNote.sharedWith || [];
        // Update the note to include the shared user
        existingNote.sharedWith.push(userToShareWith._id);
        await existingNote.save();

        res.json({ message: 'Note shared successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all notes for the authenticated user or search based on keywords
const searchNotes = async (req, res) => {
    try {
        const userId = req.user.userId;
        const query = req.query.q;
        const notes = await Note.find(
            { userId: userId, $text: { $search: query, $caseSensitive: false } },
            { score: { $meta: 'textScore' } }
        ).sort({ score: { $meta: 'textScore' } });
        res.json({ notes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports = { getAllNotes, getNoteById, createNote, updateNote, deleteNote, shareNote, searchNotes };
