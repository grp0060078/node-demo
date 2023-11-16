 const http =require ("http")

 const hostname ="127.0.0.1";  

 const port = 3001;

 let notes = [
    {
        id: 1,
        content: 'backend using node.js',
        important: true
    },
    {
        id: 2,
        content: 'node.js is a open source',
        important: false,
    },
    {
        id: 3,
        content: 'simple web server using node.js',
        important: true
    }
];

 const  server = http.createServer((req,res) =>{
      
     res.statusCode=200;
     res.setHeader('content_type', 'application/json')
     res.end(JSON.stringify(notes))
 } );

 server.listen(port,hostname,() =>{
    console.log(`server running at http://${hostname}:${port}`)
 })