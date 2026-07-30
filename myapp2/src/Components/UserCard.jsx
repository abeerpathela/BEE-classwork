// export const UserCard=(props)=>{
//     return(
//         <>
//          <h2>Username: {props.username}</h2>
//             <h2>Age: {props.age}</h2>
//             <h2>Status: {props.isActive?"Online":"Offline"}</h2>
//             <h2>Hobbies: {props.hobbies}</h2>
//             <h2>Details: {props.detail.city} {props.detail.email}</h2>
//         </>
//     )
// }



//Rest operator
export const UserCard=({id="E101",...rest})=>{
    return(
        <>
         <h2>Username: {rest.username}</h2>
            <h2>Age: {rest.age}</h2>
            <h2>Status: {rest.isActive?"Online":"Offline"}</h2>
            <h2>Hobbies: {rest.hobbies}</h2>
            <h2>Details: {rest.detail.city} {rest.detail.email}</h2>
        </>
    )
}