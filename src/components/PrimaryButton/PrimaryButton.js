import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './PrimaryButtonStyles';

const PrimaryButton = ({ disabled, onPress, title, containerViewStyle }) =>
  <Button
    containerViewStyle={ [styles.buttonContainer, containerViewStyle] }
    buttonStyle={ styles.button }
    disabledStyle={ styles.disabledStyle }
    title={ title }
    disabled={ disabled }
    onPress={ onPress } />;

PrimaryButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
  containerViewStyle: ViewPropTypes.style
};

export default PrimaryButton;
