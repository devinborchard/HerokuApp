const { Client } = require('pg')


const connectToDb = async() => {

    console.log('CONNECTING TO DB')

    const connectionString = process.env.DB_URI

    const client = new Client({
        client: 'pg',
        connectionString: connectionString,
        ssl: {
          rejectUnauthorized: false
        }
    })

    client.connect();

    result = await client.query(`SELECT * FROM users`)
    return result.rows
}

const getUserFromDb = async(req) => {

  console.log('CONNECTING TO DB: ', req.body)

  const connectionString = process.env.DB_URI

  const client = new Client({
      client: 'pg',
      connectionString: connectionString,
      ssl: {
        rejectUnauthorized: false
      }
  })

  client.connect();

  result = await client.query(`SELECT * FROM users WHERE user_name='${req.body.username}' AND password = '${req.body.password}'`)
  return result.rows
}

module.exports = {
  connectToDb, 
  getUserFromDb
}