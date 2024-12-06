import { SubmitHandler, useForm } from "react-hook-form";
import { ContactProps } from "../types"
import { postContact } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function useContacts(){
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactProps>();

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<ContactProps> = async (data) => {
        try {
            const newContact = await postContact(data);
            toast.success("Mensagem enviada com sucesso!");
            reset();
            navigate("/home");
            return newContact;
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            toast.error("Erro ao enviar mensagem.");
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