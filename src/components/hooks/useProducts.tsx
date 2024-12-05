import { useEffect, useState } from "react";
import { deleteProduct, getProducts, postProdutct, updateProduct } from "../../services/api";
import { ProductProps } from "../types";
import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function useProducts() {
    const [product, setProduct] = useState<ProductProps[]>([]);
    const [imageSrc, setImageSrc] = useState<string>("");
    const [editingProduct, setEditingProduct] = useState<ProductProps | null>(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ProductProps>();
    const { id } = useParams<{ id?: string }>();
    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const data = await getProducts();
            setProduct(data);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            toast.error("Erro ao carregar a lista de produtos.");
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageSrc(event.target.value);
    };

    const handleError = () => {
        const message = id ? "Erro ao atualizar o produto!" : "Erro ao cadastrar o produto!";
        toast.error(message);
    };

    const handleSuccess = () => {
        const message = id ? "Produto atualizado com sucesso!" : "Produto cadastrado com sucesso!";
        toast.success(message);
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteProduct(id);
            setProduct((prevProducts) => prevProducts.filter((item) => item.id !== id));
            toast.success("Produto excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
            toast.error("Erro ao excluir o produto.");
        }
    };

    const handleUpdate = async (id: string, updatedProduct: ProductProps) => {
        try {
            await updateProduct(id, updatedProduct);
            setProduct((prevProducts) =>
                prevProducts.map((item) => (item.id === id ? updatedProduct : item))
            );
        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
            handleError();
        }
    };

    const handleEdit = (item: ProductProps) => {
        setEditingProduct(item);
        setImageSrc(item.photo_url || "");
        reset(item);
    };

    const onSubmit: SubmitHandler<ProductProps> = async (data) => {
        try {
            const productData = {
                ...data,
                price: parseFloat(data.price.toString()),
            };

            if (editingProduct) {
                await handleUpdate(editingProduct.id, productData);
            } else {
                const newProduct = await postProdutct(productData);
                setProduct((prevProducts) => [...prevProducts, newProduct]);
            }
            handleSuccess();
            reset();
            setEditingProduct(null);
            navigate("/home");
        } catch (error) {
            console.error("Erro ao salvar produto:", error);
            handleError();
        }
    };

    useEffect(()=>{
        fetchProducts();
    },[])

    useEffect(() => {
        if (id && product.length > 0) {
            const productToEdit = product.find((item) => item.id === id);
            if (productToEdit) {
                handleEdit(productToEdit);
            }
        }
    }, [id, product]);

    return {
        product,
        setProduct,
        imageSrc,
        setImageSrc,
        errors,
        handleImageChange,
        onSubmit,
        register,
        handleSubmit,
        handleDelete,
        handleUpdate,
        handleEdit,
        editingProduct,
        navigate
    };
}

export default useProducts;
