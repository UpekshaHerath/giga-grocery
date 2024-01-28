'use client';
import {useRouter} from "next/navigation";
import Heading from "@/app/components/atoms/Heading";

export default function page() {
    const router = useRouter();

    const check = () => {
        return router.push('/');
    }

    return (
        <div>
            <Heading functionality={check} headingText={'Giga Grocery'} />
            <h2>Shop smarter, not harder. Discover the easiest way to find and buy what you love.</h2>
        </div>
    );

}
