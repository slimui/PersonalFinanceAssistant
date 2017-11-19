import { Validator } from 'src/lib';

export default Validator.combineValidators({
    email: [Validator.email, Validator.required],
    password: Validator.required
});
