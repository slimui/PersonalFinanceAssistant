import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_BASE_CURRENCY } from 'src/constants/currency';
import { View, Text } from 'react-native';
import styles from './TrendsListItemStyles';

const TrendsListItem = ({ label, labelBold, income = 0, expense = 0, bordered = true }) => (
  <View style={ [styles.rootStyle, bordered && styles.borderStyle] }>
    <Text style={ [styles.labelStyle, labelBold && styles.boldTextStyle] }>
      { label }
    </Text>
    <View style={ styles.totalsStyle }>
      <Text style={ styles.incomeStyle }>+{ income } { DEFAULT_BASE_CURRENCY }</Text>
      <Text style={ styles.expenseStyle }>-{ expense } { DEFAULT_BASE_CURRENCY }</Text>
    </View>
  </View>
);

TrendsListItem.propTypes = {
  label: PropTypes.string,
  labelBold: PropTypes.bool,
  income: PropTypes.number,
  expense: PropTypes.number,
  bordered: PropTypes.bool
};

export default TrendsListItem;
