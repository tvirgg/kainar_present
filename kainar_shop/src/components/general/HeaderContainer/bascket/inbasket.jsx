import React from 'react';
const Bascket_item = (props) => {
    return (
        <>
            <div>
                <h2>----------</h2>
                <h4>
                    name : {props.name}
                </h4>
                <h4>
                    price : {props.price}
                </h4>
                <h4>
                    pieces : {props.pieces}
                </h4>
                <h2>----------</h2>
            </div>
        </>
    );
}
export default Bascket_item;