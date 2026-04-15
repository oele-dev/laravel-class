import { Head, Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function App({ children }) {
    const { flash = {} } = usePage().props;

    return (
        <>
            <Head>
                <title>{import.meta.env.VITE_APP_NAME || 'Laravel'}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-gray-50">
                {/* Navigation */}
                <nav className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                {/* Logo */}
                                <div className="shrink-0 flex items-center">
                                    <Link
                                        href="/categories"
                                        className="text-xl font-bold text-gray-800"
                                    >
                                        {import.meta.env.VITE_APP_NAME || 'Laravel'}
                                    </Link>
                                </div>

                                {/* Navigation Links */}
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <Link
                                        href="/categories"
                                        className={`border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                            window.location.pathname.startsWith('/categories')
                                                ? 'border-indigo-400 text-gray-900'
                                                : ''
                                        }`}
                                    >
                                        Categories
                                    </Link>
                                    <Link
                                        href="/products"
                                        className={`border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                            window.location.pathname.startsWith('/products')
                                                ? 'border-indigo-400 text-gray-900'
                                                : ''
                                        }`}
                                    >
                                        Products
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Page Content */}
                <main className="py-8">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        {/* Flash Messages */}
                        {flash.success && (
                            <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                <span className="block sm:inline">{flash.success}</span>
                            </div>
                        )}

                        {flash.error && (
                            <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <span className="block sm:inline">{flash.error}</span>
                            </div>
                        )}

                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}