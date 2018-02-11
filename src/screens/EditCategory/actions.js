import { createAction } from 'redux-actions';
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';

export const setCategory = createAction(
    'EDIT_CATEGORY/SET_CATEGORY',
    category => ({ category })
);

export const fetchCategoryStart = createAction('EDIT_CATEGORY/FETCH_CATEGORY_START');
export const fetchCategoryFailure = createAction('EDIT_ACCOUNT/FETCH_CATEGORY_FAILURE');

export const fetchCategory = id => dispatch => {
    dispatch(fetchCategoryStart());

    return api.getCategory(id)
        .then(response => response.json())
        .then(({ category }) => dispatch(setCategory(category)))
        .catch(e => dispatch(fetchCategoryFailure(e)));
};

export const updateCategory = categoryData => (dispatch, getState) => {
    const { editCategory: { category: { id }}} = getState();

    return api.updateCategory(id, categoryData)
        .then(() => {
            dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'CategoryTabs' })
                ]
            }));
        });
};