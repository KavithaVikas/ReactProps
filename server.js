let express = require('express');
let path = require('path');
let app = express();
const PORT =  4000;

app.use(express.static(__dirname + '/src/dist'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/dist', 'index.html'));
  });
  
  app.listen(PORT, ()=>{
      console.log('server started and listening on port : ' + PORT);
  });