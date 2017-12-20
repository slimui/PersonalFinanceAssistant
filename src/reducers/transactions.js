import moment from 'moment';
import { handleActions } from 'redux-actions';
import {
    changeCurrentDate,
    changePeriodView,
    fetchTransactionsStart,
    setTransactions,
    resetTransactions,
    setSelectedAccount,
    setViewType,
    setSelectedTransaction
} from 'src/actions/transactions';
import * as transactionsViewTypes from 'src/constants/transactionsViewTypes';
import periodTypes from 'src/constants/transactionPeriodTypes';

const initialState = {
    currentDate: moment(),
    periodType: periodTypes.WEEK.value,
    byId: {},
    selected: null,
    order: [],
    fetching: false,
    selectedAccount: null,
    viewType: transactionsViewTypes.LIST
};

const transactions = handleActions({
    [changeCurrentDate]: (state, action) => {
        return {
            ...state,
            currentDate: action.payload.currentDate
        }
    },
    [changePeriodView]: (state, action) => {
        return {
            ...state,
            periodType: action.payload.periodType
        }
    },
    [fetchTransactionsStart]: (state) => ({
        ...state,
        fetching: true
    }),
    [setTransactions]: (state, action) => {
        const { transactions } = action.payload;
        let newById = {};
        let newOrder = [];

        transactions.forEach(transaction => {
            newById[transaction.id] = transaction;
            newOrder.push(transaction.id);
        });

        return {
            ...state,
            byId: newById,
            order: newOrder,
            fetching: false
        };
    },
    [resetTransactions]: () => initialState,
    [setSelectedAccount]: (state, action) => {
        return {
            ...state,
            selectedAccount: action.payload.accountId
        }
    },
    [setViewType]: (state, { payload: { viewType } }) => {
        return {
            ...state,
            viewType
        }
    },
    [setSelectedTransaction]: (state, action) => {
        return {
            ...state,
            selected: action.payload.id
        };
    }
}, initialState);

export default transactions;
