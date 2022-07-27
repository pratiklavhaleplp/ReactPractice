//while impoirting css file give full file name
import { useState } from 'react';
import './first-component.css';
import NameComponent from "./name-component/name-component.js";
import Parent from './wrapper-component/wrapper-component.js'

import CreateList from './drop-down-list';

function FirstComponent(prntFirst) {
    console.log(prntFirst);
    let [responseData, handelResponseData] = useState();
    let list = [];
    if (!responseData)
        fetch('https://jsonplaceholder.typicode.com/users').then(res =>
            res.json()).then(res => handelResponseData(res));

    let filterArray = [];
    function autoComplete(event) {
        filterArray = [];
        list = [];
        for (let i = 0; i < responseData.length; i++) {
            if (responseData[i].name.includes(event.target.value))
                filterArray.push(responseData[i]);
        }

        console.log(filterArray);
        // for (let j = 0; j < filterArray.length; j++) {
        //     list.push(<li>{filterArray[j].name}</li>)
        // }
    }
    return (<div>
        <input type="text" onChange={autoComplete} />
        {/* <ul>
            {list.map((list, index) => (
                <li>{list[index]?.props.children}</li>
            ))}
        </ul> */}
    </div>)
}


export default FirstComponent;