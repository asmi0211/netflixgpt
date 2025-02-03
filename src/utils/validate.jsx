const checkValidData = (email, password, fullName) => {
    const isEmailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    // const isFullName = fullName ? /^[A-Za-z]{2,}(?: [A-Za-z]{2,})+$/.test(fullName) : true;

    // if(!isFullName) return "Full name not valid*"
    if(!isEmailvalid) return "Email not valid*"
    if(!isPassValid) return "password not valid*"

    return null;
} 
export default checkValidData;