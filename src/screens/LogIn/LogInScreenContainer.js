import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { logIn } from 'src/actions/authorization';
import LogInScreen from './LogInScreen';

const mapDispatchToProps = dispatch => {
    return {
        onLogInUser({ email, password }) {
            return dispatch(logIn(email, password));
        },

        onNewUser() {
            dispatch(NavigationActions.navigate({ routeName: 'SignUp' }));
        }
    }
};

export default connect(null, mapDispatchToProps)(LogInScreen);
