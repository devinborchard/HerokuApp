const { Client } = require('pg')

class DBConnection{
  constructor(DB_URI){
    this.client = new Client({
      connectionString: DB_URI,
      ssl: {
        rejectUnauthorized: false
      }
    });

    this.client.connect();
  }


//   //users db querries
//   createUserId = async() => {
//     const result = await this.client.query(`SELECT COUNT(*) FROM users`)
//     let count = parseInt(result.rows[0].count)
//     count = count + 1
//     return count

//   }

  getUserFromDb = async(req) => {
    const result = await this.client.query(`SELECT user_id, profile, name FROM users WHERE user_name='${req.body.user_name}' AND password = '${req.body.password}'`)
    if(result.rows.length > 1){
      throw new Error("Multiple Users Found")
    }
    return result.rows
  }
  
//   createUserInDB = async(req) => {
//     let firstName = null
//     let lastName = null
//     if(req.body.firstName) firstName = `'${req.body.firstName}'`
    
//     if(req.body.lastName) lastName = `'${req.body.lastName}'`
  
//     const userId = await this.createUserId()
//     try{
//       const queryString = `INSERT INTO users VALUES (${userId},'${req.body.username}','${req.body.email}','${req.body.password}',${firstName},${lastName},null)`
//       const result = await this.client.query(queryString)
//       return {message:'userCreated',userId}
//     }catch(e){
//       let error = new Error('Error creating User')
//       console.log('ERROR: ', e)
//       return error
//     }
//   }
  
//   checkCredsAvailableDb = async(req) => {
//     const result = await this.client.query(`SELECT * FROM users WHERE username='${req.body.username}' OR email = '${req.body.email}'`)
//     return result.rows
//   }

//   //recipes querries
//   getRecipeTagsFromDb = async(req) => {
//     const result = await this.client.query(`SELECT tags FROM raw_recipes`)
//     return result.rows
//   }

//   //select in range
//   //SELECT * FROM table limit 100` -- get 1st 100 records
//   //SELECT * FROM table limit 100, 200` -- get 200 records beginning with row 101

//   getRecipesByTags = async(filters, index, limit) => {
//     console.log('IN DB CONNECTION: ', filters, index, limit)

//     let query
//     if(filters.length){
//       query = `SELECT * FROM raw_recipes WHERE`
//       for(let i = 0 ; i < filters.length; i++){
//         if(i > 0){
//           query = `${query} AND`
//         }
//         query = `${query} tags LIKE '%${filters[i]}%'`
//       }
//     }else{
//       query = `SELECT * FROM raw_recipes`
//     }
//     query = `${query} OFFSET ${index} LIMIT ${limit} `

//     console.log('QUERY: ', query)
//     const result = await this.client.query(query)

//     let formattedRows = []
//     console.log('GOT ',result.rows.length)
//     for(let i = 0; i < result.rows.length; i++){
//       let recipe = result.rows[i]
//       let steps = recipe.steps
//       steps = steps.replaceAll('"','\'')
//       steps = steps.replaceAll('[\'','["')
//       steps = steps.replaceAll('\']','"]')
//       steps = steps.replaceAll('\', \'','", "')
//       steps = steps.replaceAll('\', "','", "')
//       steps = steps.replaceAll('", \'','", "')
//       steps = JSON.parse(steps)
//       recipe.steps = steps

//       let ingredients = recipe.ingredients
//       ingredients = ingredients.replaceAll('[\'','["')
//       ingredients = ingredients.replaceAll('\']','"]')
//       ingredients = ingredients.replaceAll('\', \'','", "')
//       ingredients = ingredients.replaceAll('\', "','", "')
//       ingredients = ingredients.replaceAll('", \'','", "')
//       ingredients = JSON.parse(ingredients)

//       recipe.ingredients = ingredients

//       formattedRows[i] = recipe
//     }

//     let countQuery
//     if(filters.length){
//       query = `SELECT COUNT(name) FROM raw_recipes WHERE`
//       for(let i = 0 ; i < filters.length; i++){
//         if(i > 0){
//           query = `${query} AND`
//         }
//         query = `${query} tags LIKE '%${filters[i]}%'`
//       }
//     }else{
//       query = `SELECT COUNT(name) FROM raw_recipes`
//     }
//     const countResult = await this.client.query(query)
//     let queryFullCount = countResult.rows[0].count

//     return {formattedRows, queryFullCount}
//   }
}

module.exports = { 
  DBConnection
}