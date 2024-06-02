import React from "react"; 

function Boutton(props){
    return(
        <a href={props.lien}>

            <button className="button1" value={props.value} onClick={props.click}>
       {props.btn}
        </button>
        </a> 

    )
}


export default Boutton;