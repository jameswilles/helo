const bcrypt = require('bcryptjs');

module.exports = {
  register: async(req, res) => {
    const { username, password } = req.body;
    const db = req.app.get('db');

    const foundUser = await db.users.check_user({username});
        if(foundUser[0]){
            return res.status(400).send('Username already in use');
        }

    let salt = bcrypt.genSaltSync(10),
        hash = bcrypt.hashSync(password, salt);

    const newUser = await db.users.register_user({username, hash});
    req.session.user = newUser[0];
    res.status(201).send(req.session.user);
  },
  login: async(req, res) => {
    const { username, password } = req.body;
    const db = req.app.get('db');

    const foundUser = await db.users.check_user({username});
      if(!foundUser[0]){
        return res.status(400).send('Username not found')
      }
    const authenticated = bcrypt.compareSync(password, foundUser[0].password);
      if(!authenticated){
          return res.status(401).send('Password is incorrect')
      }
    delete foundUser[0].password;
    req.session.user = foundUser[0];
    res.status(202).send(req.session.user);
  },
  getPosts: (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');

    db.post.get_posts(id)
    .then(posts => res.status(200).send(posts))
    .catch(err => console.log(err))
  },
  getPost: (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');

    db.post.get_post(id)
    .then(post => res.status(200).send(post))
    .catch(err => console.log(err))
  }
}