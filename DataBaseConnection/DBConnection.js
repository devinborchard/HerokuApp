const { Client } = require('pg')

class DBConnection{
  constructor(DB_CREDS){
    this.client = new Client({
      client:  'pg',
      user: DB_CREDS[2],
      host: DB_CREDS[0],
      password: DB_CREDS[1],
      port: 5432,
    })

    this.client.connect();
  }


  //users db querries
  createUserId = async() => {
    const result = await this.client.query(`SELECT COUNT(*) FROM users`)
    let count = parseInt(result.rows[0].count)
    count = count + 1
    return count

  }

  getUserFromDb = async(req) => {
    const result = await this.client.query(`SELECT * FROM users WHERE username='${req.body.username}' AND password = '${req.body.password}'`)
    return result.rows
  }
  
  createUserInDB = async(req) => {
    let firstName = null
    let lastName = null
    if(req.body.firstName) firstName = `'${req.body.firstName}'`
    
    if(req.body.lastName) lastName = `'${req.body.lastName}'`
  
    const userId = await this.createUserId()
    try{
      const queryString = `INSERT INTO users VALUES (${userId},'${req.body.username}','${req.body.email}','${req.body.password}',${firstName},${lastName},null)`
      const result = await this.client.query(queryString)
      return {message:'userCreated',userId}
    }catch(e){
      let error = new Error('Error creating User')
      console.log('ERROR: ', e)
      return error
    }
  }
  
  checkCredsAvailableDb = async(req) => {
    const result = await this.client.query(`SELECT * FROM users WHERE username='${req.body.username}' OR email = '${req.body.email}'`)
    return result.rows
  }

  //recipes querries
  getRecipeTagsFromDb = async(req) => {
    const result = await this.client.query(`SELECT tags FROM raw_recipes`)
    return result.rows
  }
}

module.exports = { 
  DBConnection
}