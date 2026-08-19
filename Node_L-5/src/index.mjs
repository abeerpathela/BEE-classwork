import express, { response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = Number(process.env.PORT) ;
const app = express();

const users= [
    {
        userId: 1,
        username: "Admin"
    },
    {
        userId: 2,
        username: "Guest"
    },
    {
        userId: 1,
        username: "Student"
    }
];

app.get('/api/users',(request,response)=>{
    response.send(users);
})

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});

app.get('/',(request,response)=>{
    response.send("Express Server started");
})

app.all('/*splat',(request,response)=>{
    response.status(404).send("Not found");
})