export default function Profile({user, logout}){
    return(
        <>
        <div>{user.displayName}</div>
        <div>{user.email}</div>
        <button onClick={logout}>LogOut</button>
        </>
    )
}