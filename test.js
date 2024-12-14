var client_id = '5731769f60c547dba3515f1c93721a66';
var client_secret = 'f9e9a6456b304a7e98deeed890456f43';

// var authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };

// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//     var token = body.access_token;
//     console.log(token)
//   }
// });


const axios = require('axios');

const API_KEY = 'RGAPI-edbbb7f0-ca07-4f2f-bddb-a3a781f6cc0a'

// Function to make an async API request
async function makeApiRequest(url) {
    try {
        const response = await axios({
            url: url,
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
            },
        });

        // Axios automatically parses JSON responses
        return response.data;
    } catch (error) {
        // Log the error details
        console.error('Error making API request:', error.message);

        // Handle cases where there's a response but it failed (e.g., 4xx, 5xx errors)
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        }

        throw error; // Rethrow the error if you need to handle it further
    }
}

async function getToken() {
    return await makeApiRequest(`https://accounts.spotify.com/api/token`)
}

// Example usage
(async () => {
    try {
        const result = await getToken();
        console.log('API response:', result);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
})();
