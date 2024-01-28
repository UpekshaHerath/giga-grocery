/**
 * ProductModel with productID
 */
export interface ProductModel {
    productID: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

/**
 * ProductModel without productID
 */
export interface ProductPostModel {
    name: string;
    description: string;
    price: number;
    stock: number;
}
