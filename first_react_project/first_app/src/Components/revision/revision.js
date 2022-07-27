import { useState } from "react";
import './revision.css';
import RevisionChild from "../revision-child/revision-child";

function Revision(){
    const [property, propertyAssign] = useState();
    console.log("hello world...");
    function twoWayBinding(event){
        propertyAssign({value : event.target.value, previousVal : "Two Way Data Binding"});
    }
    function getDataFromRevisionChild(arrayElements, length){
        console.log('Array elements are : ',arrayElements);
        console.log('length of array is : ',length);
    }
    return(<div>
        <RevisionChild onChildClkSubmit = {getDataFromRevisionChild}></RevisionChild>
        <input type="text" onChange = {twoWayBinding}/>
        <h1>{property?.previousVal}</h1>
        <h1>{property?.value}</h1>
    </div>);
}

export default Revision;