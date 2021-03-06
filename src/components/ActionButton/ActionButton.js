import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './ActionButtonStyles';

const ActionButton = ({ iconName, backgroundColor, color, disabled, ...props }) =>
  <View style={ styles.container }>
    <Icon
      { ...props }
      raised
      disabled={ disabled }
      color={ color }
      name={ iconName }
      containerStyle={ [{ backgroundColor }, disabled && styles.disabledStyle] }
      iconStyle={ styles.iconStyle }
      underlayColor={ backgroundColor } />
  </View>;

ActionButton.propTypes = {
  iconName: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string
};

export default ActionButton;
