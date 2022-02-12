import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import StatisticsList from './components/Statistics/StatisticsList'
import FriendList from './components/Friends/FriendList'
import TransactionHistory from './components/Transaction/TransactionHistory'
import user from './DataFales/user.json';
import data from './DataFales/data.json'
import friends from './DataFales/friends.json'
import transactions from './DataFales/transactions.json'
import Container from './components/Container/Container'
import Section from './components/Section/Section'




export default function App() {
  return (
    <Container>
      <Section>
        <Profile user={user} />
      </Section> 
      <Section>
        <StatisticsList title="Upload stats">
          <Statistics items={data} />
        </StatisticsList>
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