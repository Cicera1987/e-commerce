import Form from "../../forms";
import Header from "../../header";
import "./styles.css"
import useContacts from "../../hooks/useContacts";

function Contacts() {

  
  const { register, handleSubmit, onSubmit, errors } = useContacts()

  return (
    <>
      <Header title="Contatos" />
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <Form
          title={<h1>Entre em contato</h1>}
          input={
            <div className="form-contact">
              <div>
                <label htmlFor="name">Nome</label>
                <input
                  {...register("name", { required: "Campo obrigatório" })}
                  id="productName"
                  type="text"
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="message">Descrição</label>
                <textarea
                  {...register("description", { required: "Campo obrigatório" })}
                  id="description"
                />
                {errors.description && <p>{errors.description.message}</p>}
              </div>

            </div>
          }
          button={<button type="submit">Enviar</button>}
        />
      </form>
    </>
  )
}

export default Contacts;