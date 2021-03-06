import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import TextInputField from '../TextInputField';
import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class DatePickerInput extends Component {
    state = {
      visible: false
    };

    showPicker = () => {
      const { input: { onFocus = () => {} }} = this.props;

      onFocus();

      this.setState({
        visible: true
      });
    };

    hidePicker = () => {
      const { onBlur = () => {} } = this.props.input;

      onBlur();

      this.setState({ visible: false });
    };

    handlePicked = (date) => {
      const { onChange } = this.props.input;

      const value = moment(date).utc().valueOf();

      onChange(value);

      this.hidePicker();
    };

    render() {
      const { visible } = this.state;
      const { label, placeholder, style } = this.props;

      return (
        <TouchableOpacity style={ style } onPress={ this.showPicker }>
          <DateTimePicker
            isVisible={ visible }
            mode="date"
            onConfirm={ this.handlePicked }
            onCancel={ this.hidePicker } />
          <TextInputField
            { ...this.props }
            props={{
              label,
              placeholder
            }}
            editable={ false } />
        </TouchableOpacity>
      );
    }
}
