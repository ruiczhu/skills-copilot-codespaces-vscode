// Create web server
// Create a comment
// Delete a comment
// Get all comments
// Get a comment by id
// Update a comment

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Get all comments
router.get('/', (req, res) => {
    Comment.find()
        .then(comments => {
            res.status(200).json(comments);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Get a comment by id
router.get('/:id', (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => {
            res.status(200).json(comment);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Create a comment
router.post('/', (req, res) => {
    Comment.create({