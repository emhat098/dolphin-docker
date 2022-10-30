const app = require('express')();

app.get('/', (req, res) => {
  res.json({message: "Docker is running. 🐬"});
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Application is running on port ${port}`));
