import { ReactNode } from "react";
import "./style.css"

interface FormProps{
    title: ReactNode;
    input: ReactNode;
    button: ReactNode;
}

function Form({title, input, button}: FormProps){

    return(

        <div>
            <div>
                {title}
            </div>
            <div>
                {input}
            </div>
            <div>
                {button}
            </div>
        </div>
    )

}

export default Form