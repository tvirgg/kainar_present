import React from 'react';
import classes from "./Custom-select.module.css";
import Select, { components } from 'react-select';
export default ({ onChange, options, value, className, isMulti }) => {
    const defaultValue = (options, value) => {
        if (typeof value == 'string'){
            return options ? options.find(option => option.value === value) : "";
        }
        else{
            return value;
        }
    };
    const IndicatorsContainer = props => {
        return (
            <div style={{ background: 'black', borderRadius: "0 4px 4px 0", height: "auto", padding: 1}}>
                <components.IndicatorsContainer {...props} />
            </div>
        );
    };
    const menuPortalTarget = document.getElementById('root');

    const customStyles = {
        control: base => ({
            ...base,
            border: 0,
            backgroundColor: 'black',
            fontSize: '15px',
            fontWeight: 500,
            letterSpacing: 'normal',
            lineHeight: '23px'
        }),
        indicatorSeparator: base => ({
            ...base,
            alignSelf: 'stretch',
            backgroundColor: 'transparent',
        }),
        multiValue: base => ({
            ...base,
            backgroundColor: '#464646',
            color: 'white',
            borderRadius: '2px',
            fontSize: '15px',
            fontWeight: 500,
            letterSpacing: 'normal',
        }),
        multiValueLabel: base => ({
            ...base,
            backgroundColor: '#464646',
            color: 'white',
            fontWeight: '500',
            padding: '3px',
            fontSize: '15px',
            letterSpacing: 'normal',
        }),
        input: (provided) => ({
            ...provided,
            color: 'white',
            border: "0px solid black",
            caretColor: 'transparent'
        }),
        option: (provided, state) => ({
            ...provided,
            border: "0px solid black",
            color: 'white',
            padding: 10,
            backgroundColor: state.isSelected ? '#1D1C1CFF' : 'black',
            width: 'auto',
            ":active": {
                backgroundColor: '#1D1C1CFF',
            },
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: 'black',
            border: "1px solid #888888",
            boxShadow: "0px 0px 2px 0px #888888",
            boxSizing: 'inherit',
            overflow: "hidden",
            padding: '0px'
        }),
        singleValue: (provided, state) => ({
            ...provided,
            backgroundColor: 'black',
            color: 'white',
            border: 'none'
        }),
        valueContainer: (base) => ({
            ...base,
            background: 'black',
            color: 'white',
            width: '100%',
            border: "0px solid black",
            borderRadius: "4px 0 0 4px"
        }),
        multiValueRemove: (base) => ({
            ...base,
            ':hover': {
                backgroundColor: '#343434',
            }}),
        menuList: (base) => ({
            ...base,
            paddingTop: 0,
            paddingBottom: 0,
            "::-webkit-scrollbar": {
                width: "4px"
            },
            "::-webkit-scrollbar-track": {
                boxShadow: "5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset",
                backgroundColor: "#282828"
            },
            "::-webkit-scrollbar-thumb": {
                backgroundColor: "#4e4a4a",
                borderRadius: "2px",
                height: "20%"
            },
            "::-webkit-scrollbar-thumb:hover": {
                background: "#555"
            }
        })
    }
    return (
        <div className={classes.container}>
            <Select
                components={{ IndicatorsContainer }}
                className={classes.select_cont}
                styles={customStyles}
                value={defaultValue(options, value)}
                isMulti={isMulti}
                onChange={value => {
                    onChange(value)
                }} options={options} placeholder={"Выбрать"} readonly
                menuPlacement="auto"/>
        </div>

    )
}
