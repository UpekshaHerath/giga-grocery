import {ProductModel} from "@/app/modal/ProductModel";
import Link from "next/link";
import Image from "next/image";
import laptopPic from "../../../../public/laptop.jpg";

interface TableRowProps {
    product: ProductModel;
}
export function Card({product}: TableRowProps) {

    return (
        <Link href="inventory/[id]" as={`/inventory/${product.productID}`}>
            <div className="max-w-sm rounded overflow-hidden shadow-md bg-white m-4">
                <Image className="w-full" src={laptopPic} alt="Product image" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{product.name}</div>
                    <p className="text-gray-700 text-base">{product.description}</p>
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-gray-700">Price: ${product.price}</span>
                        <span className="text-gray-700">Stock: {product.stock}</span>
                    </div>
                </div>
            </div>
        </Link>

    )
}