import Link from "next/link";

export default function SideNavBar() {
    return (
        <div className="flex flex-wrap fixed">
            <Link href="/dashboard" className="block w-full h-4 p-12 pl-2 ">Dashboard</Link>
            <Link href="/inventory" className="block w-full h-4 p-12 pl-2">Inventory</Link>
        </div>
    );
}