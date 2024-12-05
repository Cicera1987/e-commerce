import { SubmitHandler, useForm } from "react-hook-form";
import { ContactProps } from "../types"
import { postContact } from "../../services/api";
import { toast } from "react-toastify";

function useContacts(){
    const { register, handleSubmit, formState: { errors } } = useForm<ContactProps>();


    const onSubmit: SubmitHandler<ContactProps> = async (data) => {
        try {
            const newContact = await postContact(data);
            toast.success("Mensagem enviada com sucesso!");
            console.log("Mensagem:", newContact);
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            toast.error("Erro aoenviar mensagem.");
        }

    }
    return{
        onSubmit,
        register,
        handleSubmit,
        errors
    }
}

export default useContacts