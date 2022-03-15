const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    addReaction,
    updateThoughts,
    deleteThoughts,
    deleteReaction
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts)
    .post(createThoughts)

router
    .route('/:id')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/:reactionId')
    .delete(deleteReaction)

module.exports = router;