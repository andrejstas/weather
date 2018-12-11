const axios = require('axios');

module.exports = app => {
  app.get('/api/weather/:city', async (req, res) => {
    const city = req.params.city;

    axios
      .get(
        'http://api.openweathermap.org/data/2.5/weather?q=' +
          city +
          '&apikey=9b94df167b30c7a84e97df9ebc7508f9'
      )
      .then(response => {
        res.send(response.data);
      })
      .catch(function(error) {
        res.send(error);
      });
  });
};
