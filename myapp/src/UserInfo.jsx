export const UserInfo=(props)=>{

    return(
        <>
        <h2>Username: {props.username}</h2>
        <h2>Status: {props.isActive?"Online":"Offline"}</h2>
        <h2>Age: {props.age}</h2>
        <h2>Hobbies: {props.hobbies}</h2>
        <h2>Details: {props.details.city} {props.details.email}</h2>
        </>
    )
}