export const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Luis Salazar <span className="mx-2 text-gray-700">•</span> Ingeniería de Sistemas
                </p>
            </div>
        </footer>
    );
};