import { ProductModel } from "../../modal/ProductModel";
import {Card} from "@/app/components/atoms/Card";

interface ProductListProps {
    products: ProductModel[];
}
export default function CardContainer({products}: ProductListProps) {

    return (
        <div className="flex flex-1 flex-wrap justify-around">
            {
                products.map((product, key) => (
                    <Card key={key} product={product}/>
                ))
            }
        </div>
    );

}
