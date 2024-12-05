import axios from "axios";
import { ProductProps } from "../components/types";

const api = axios.create({
    baseURL: "http://localhost:3000",
    headers:{
        "Content-Type": "application/json",
    }
})

export const getProducts = async ()=>{
    const response = await api.get("/products")
    return response.data
}

export const postProdutct = async (product:{
    name: string;
    price: number;
    description: string;
    photo_url: string;
})=>{
    const response = await api.post("products", product);

    return response.data
}

export const deleteProduct = async (id: string) => {
    return await api.delete(`/products/${id}`);
};

export const updateProduct = async (id: string, updatedProduct: ProductProps) => {
    return await api.put(`/products/${id}`, updatedProduct);
};