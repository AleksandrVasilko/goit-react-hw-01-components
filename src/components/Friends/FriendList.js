import Friend from "./FriendListItem";
import s from './Friend.module.css'

function FriendList({ items }) { 
    return (
        <ul className={s.friendList}>
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