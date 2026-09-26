import { Footer } from "@/components/footer/components/Footer";
import { Navbar } from "@/components/navbar/components/Navbar";
import { getDefaultMetadata } from "@/utils/seo";
import type { Metadata } from "next";


export const metadata: Metadata = getDefaultMetadata();

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
