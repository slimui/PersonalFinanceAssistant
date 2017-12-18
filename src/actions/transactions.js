import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api'
import { fetchAccounts } from 'src/actions/accounts';
import { LIST, CHART } from 'src/constants/transactionsViewTypes';

export const changePeriodView = createAction(
    'TRANSACTIONS/CHANGE_PERIOD_VIEW',
    periodType => ({ periodType })
);

export const selectTransaction = createAction(
    'TRANSACTIONS/SELECT_TRANSACTION',
    (id) => ({ id })
);

export const changeDate = isChangeForward => (dispatch, getState) => {
    const { transactions: { currentDate, periodType } } = getState();
    let periodModificator = periodType;

    const timeModificator = isChangeForward ? 1 : -1;
    const newDate = currentDate.clone().add(timeModificator, periodModificator);

    dispatch(changeCurrentDate(newDate));
};

export const changeCurrentDate = createAction(
    'TRANSACTIONS/CHANGE_CURRENT_DATE',
    currentDate => ({ currentDate })
);

export const setTransactions = createAction(
    'TRANSACTIONS/SET_TRANSACTIONS',
    transactions => ({ transactions })
);

export const fetchTransactionsStart = createAction('TRANSACTIONS/FETCH_TRANSACTIONS_START');

export const fetchTransactions = () => dispatch => {
    dispatch(fetchTransactionsStart());

    return api.fetchTransactions()
        .then(response => response.json())
        .then(({ transactions }) => dispatch(setTransactions(transactions)));
};

export const resetTransactions = createAction('TRANSACTIONS/RESET_TRANSACTIONS');

export const addTransaction = transactionData => dispatch => {
    return api.addTransaction(transactionData)
        .then(async () => {
            await dispatch(fetchTransactions());

            await dispatch(fetchAccounts());

            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Transactions' })
                ]
            }))
        });
};

export const setSelectedAccount = createAction(
    'TRANSACTIONS/SET_SELECTED_ACCOUNT',
    accountId => ({ accountId })
);

export const setViewType = createAction(
    'TRANSACTIONS/SET_VIEW_TYPE',
    viewType => ({ viewType })
);

export const switchViewType = () => (dispatch, getState) => {
    const { transactions: { viewType } } = getState();

    dispatch(setViewType(viewType === LIST ? CHART : LIST));
};
