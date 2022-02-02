import Profile from './components/Profile/Profile';
import users from './Data fales/user.json';

export default function App() {
  return (
    <div>
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        statsFollowers={users.stats.followers}
        statsViews={users.stats.views}
        statsLikes={users.stats.likes}
      />
    </div>
  );
}