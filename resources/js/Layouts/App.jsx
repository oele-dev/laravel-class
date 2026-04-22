import { Head, Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { LocaleProvider, useLocale } from '../locale';
import t from '../t';

export default function App({ children }) {
    const { flash = {}, locale: initialLocale = 'en' } = usePage().props;

    return (
        <LocaleProvider initialLocale={initialLocale}>
            <AppLayoutContent flash={flash}>{children}</AppLayoutContent>
        </LocaleProvider>
    );
}

function AppLayoutContent({ flash, children }) {
    const { locale, setLocale } = useLocale();

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
                                        {t('categories', locale)}
                                    </Link>
                                    <Link
                                        href="/products"
                                        className={`border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                            window.location.pathname.startsWith('/products')
                                                ? 'border-indigo-400 text-gray-900'
                                                : ''
                                        }`}
                                    >
                                        {t('products', locale)}
                                    </Link>
                                </div>
                            </div>
                            {/* Language Switcher */}
                            <div className="flex items-center space-x-2">
                                <button
                                    className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                    onClick={() => setLocale('en')}
                                >
                                    EN
                                </button>
                                <button
                                    className={`px-2 py-1 rounded ${locale === 'es' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                    onClick={() => setLocale('es')}
                                >
                                    ES
                                </button>
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