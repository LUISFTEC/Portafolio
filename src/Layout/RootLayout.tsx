import { Outlet } from "react-router-dom";
import { Footer } from "../shared/Footer";

export const RootLayout = () => {
    return (
        <div className="bg-black text-white min-h-screen pt-5 overflow-x-hidden">
            <main className="max-w-screen-2xl mx-auto px-4">
                <Outlet />
            </main>
            <Footer/>
        </div>
        
    );
};