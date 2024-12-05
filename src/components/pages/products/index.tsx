import Form from "../../forms";
import Header from "../../header";
import "./styles.css";
import useProducts from "../../hooks/useProducts";

function Products() {

    const {
        register,
        errors,
        imageSrc,
        handleImageChange,
        onSubmit,
        handleSubmit,
        editingProduct
    } = useProducts();

    return (
        <>
            <Header title="Produtos" />
            <div>
                 <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                <Form
                    title={<h1>Cadastro de Produto</h1>}
                    input={
                        <div className="form-product">
                            <div>
                                <label htmlFor="productName">Nome do Produto</label>
                                <input
                                    {...register("name", { required: "Campo obrigatório" })}
                                    id="productName"
                                    type="text"
                                />
                                {errors.name && <p>{errors.name.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="price">Preço</label>
                                <input
                                    {...register("price", {
                                        required: "Campo é obrigatório",
                                        valueAsNumber: true,
                                        min: {
                                            value: 1,
                                            message: "O preço deve ser maior que 0"
                                        }
                                    })}
                                    id="price"
                                    type="number"
                                />
                                {errors.price && <p>{errors.price.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="description">Descrição</label>
                                <input
                                    {...register("description", { required: "Campo obrigatório" })}
                                    id="description"
                                    type="text"
                                />
                                {errors.description && <p>{errors.description.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="imageLink">Link da Imagem</label>
                                <input
                                    {...register("photo_url", { required: "Campo obrigatório" })}
                                    id="imageLink"
                                    type="text"
                                    value={imageSrc}
                                    onChange={handleImageChange}
                                    placeholder="Insira o URL da imagem"
                                />
                                {errors.photo_url && <p>{errors.photo_url.message}</p>}
                            </div>
                        </div>
                    }
                        button={<button type="submit">{editingProduct ? "Editar": "Cadastrar"}</button>}
                />
                </form>
            </div>
       
        </>
    );
}

export default Products;
