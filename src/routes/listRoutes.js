module.exports = (app) => {
  app.get('/api/get', (req, res) => {
    console.log('made it!');
    res.send('success');
  });

  app.get('/dashboard', (req, res) => {
    console.log('made it!');
    res.send('success');
  });
};