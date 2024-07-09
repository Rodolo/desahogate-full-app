
import { ChangeEvent, FormEvent, useState } from "react";
import { DataProps } from "../interfaces/interfaces";


export const useForm = ( initialFormState: DataProps) => {

    const [ formState, setFormState ] = useState(initialFormState);
    const [ formEnviado , setFormEnviado ] = useState(false);
   

    const handleOnSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormEnviado(true);
    }


    const handleOnChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setFormState(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }
    
    return {
        ...formState,
        formEnviado,
        setFormEnviado,
        handleOnChange,
        handleOnSubmit
    }
}
