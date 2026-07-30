export const Notification = ({ unreadCount }) => {
    return (
        <div>
            <button>🔔 Notification</button>

            {/*Always pass the condituon as the default value zero is not asigned.*/}
            {unreadCount > 0 && <span>{unreadCount}</span>}
        </div>
    )
}