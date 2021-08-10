const fetch = require('node-fetch');

async function getCards() {
try {
    const response = await fetch('https://6103a28e79ed680017482595.mockapi.io/api/v1/posts');
    return await response.json();
}
catch {
   return {error: "error getting data"}
}
}

module.exports = getCards();

