import classes from "./Users.module.css";
import React, {useState} from "react";
import cn from "classnames";
const Pagination = ({totalItemsCount, pageSize, curentPage, onPageChanged, portionSize = 10}) =>{ //get props
    let pagesCount = Math.ceil(totalItemsCount / pageSize);//init new variable
    let pages = [];
    for (let i = 1; i <= totalItemsCount; i++) {
        pages.push(i);//filling our array, which exist quantity elements in Paginator
    }
    let portionCount = Math.ceil(pagesCount / portionSize);//number of portion from server
    let [portionNumber, setPortionNumber] = useState(1);//variable for number of  ten
    let leftPortionPageNumber = ((portionNumber - 1) * portionSize) + 1; // left border
    let rightPortionPageNumber = portionNumber * portionSize;//right border
    const classwork = (p, curentPage) =>{
        if(p === curentPage){
            return classes.selectedPage;
        }
        else {
            return classes.pageNumber;
        }
    }
    return <div className={classes.paginator}>
        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

        {pages.filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={classwork(p, curentPage)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
    </div>
}
export default Pagination;