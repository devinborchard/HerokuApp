const { Client } = require('pg')

class DBConnection{
  constructor(DB_URI){
    this.client = new Client({
      client: 'pg',
      connectionString: DB_URI,
      ssl: {
        rejectUnauthorized: false
      }
   })

    this.client.connect();
  }

  createUserId = async() => {
    const result = await this.client.query(`SELECT COUNT(*) FROM users`)
    let count = parseInt(result.rows[0].count)
    console.log('COUNT: ',count)
    count = count + 1
    console.log('COUNT: ',count)
    return count

  }

  getUserFromDb = async(req) => {
    const result = await this.client.query(`SELECT * FROM users WHERE user_name='${req.body.username}' AND password = '${req.body.password}'`)
    return result.rows
  }
  
  createUserInDB = async(req) => {
    let firstName = null
    let lastName = null
    if(req.body.firstName) firstName = `'${req.body.firstName}'`
    
    if(req.body.lastName) lastName = `'${req.body.lastName}'`
  
    const userId = await this.createUserId()
    console.log('userId: ', userId)
    const queryString = `INSERT INTO users VALUES (${firstName},${lastName},'${req.body.email}',null,'${req.body.username}','${req.body.password}',${userId})`
    const result = await this.client.query(queryString)
    return {message:'userCreated',userId}
  }
  
  checkCredsAvailableDb = async(req) => {
    const result = await this.client.query(`SELECT * FROM users WHERE user_name='${req.body.username}' OR email = '${req.body.email}'`)
    return result.rows
  }
}



module.exports = { 
  DBConnection
}