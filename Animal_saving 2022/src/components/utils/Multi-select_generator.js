export const MultiSelect_generator = (value) => {
    let riga = [];
    if (riga.length !== value.length){
        for(let i = 0; i<value.length; i++){
            riga[i] = value[i].value;
        }
    }
    return riga;
}



