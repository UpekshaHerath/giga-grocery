import Heading from "@/app/components/atoms/Heading";
import {useState} from "react";
import {ProductModel} from "@/app/modal/ProductModel";
import {updateProduct} from "@/app/services/ProductService";
import {useAppStore} from "@/lib/hooks";
import {updateItem} from "@/lib/features/products/productSlice";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";


interface ProductListProps {
    product: ProductModel;
}

export default function UpdateForm({ product }: ProductListProps) {
    const router = useRouter();
    const store = useAppStore();

    const [productData, setProductData] = useState<ProductModel>({
        productID: product.productID,
        name: product.name,
        price: product.price,
        stock: product.stock,
        description: product.description
    });

    const formCleanUp = () => {
        setProductData({
            productID: product.productID,
            name: '',
            price: 0,
            stock: 0,
            description: ''
        });
    }

    const notify = () => toast.success('Product Updated successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const updateProductForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const response = await updateProduct(productData);
        store.dispatch(updateItem(productData));
        formCleanUp();
        notify();
        router.push('/inventory');
        return response;
    }

    return (
        <div>
            <Heading headingText={'Update Product'}/>
            <form onSubmit={updateProductForm} className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Product name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="name" type="text"
                           placeholder="product name"
                           value={productData.name}
                           onChange={(e) => {setProductData({...productData, name: e.target.value})}}
                    />
                </div>

                <div className="mt-5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Price
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="price"
                           type="text"
                           placeholder="product price"
                           value={productData.price}
                           onChange={(e) => {setProductData({...productData, price: Number(e.target.value)})}}
                    />
                </div>

                <div className="mt-5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Product stock
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="stock"
                           type="text"
                           placeholder="product stock"
                           value={productData.stock}
                           onChange={(e) => {setProductData({...productData, stock: Number(e.target.value)})}}
                    />
                </div>

                <div className="mt-5">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Product description
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="description"
                              rows={5}
                              placeholder="description"
                              value={productData.description}
                              onChange={(e) => {setProductData({...productData, description: e.target.value})}}
                    />
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" type="submit">
                    Update Product
                </button>
            </form>
        </div>
    );
}