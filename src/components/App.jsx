import { GlobalStyle } from './GlobalStyle';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FrendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from 'patch/user.json';
import data from 'patch/data.json';
import friends from 'patch/friends.json';
import transactions from 'patch/transactions.json';


export const App = () => {
  return (
    <>
      <GlobalStyle />

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={data} />

      <FrendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};
