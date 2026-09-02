const authMiddleware = (request,response,next) =>{
    if(request.session.username && request.session.password){
        next();
    }
    else{
        response.redirect('/login');
    }
}

export default authMiddleware;

// hamne ek custom middle ware check karte hai 