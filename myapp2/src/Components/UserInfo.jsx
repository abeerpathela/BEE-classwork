import { UserCard } from "./UserCard"
// export const UserInfo=({props})=>{
// // export const UserInfo=({username,age,isActive,hobbies,detail})=>{  This is called destructure
// // export const UserInfo=({username,age=18,isActive,hobbies,detail})=>{ This is called default arguments
//     return(
//         <>
//             <h2>Username: {props.username}</h2>
//             <h2>Age: {props.age}</h2>
//             <h2>Status: {props.isActive?"Online":"Offline"}</h2>
//             <h2>Hobbies: {props.hobbies}</h2>
//             <h2>Details: {props.detail.city} {props.detail.email}</h2>
//         </>
//     )
// }

// Forwarding...
export const UserInfo=(props)=>{
    return <UserCard {...props}/>
    
}