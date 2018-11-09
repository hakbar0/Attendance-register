function validate(state) {

    var validate = {};

    if (!isNameValid(state.firstname)) {
        validate["firstname"] = "Please provide a valid firstname";
    }
    if (!isNameValid(state.surname)) {
        validate["surname"] = "Please provide a valid surname";
    }
    if (!isEmailValid(state.email)) {
        validate["email"] = "Please provide a valid E-mail"
    }
    return Object.keys(validate).length === 0 ? false : validate;
}

function isNameValid(name) {
    let isValid = /^[a-z]+$/i.test(name);
    return isValid;
}

function isEmailValid(email) {
    let isValid = /\S+@\S+\.\S+/.test(email);
    return isValid;
}

export default validate;