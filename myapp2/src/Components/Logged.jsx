export const Logged = ({ username, isLoggedIn }) => {
    if (isLoggedIn) {
        return (
            <>
                <h2>Username: {username}</h2>
                <h2>Status: Online</h2>
            </>
        )
    }
    else {
        return (
            <>
                <h2>Username: {username}</h2>
                <h2>Status: Offline</h2>
            </>
        )
    }
}