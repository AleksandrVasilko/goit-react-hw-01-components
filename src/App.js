import Profile from './components/Profile/Profile';
import StatisticsList from './components/Statistics/StatisticsList'
import FriendList from './components/Friends/FriendList'
import users from './Data fales/user.json';
import data from './Data fales/data.json'
import friends from './Data fales/friends.json'
import Container from './components/Container/Container'

export default function App() {
  return (
    <Container>
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        statsFollowers={users.stats.followers}
        statsViews={users.stats.views}
        statsLikes={users.stats.likes}
      />
      <StatisticsList items={data} />
      <FriendList items={friends}/>
    </Container>
  );
}