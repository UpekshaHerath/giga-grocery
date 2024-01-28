'use client';
import {getProducts, getProductsByPriceRange} from "@/app/services/ProductService";
import Heading from "@/app/components/atoms/Heading";
import Link from "next/link";
import {Btn} from "@/app/components/atoms/Btn";
import {useEffect, useRef, useState} from "react";
import CardContainer from "@/app/components/organisms/CardContainer";
import {useSelector} from "react-redux";
import ErrorMessage from "@/app/components/atoms/alertMessages/ErrorMessage";
import {initializeProducts} from "@/lib/features/products/productSlice";
import {useAppStore} from "@/lib/hooks";
import {Range} from 'react-range';

export default function page() {
    const [loading, setLoading] = useState(true);
    const [showNoDataFetchedError, setShowNoDataFetchedError] = useState(false);
    const reduxProducts = useSelector((state: any) => state.products.products);
    const store = useAppStore();
    const initialized = useRef(false);
    const [showFilter, setShowFilter] = useState(false);
    const [values, setValues] = useState([200, 800]);

    /**
     *fetching data related to the filtering of the products
     */
    useEffect(() => {
        const submitFilter = async () => {
            const response = await getProductsByPriceRange(values[0], values[1]);
            store.dispatch(initializeProducts(response));
            return response;
        }
        return () => {
            submitFilter().then(r => console.log(r));
        }
    }, [values]);

    /**
     * fetching data related to the products
     */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedProducts = await getProducts();
                if (!initialized.current) {
                    store.dispatch(initializeProducts(fetchedProducts))
                    initialized.current = true;
                }
            } catch (error) {
                console.log(error)
                setShowNoDataFetchedError(true)
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
            <Heading headingText={'Product List'}/>
            <Link href="/inventory/new" scroll={false}>
                <Btn functionality={null} text={'Add Product'}/>
            </Link>

            <div className={`m-10 `}>
                <p className="mb-4 font-bold cursor-pointer" onClick={() => {
                    !showFilter ? setShowFilter(true) : setShowFilter(false)
                }}>Filter by Price </p>
                {
                    !showFilter ? null : <div>
                        <Range
                            step={10}
                            min={0}
                            max={1000}
                            values={values}
                            onChange={(newValues) => setValues(newValues)}
                            renderTrack={({props, children}) => (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,
                                        height: '6px',
                                        width: '100%',
                                        backgroundColor: '#ccc',
                                    }}
                                >
                                    {children}
                                </div>
                            )}
                            renderThumb={({props}) => (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,
                                        height: '20px',
                                        width: '20px',
                                        backgroundColor: '#007bff',
                                        borderRadius: '50%',
                                    }}
                                />
                            )}
                        />
                        <div className="mt-5 flex flex-row">
                            <p className="bg-gray-300 mr-2.5 p-2 rounded-2xl">Lower Bound: <span
                                className="font-bold">{values[0]}</span></p>
                            <p className="bg-gray-300 mr-2.5 p-2 rounded-2xl">Upper Bound: <span
                                className="font-bold">{values[1]}</span></p>
                        </div>
                    </div>
                }
            </div>

            <div>
                {
                    showNoDataFetchedError ? <ErrorMessage message={"Products do not fetch..."}/> :
                        <div className="m-3 ml-0">
                            {!loading ? <CardContainer products={reduxProducts}/> : <h1>loading...</h1>}
                        </div>
                }
            </div>
        </div>
    );

}
