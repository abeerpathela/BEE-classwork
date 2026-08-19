const http = require('http');
const server=http.createServer((req,res)=>{

    res.setHeader(`Access-Control-Allow-Origin`,`http://127.0.0.1:5500/`);
        res.setHeader(`Access-Control-Allow-Methods`,`GET.POST.OPTIONS`);
        res.setHeader(`Access-Control-Allow-Headers`,`Content-Type`)//ye headers set karta hai jo allow control allow origin, allow control allow methods aur allow control allow headers ke liye hai.;


    const baseURL=`http://${req.headers.host}`;//ye baseURL variable me host ka url store karta hai.
    const praseURL=new URL(req.url,baseURL);//ye praseURL variable me request ka url store karta hai.
    const pathname=praseURL.pathname;//ye pathname variable me request ka pathname store karta hai.
    if(pathname==='/' && req.method==='GET'){//ye check karta hai ki request ka url pathname ke barabar hai aur method 'GET' hai.
        console.log(praseURL.searchParams);
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write("user logged in");
        res.end();
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('404 Not Found');
        res.end();  
    }
});


server.listen(3000,()=>{
    console.log('server is running on port 3000');
})

