const express = require('express');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

const server = express();
const users = [
  // {name: 'asd', pass: 'asd', email: ""},
  // {name: 'qwe', pass: 'qwe', email: ""}
];

// users.push(registerUser({user: 'asd', pass: 'asd', email: "asd@asd"}));
// users.push(registerUser({user: 'qwe', pass: 'qwe', email: "qwe@asd"}));

console.log(users);

server.use(cookieSession({
  name: 'session',
  keys: ['secret'],
  maxAge: 30000,
  expires: Date.now() + (1 * 3 * 1000)
}));

server.use(express.static(__dirname +'/public/'));
server.use(express.urlencoded({extended: false}));
server.set('view-engine', 'ejs');

server.get('/login', (req, res, next) => {
  // console.log(req.session);
  res.render(__dirname +'/views/login.ejs', { message: `Login!!! ${req.session.user}`});
});

server.post('/login', (req, res, next) => {
  console.log(JSON.stringify(req.body));
  let result = validateUser(req.body);
  console.log(result);
  if (!result) {
    console.log(11);
    res.redirect("/login");
    res.end();
  } else {
    console.log(22);
    req.session.user = req.body.user;
    res.redirect("/welcome");
  }
});

server.get('/welcome', (req, res, next) => {
  res.cookie("user", req.session.user, {maxAge: 10000});
  res.render(__dirname +'/views/welcome.ejs', {
    user: req.session.user
  })
});

server.get('/logout', (req, res, next) => {
  req.session.user = null;
  res.redirect('/welcome');
});

function comparePassword(password, passHash) {
  const match = bcrypt.compareSync(password, passHash);
  return match;
}

async function comparePasswordAsync(password, passHash) {
  const match = await bcrypt.compare(password, passHash);
  return match;
}

function validateUser(data) {
  console.log("------------------");
  console.log(users);
  console.log("==================");
  console.log(data.user);
  console.log("++++++++++++++++++");
  if (users.some((user) => user.name === data.user)) {
    const userData = users.find((user) => user.name === data.user);
    console.log(userData);
    let isUserLogged = false;
    // isUserLogged = comparePassword(data.pass, userData.pass);
    try {
      isUserLogged = comparePasswordAsync(data.pass, userData.pass);
    } catch (e) {
      isUserLogged = false;
    }
    console.log(21);
    console.log(isUserLogged);
    console.log(12);

    return isUserLogged
  }
  console.log(1);
  return false;
}

async function addUser(data) {
  if (!validateUser(data)) {
    let hashPass;
    try {
       hashPass = await bcrypt.hash(data.pass, 15);
    } catch {
      return null;
    }
    users.push({
      id: Date.now().toString(),
      name: data.user,
      pass: hashPass,
      email: data.email,
    });
  }
  console.log("11111111111111");
  console.log(users);
  console.log("22222222222222");
  return users.find(user => user.name === data.user);
}

server.get('/register', (req, res, next) => {
  res.render(__dirname +'/views/register.ejs');
});

server.post('/register', async (req, res, next) => {
  const addedUser = await registerUser(req.body);
  if (!!addedUser) {
    req.session = {
      user: addedUser.name
    };
    console.log(addedUser);
    res.redirect('/welcome');
  }
});

async function registerUser(data) {
  const user = await addUser(data);
  console.log(user);
  return user;
}


server.listen(3009);