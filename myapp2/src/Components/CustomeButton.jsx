export const CustomeButton = () => {

    function handleLike(){
        alert("Like button clicked");
    }

    function handleSubscribe(){
        alert("Subscribe button clicked");
    }

    return (
        <div>
            <button onClick={handleLike}>👍 Like</button>
            <button onClick={handleSubscribe}>🔔 Subscribe</button>
        </div>
    )
}