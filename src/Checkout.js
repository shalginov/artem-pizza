import Rect from "react"

export const Checkout = (props) => {
    console.log(props);
    return <div>
        <fieldset>
            <legend>Your pizza is</legend>
            
            <p>Price:{props.price}</p>
        </fieldset>
        <button onClick={()=>props.setFlag(flag=>!flag)}>Back</button>
    </div>
}