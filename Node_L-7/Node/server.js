const http=require('http');

const server = http.createServer((req,res)=>{

    //CORS configuration error
    res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500")
    res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS")
    res.setHeader("Access-Control-Allow-Headers","Content-Type")

        //Preflight error
    if(req.method==='OPTIONS'){
        res.writeHead(204);
        res.end()
        return
    }

    
    const baseURL = `http://${req.headers.host||'localhost'}`

    const fullURL = new URL(req.url,baseURL)
    const pathname = fullURL.pathname
    if(pathname==='/' && req.method==='GET'){
        console.log(fullURL.searchParams)
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.write('User Logged In...')
        res.end()
    }
    else if(pathname==='/' && req.method==='POST'){  //POST mae data chunks mae ata hai
        let chunkBody='';
        req.on("data",(chunk)=>[
            chunkBody+=chunk
        ])
        req.on("end",()=>{
            console.log(JSON.parse(chunkBody));
            res.writeHead(200,{'Content-Type':'text/plain'})
            res.write('User logged in..')
            res.end()
    })
    }
    else{
        res.writeHead(500,{'Content-Type':'text/plain'})   
        res.write('Internal server error')
        res.end()
    }
    console.log(fullURL)
})


server.listen(2211,()=>{
    console.log('server listening on port 2211')
})