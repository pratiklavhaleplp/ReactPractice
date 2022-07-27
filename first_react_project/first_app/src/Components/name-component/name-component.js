import React, { useState } from "react";
import Parent from "../wrapper-component/wrapper-component";

function NameComponent(nameFromApnaFirstComponent) {

    console.log('checking the useState', useState());
    const [maiDataBindinghu, clickKeBadMaiChangeKaruga] = useState();
    const [multipleStatesInOneUseState, handelMultipleStatesInOne] = useState();
    const helloWorldThoPrintKarBhaiPaile = (true_falseParam) => {

        let msg = '';
        if (true_falseParam)
            msg = ' true ';
        else
            msg = ' false ';


        clickKeBadMaiChangeKaruga(msg);
    }
    const firstInput = (event) => {
        handelMultipleStatesInOne((previousState)=>{
            return {...previousState, first : event.target.value}
        });
    }

    const secondInput = (event) => {
        handelMultipleStatesInOne((previousState)=>{
            return {...previousState, second : event.target.value}
        });
    }

    const ThirdInput = (event) => {
        handelMultipleStatesInOne((previousState)=>{
            return {...previousState, third : event.target.value}
        });
    }
    console.log(multipleStatesInOneUseState);

    return (<Parent ><h1 className="back-ground">{nameFromApnaFirstComponent.nameFromFristComp}</h1>
        <button onClick={() => helloWorldThoPrintKarBhaiPaile(true)}>true ...</button>
        <button onClick={() => helloWorldThoPrintKarBhaiPaile(false)}>false ...</button>
        <input type="text" onChange={firstInput} />
        <input type="text" onChange={secondInput} />
        <input type="text" onChange={ThirdInput} />
        <h1>{maiDataBindinghu}</h1>
        {/* ? attached after the object shows that the value is nullable
        if there is value then assign it or else donot assign the value */}
        <h1>{multipleStatesInOneUseState?.first}</h1>
        <h1>{multipleStatesInOneUseState?.second}</h1>
        <h1>{multipleStatesInOneUseState?.third}</h1>
    </Parent>);
}

export default NameComponent;