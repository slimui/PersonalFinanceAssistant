import React from 'react';
import { StackNavigator } from 'react-navigation';
import { DrawerButton } from 'src/components';
import getDefaultNavigationOptions from 'src/helpers/getDefaultNavigationOptions';
import TransactionsHeaderTitle from '../TransactionsHeaderTitle';
import Transactions from '../Transactions';
import SwitchViewTypeIcon from '../Transactions/components/SwitchViewTypeIcon';
import AddTransaction from '../AddTransaction';
import EditTransaction from '../EditTransaction';
import EditTransactionHeaderRight from '../EditTransactionHeaderRight';

export default StackNavigator({
  Transactions: {
    screen: Transactions,
    navigationOptions: ({ navigation }) => ({
      title: 'Transactions',
      headerTitle: <TransactionsHeaderTitle />,
      headerLeft: <DrawerButton navigation={ navigation } />,
      headerRight: <SwitchViewTypeIcon />
    })
  },
  EditTransaction: {
    screen: EditTransaction,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit transaction',
      headerRight: <EditTransactionHeaderRight navigation={ navigation } />
    })
  },
  AddTransaction: {
    screen: AddTransaction,
    navigationOptions: {
      title: 'Add transaction'
    }
  }
}, {
  initialRouteName: 'Transactions',
  navigationOptions: getDefaultNavigationOptions()
});
