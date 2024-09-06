import './Button.css'


// const Button=(props)=>{
const Button=({title, path})=>{
    return(
        // <button>{props.title} <img src={props.path} /> </button>
        <button>{title} <img src={path} /> </button>
    )
}

export default Button;