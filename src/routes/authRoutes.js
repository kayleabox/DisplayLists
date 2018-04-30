
module.exports = (app) => {
  app.get('/dashboard', (req, res) => {
    console.log('made it!');
    res.send('success');
  });
};