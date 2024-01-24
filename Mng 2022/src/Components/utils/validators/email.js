export const requiredemail = value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address'
    } else if (!value){
        return 'Invalid email address'
    }else {}
}
