import Link from "next/link";
import Heading from "@/app/components/atoms/Heading";

export default function TopNavbar() {

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-300 p-6">
            <div className="flex items-center flex-shrink-0 mr-6">
                <span className="font-semibold text-xl tracking-tight"><Link href="/" scroll={false}><Heading
                    headingText="Giga Grocery" headingSize="small"/></Link></span>
            </div>
        </nav>
    );

}