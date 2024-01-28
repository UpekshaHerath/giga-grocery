import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Footer from "@/app/components/organisms/Footer";
import SideNavBar from "@/app/components/organisms/SideNavbar";
import TopNavbar from "@/app/components/organisms/TopNavbar";
import StoreProvider from "@/app/StoreProvider";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Giga Grocery',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <StoreProvider>
            <body>
            <ToastContainer/>
            <TopNavbar/>
            <div className="flex">
                <div className="max-w-60 w-1/4  bg-gray-100">
                    <SideNavBar/>
                </div>
                <div className="flex-1 flex-col min-h-screen">
                    <section className="flex-1 m-3 min-h-screen">
                        <div>
                            {children}
                        </div>
                    </section>
                    <Footer/>
                </div>
            </div>
            </body>
        </StoreProvider>
        </html>
    )
}
