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

module.exports = connectToDb