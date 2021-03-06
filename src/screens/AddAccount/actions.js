import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';
import { alerts } from 'src/utils';

export const addAccount = accountData => dispatch => {
  const data = {
    ...accountData,
    balance: Number(accountData.balance)
  };

  return api.addAccount(data)
    .then(() => {
      dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'AccountsList' })
        ]
      }));
    })
    .catch(() => alerts.showCanNotPerformOperationAlert());
};
