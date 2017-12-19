import { INCOME_CATEGORY } from 'src/constants/categoryTypes';
import { getSelectInputOptionsFromAllAccounts } from 'src/selectors/accounts';
import { getSelectInputOptionsFromAllCategories } from 'src/selectors/categories';
import icons from 'src/constants/icons';
import { values } from 'lodash';

export const getCategoryFormInitialValues = (
    {
        name = '',
        icon = icons[0],
        categoryTypeId = INCOME_CATEGORY
    } = {}
) => {
    return {
        name,
        icon,
        categoryTypeId
    };
};

export const getEditAccountFormInitialValues = ({ accounts: {byId, selected} }) => {
    if (!selected || !byId[selected]) {
        return {
            name: null,
            icon: icons[0],
            initialDate: null
        };
    }

    const { name, icon, initialDate } = byId[selected];

    return {
        icon,
        name,
        initialDate
    };
};

export const getTransferFormOptions = state => {
    return {
        accounts: getSelectInputOptionsFromAllAccounts(state)
    };
};

export const getTransactionFormOptions = state => {
    return {
        accounts: getSelectInputOptionsFromAllAccounts(state),
        categories: getSelectInputOptionsFromAllCategories(state)
    };
};

export const getEditTransactionFormInitialValues = (
    {
        transactions: {byId, selected}
    }
) => {
    const {value, note, date, userId, categoryId, accountId} = byId[selected];

    return {
        value,
        note,
        date,
        userId,
        categoryId,
        accountId
    };
};
