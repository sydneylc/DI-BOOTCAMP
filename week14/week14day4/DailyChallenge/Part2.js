app.use(express.json());

app.post('/api/world', (req, res) => {
  const inputValue = req.body.value;
  console.log('Received POST request. Value:', inputValue);
  res.json({ message: `I received your POST request. This is what you sent me: ${inputValue}` });
});

