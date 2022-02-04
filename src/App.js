import Profile from './components/Profile/Profile';
import StatisticsList from './components/Statistics/StatisticsList'
import FriendList from './components/Friends/FriendList'
import TransactionHistory from './components/Transaction/TransactionHistory'
import user from './Data fales/user.json';
import data from './Data fales/data.json'
import friends from './Data fales/friends.json'
import transactions from './Data fales/transactions.json'
import Container from './components/Container/Container'
import Section from './components/Section/Section'




export default function App() {
  return (
    <Container>
      <Section>
        <Profile user={user} />
      </Section> 
      <Section>
        <StatisticsList items={data} />
      </Section>
      <Section>
        <FriendList items={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );
}