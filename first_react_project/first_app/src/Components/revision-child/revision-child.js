import './revision-child.css'

function RevisionChild(props){
    const array = [1,2,3,4,5,6];
    const length = 6;
    function clickMe(){
    props.onChildClkSubmit(array, length);
    }
    return(<button onClick = {clickMe}>clickME</button>)
}

export default RevisionChild;