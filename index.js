var express = require('express');
var expressHandebars = require('express-handlebars');

var app = express();



// app.use(express.static(__dirname + '/views'));

var users = {
  groups: {
    admin: ['eecha', 'mappy', 'anu'],
    members: ['anju', 'parvathy', 'surya']
  }
};

app.engine('handlebars', expressHandebars({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('big', {
      value1: 'Welcome',
value2 : 'to',
value3 : 'SRT Test API',
color : 'brown'
    });
});

app.get('/home', (req, res) => {
  res.end('You are home!!');
});

app.get('/kalapilaz', (req, res) => {
  
    res.render('big', {
      value1: 'I',
value2: 'LOVE',
value3: 'YOU',
color : 'red'
    });
  
});


app.get('/admins/:t?', (req, res) => {
  if (req.params.t == 'html') {
    res.render('response', {
      type: 'Admin',
      names: users.groups.admin
    });
  } else {
    res.end(JSON.stringify(users.groups.admin));
  }
});

app.get('/members/:t?', (req, res) => {
  if (req.params.t == 'html') {
    res.render('response', {
      type: 'Member',
      names: users.groups.members
    });
  } else {
    res.end(JSON.stringify(users.groups.members));
  }
});

app.get('/*', (req, res) => {
  // res.writeHead(404);
  res.render('error', {
    errorType: '404',
    errorMessage: 'Not Available Dude!!'
  });
  // res.end('Not Available Dude');
});

var port = process.env.PORT ||'3456';
app.listen(port, () => {
  console.log('Server started on port : ' + port);
});
