'use client';
import {ProductModel} from "@/app/modal/ProductModel";
import {useEffect, useState} from "react";
import {deleteProduct, getProduct} from "@/app/services/ProductService";
import {usePathname, useRouter} from "next/navigation";
import {Btn} from "@/app/components/atoms/Btn";
import Link from "next/link";
import ItemDisplaySingleCard from "@/app/components/molecules/ItemDisplaySingleCard";
import ErrorMessage from "@/app/components/atoms/alertMessages/ErrorMessage";
import {useAppStore} from "@/lib/hooks";
import {deleteItems} from "@/lib/features/products/productSlice";
import {notify, notifyerror} from "@/app/components/atoms/alertMessages/toastMessages/ToastMessages";

export default function page() {
    const params = usePathname();
    const [product, setProduct] = useState<ProductModel>({productID: 0, name: '', price: 0, stock: 0, description: ''});
    const [loading, setLoading] = useState(true);
    const [showNoDataFetchedError, setShowNoDataFetchedError] = useState(false);
    const router = useRouter();
    const store = useAppStore();

    const deleteOneProduct = async (productID: number) => {
        if (!confirm('Are you sure you want to delete this product?')) {
            notifyerror("Product not deleted");
            return;
        } else {
            const response = await deleteProduct(productID);
            store.dispatch(deleteItems(productID));
            notify('Product deleted successfully');
            router.push('/inventory');
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productID = Number(params.slice(11, params.length));
                const fetchedProduct = await getProduct(productID);
                setProduct(fetchedProduct);
                if (!fetchedProduct) {
                    setShowNoDataFetchedError(true);
                }
            } catch (e) {
                console.log('Error fetching product: ', e);
                setShowNoDataFetchedError(true);
            } finally {
                setLoading(false);
            }
        }
        return () => {
            fetchData().then(r => console.log(r));
        }
    }, []);

    return (
        <div>
            <div>
                <Link href="/inventory/" scroll={false}>
                    <Btn functionality={null} text={'Go back'}/>
                </Link>
            </div>

            <div>
                {
                    showNoDataFetchedError ? <h1><ErrorMessage message="Invalid productID. Please check again"/></h1> :
                        <div>
                            {
                                !loading ? <ItemDisplaySingleCard
                                        product={product}
                                        updateProduct={() => router.push('/inventory/update')}
                                        deleteProduct={deleteOneProduct}/> :
                                    <h1>loading...</h1>
                            }
                        </div>
                }
            </div>
        </div>
    );

}