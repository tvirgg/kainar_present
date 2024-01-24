export const requiredtargetamount = value => {
    if (value && !value.match(/^\d+/)) {
        return 'Неверное число'
    }else if (value > 999999){
        return 'Должно быть меньше или равно 999999 тк'
    }else if (value<2000){
        return 'Должно быть больше или равно 2000 тк'
    }else {}
}
