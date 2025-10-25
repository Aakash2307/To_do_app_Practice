const http = require('http')

const PORT = 3000

// now we want to create an http server as we have called the module 
const server = http.createServer((req, res) => {
    // now we need to set a response header 

    // SETTING RESPONSE HEADERS
    // Headers are metadata about the response
    // 'Content-Type': tells the client what kind of data we're sending
    // 'application/json': we're sending JSON data
    // Other examples: 'text/html', 'text/plain', 'image/png'

    res.setHeader('Content-Type', 'application/json'); // Fixed: Capital 'T' in Type

    // Now we need to set up the routes so 

    // lets go with the first route 

    // now actually what's happening in this below is we are requesting the api from a root path which is '/' using the get method 
    // so after getting the get method if in the console we receive the method as status 200 it means everything is okay 

    // inside the if loop it's going like we are passing the request and the server should send the message in json format so
    // we use res.end so the server will respond to us in this way

    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200; // Added status code
        res.end(JSON.stringify({
            message: 'Welcome to the todo API',
            endpoints: {
                'GET /todos': 'Get all todos',
                'POST /todos': "Post all the todos"
            }
        }));
    }

    else if (req.url === '/todos' && req.method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({
            message: "getting all the todos endpoint",
            todos: [] // it's an empty array for now but we will add anything or real todos later
        }));
    }

    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ 
            error: 'Route not found' 
        }));
    }
}); // Fixed: Removed extra closing brace

server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});