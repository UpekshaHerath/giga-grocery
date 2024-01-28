"use Client";
import {ProductModel} from "@/app/modal/ProductModel";
import {useState} from "react";
import UpdateForm from "@/app/components/organisms/UpdateForm";

interface ProductListProps {
    product: ProductModel;
    deleteProduct: any;
    updateProduct: any;
}

export default function ItemDisplaySingleCard({ product, deleteProduct, updateProduct }: ProductListProps) {
    const [isUpdateStateOn, setIsUpdateStateOn] = useState(false);

    return (
        <div className="mx-auto w-full max-w-7xl bg-white rounded-lg shadow-xl p-12 flex flex-col items-center space-y-10 mt-4">
            { isUpdateStateOn ?
                <div>
                    <UpdateForm  product={product}/>
                </div>
             :
                <div>
                    <h1 className="text-3xl font-bold text-center">{product.name}</h1>
                    <p className="text-xl text-gray-700 text-center mb-4">{product.description}</p>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-gray-700 mr-2">Price:</span>
                            <span className="text-lg text-gray-900">${product.price}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-gray-700 mr-2">Stock:</span>
                            <span className="text-lg text-gray-900">{product.stock}</span>
                        </div>
                    </div>
                </div>
            }
            {
                isUpdateStateOn ? null :
                    <div className="flex justify-center mt-6">
                        <button onClick={() => deleteProduct(product.productID)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Delete
                        </button>
                        <button onClick={() => setIsUpdateStateOn(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
                            Edit
                        </button>
                    </div>
            }
        </div>
    );
}