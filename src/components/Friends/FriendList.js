import Friend from "./FriendListItem";

function FriendList({ items }) { 
    return (
        <ul>
            {items.map(item => (
                <Friend key={item.id}                    
                    avatar={item.avatar}
                    name={item.name}
                    status={item.isOnline}
                />
            ))}
        </ul>
    )
}

export default FriendList;