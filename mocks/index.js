import accountsMocks from './api/endpoints/accounts';
import authorizationMocks from './api/endpoints/authorization';
import categoriesMocks from './api/endpoints/categories';
import transfersMocks from './api/endpoints/transfers';
import transactionsMocks from './api/endpoints/transactions';
import fixerMocks from './third-party/fixer';

export default {
  ...accountsMocks,
  ...authorizationMocks,
  ...categoriesMocks,
  ...transfersMocks,
  ...transactionsMocks,
  ...fixerMocks
};
