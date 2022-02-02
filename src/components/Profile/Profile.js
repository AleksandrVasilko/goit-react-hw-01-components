const Profile = ({ username, tag, location, avatar, statsFollowers, statsViews, statsLikes}) => { 
    return (
        <div className="profile">
            <div >
                <img
                    src={avatar}
                    alt="User avatar"
                    
                />
                <p >{username}</p>
                <p >@{tag}</p>
                <p >{location}</p>
            </div>

            <ul >
                <li>
                    <span>Followers</span>
                    <span >{statsFollowers}</span>
                </li>
                <li>
                    <span >Views</span>
                    <span >{statsViews}</span>
                </li>
                <li>
                    <span >Likes</span>
                    <span >{statsLikes}</span>
                </li>
            </ul>
        </div>
    );
}


export default Profile;





