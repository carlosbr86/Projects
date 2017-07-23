// knexfile.js
module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || { 
    user: 'postgres', // or other user if you made one
    password: 'postgres', 
    database: 'usersANDcourses'  // name of the database, see on POSTICO!
  }
};