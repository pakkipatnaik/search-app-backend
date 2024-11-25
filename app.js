const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

app.use(cors()); 

app.get('/api/suggestions', (req, res) => {
  const query = (req.query.query || '').toLowerCase();

  console.log("Query received:", query);
  
  const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));
  
  console.log("Filtered Suggestions:", filteredSuggestions);

  if (filteredSuggestions.length === 0) {
    return res.status(404).json({ error: "No suggestions found" });
  }

  res.json(filteredSuggestions); 
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
