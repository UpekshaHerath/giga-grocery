import axios from "axios";
import {ProductModel, ProductPostModel} from "@/app/modal/ProductModel";
import {serverUrl} from "@/app/configurations/ServerDetailesConfigurations";

/***
 * Get all the products from the server
 * @returns {Promise<ProductModel[]>}
 ***/
export async function getProducts(): Promise<ProductModel[]> {
    try {
        const response = await axios.get<ProductModel[]>(`${serverUrl}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

/***
 * Get a product from the server
 * @param id
 * @returns {Promise<ProductModel>}
 * **/
export async function getProduct(id: number): Promise<ProductModel> {
    try {
        const response = await axios.get<ProductModel>(`${serverUrl}/productByID/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
}

/**
 * Post a product to the server
 * @param product
 * @returns {Promise<ProductModel>}
 */
export async function postProduct(product: ProductPostModel): Promise<ProductModel> {
    try {
        const response = await axios.post<ProductModel>(`${serverUrl}/addProduct`, product);
        console.table(response);
        return response.data;
    } catch (error) {
        console.error('Error saving product:', error);
        throw error;
    }
}

/**
 * Delete a product from the server
 * @param id
 * @returns {Promise<ProductModel>}
 */
export async function deleteProduct(id: number): Promise<ProductModel> {
    try {
        const response = await axios.delete<ProductModel>(`${serverUrl}/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
}

/**
 * Update a product on the server
 * @param product
 * @returns {Promise<ProductModel>}
 */
export async function updateProduct(product: ProductModel): Promise<ProductModel> {
    try {
        const response = await axios.put<ProductModel>(`${serverUrl}/update`, product);
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
}

/**
 * Get products by price range
 * @param min
 * @param max
 */
export async function getProductsByPriceRange(min: number, max: number): Promise<ProductModel[]> {
    console.log("inside function")
    try {
        const response = await axios.get<ProductModel[]>(`${serverUrl}/filterProductsAccordingToPrice/${min}/${max}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}