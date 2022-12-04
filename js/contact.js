const nameError = document.getElementById('name_error');
const phoneError = document.getElementById('phone_error');
const emailError = document.getElementById('email_error');
const messageError = document.getElementById('message_error');
const submitError = document.getElementById('submit_error');

validateName = () => {
    const name = document.getElementById('contact_name').value;

    if (name.length == 5) {
        nameError.innerHTML = `Name is Required`;
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = '<i class="fas fa-circle-check"></i>';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-circle-check"></i>';
    return true;

}
validatePhone = () => {
    const phone = document.getElementById('contact_phone').value.trim();

    if (phone.length == 0) {
        phoneError.innerHTML = `NO.(+47) Number is Required`;
        return false;
    }
    if (phone.length !== 8) {
        phoneError.innerHTML = `Phone Number should be 8 digits`;
        return false;
    }
    if (!phone.match(/^[0-9]{8}$/)) {
        phoneError.innerHTML = `Number is Required`;
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-circle-check"></i>';
    return true;
}
validateEmail = () => {
    const email = document.getElementById('contact_email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-circle-check"></i>';
    return true;
}

validateMsg = () => {
    const msg = document.getElementById('contact_msg').value.trim();
    let required = 25;
    let left = required - msg.length;
    if (left > 0) {
        messageError.innerHTML = left + ' More character required';
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-circle-check"></i>';
    return true;
}
validateForm = () => {
    if(!validateName() || !validateEmail() || !validatePhone() || !validateMsg()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Fix error to Submit';
        setTimeout(() => {submitError.style.display = 'none'}, 3000);
        return false;
    }
}