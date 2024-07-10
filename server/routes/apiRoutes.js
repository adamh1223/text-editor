const express = require('express');
const router = express.Router();
const { putDb, getDb } = require('../../client/src/js/database');

// API routes
router.get('/content', async (req, res) => {
  try {
    const content = await getDb();
    res.json({ content });
  } catch (error) {
    console.error('Error retrieving content from database:', error);
    res.status(500).json({ message: 'Error retrieving content from database' });
  }
});

router.post('/content', async (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: 'Content is required' });
  }

  try {
    await putDb(content);
    res.status(201).json({ message: 'Content saved successfully' });
  } catch (error) {
    console.error('Error saving content to database:', error);
    res.status(500).json({ message: 'Error saving content to database' });
  }
});

module.exports = router;
