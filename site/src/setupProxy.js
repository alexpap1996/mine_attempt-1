const {createProxyMiddleware} = require("http-proxy-middleware")
// this helps with having both the frontend and the backend run on localhost on different ports
// it passes all requests to /api to localhost:9000
module.exports = function(app) {
    app.use(createProxyMiddleware('/api', 
        { target: 'http://localhost:9000/' }
    ));
}