import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FrendList } from 'components/FriendList/FriendList';
import { GlobalStyle } from './GlobalStyle';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'patch/transactions.json';


export const App = () => {
  return (
    <>
      <GlobalStyle />

      <Profile />
      <Statistics />
      <FrendList />

      <TransactionHistory items={transactions} />
    </>
  );
};
