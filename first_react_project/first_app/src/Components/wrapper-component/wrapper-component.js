import './wrapper-component.css'

function Parent(props){
    return (<div className = "wrapper">{props.children}</div>)
}

export default Parent;