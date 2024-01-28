'use client';
import Heading from "@/app/components/atoms/Heading";
import {postProduct} from "@/app/services/ProductService";
import {useState} from "react";
import {ProductPostModel} from "@/app/modal/ProductModel";
import Link from "next/link";
import {Btn} from "@/app/components/atoms/Btn";
import {useAppStore} from "@/lib/hooks";
import {addItem} from "@/lib/features/products/productSlice";
import 'react-toastify/dist/ReactToastify.css';
import {notify, notifyerror} from "@/app/components/atoms/alertMessages/toastMessages/ToastMessages";

export default function page() {
    const store = useAppStore();
    const [productData, setProductData] = useState<ProductPostModel>({
        name: '',
        price: 0,
        stock: 0,
        description: ''
    });

    const formCleanUp = () => {
        setProductData({
            name: '',
            price: 0,
            stock: 0,
            description: ''
        });
    }

    const addProduct = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (productData.name == '' || productData.price == 0 || productData.stock == 0 || productData.description == '') {
            notifyerror('Please fill all the fields');
            return;
        }
        const response: any = await postProduct(productData);
        if (response === "") {
            notifyerror('Product name should be unique');
            return;
        }
        store.dispatch(addItem(response));
        notify('Product added successfully');
        formCleanUp();
        return response;
    }

    return (
        <div>
            <Heading headingText={'New Product'}/>
            <div>
                <Link href="/inventory">
                    <Btn functionality={null} text={'Go back'} />
                </Link>
            </div>
            <form onSubmit={addProduct} className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4">
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
                    Add Product
                </button>

            </form>
        </div>
    );

}