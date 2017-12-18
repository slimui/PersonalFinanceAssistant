import React from 'react';
import { View, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { TextInputField } from 'src/components';
import validate from './validate';
import { LOG_IN_FORM } from 'src/constants/forms';
import styles from './LogInFormStyles';
import { PrimaryButton } from 'src/components';

function LogInForm({ handleSubmit, submitting, invalid }) {
    return (
        <View style={styles.container}>
            <Field
                name="email"
                props={{
                    label: 'Email',
                    placeholder: 'Enter email...'
                }}
                component={TextInputField}
            />
            <Field
                name="password"
                props={{
                    secureTextEntry: true,
                    label: 'Password',
                    placeholder: 'Enter password...'
                }}
                component={TextInputField}
            />
            <PrimaryButton
                title="Log in"
                disabled={submitting || invalid}
                onPress={handleSubmit}
            />
        </View>
    );
}

export default reduxForm({
    form: LOG_IN_FORM,
    validate
})(LogInForm);
