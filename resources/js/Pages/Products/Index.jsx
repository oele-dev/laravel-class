import { useState } from 'react';
import { useLocale } from '../../locale';
import t  from '../../t';
import { Head, Link, router } from '@inertiajs/react';
import DataTable from '@/Components/DataTable';

export default function Index({ products, filters = {} }) {
    const [search, setSearch] = useState(filters.search || '');
    const { locale } = useLocale();
    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: t('name', locale) },
        {
            key: 'price',
            label: t('price', locale),
            render: (item) => `$${parseFloat(item.price).toFixed(2)}`
        },
        { key: 'quantity', label: t('quantity', locale) },
        {
            key: 'unit_of_measure',
            label: t('unit', locale),
            render: (item) => item.unit_of_measure
        },
        {
            key: 'category',
            label: t('category', locale),
            render: (item) => item.category?.name || 'N/A'
        },
        {
            key: 'created_at',
            label: t('created_at', locale),
            render: (item) => new Date(item.created_at).toLocaleDateString()
        },
    ];

    const actions = (product) => (
        <>
            <Link
                href={`/products/${product.id}`}
                className="text-indigo-600 hover:text-indigo-900 mr-3"
            >
                {t('view', locale)}
            </Link>
            <Link
                href={`/products/${product.id}/edit`}
                className="text-indigo-600 hover:text-indigo-900 mr-3"
            >
                {t('edit', locale)}
            </Link>
            <button
                onClick={() => {
                    if (confirm(locale === 'es' ? '¿Seguro que deseas eliminar este producto?' : 'Are you sure you want to delete this product?')) {
                        router.delete(`/products/${product.id}`);
                    }
                }}
                className="text-red-600 hover:text-red-900"
            >
                {t('delete', locale)}
            </button>
        </>
    );

    return (
        <>
            <Head title={t('products', locale)} />

            {/* Search Bar */}
            <div className="mb-4 flex items-center">
                <input
                    type="search"
                    className="border rounded px-3 py-2 mr-2 w-64"
                    placeholder={locale === 'es' ? 'Buscar por producto o categoría...' : 'Search by product or category...'}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            router.get('/products', { search }, { preserveState: true });
                        }
                    }}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => router.get('/products', { search }, { preserveState: true })}
                >
                    {locale === 'es' ? 'Buscar' : 'Search'}
                </button>
            </div>

            <DataTable
                columns={columns}
                data={products.data}
                actions={actions}
                emptyMessage={t('no_products_found', locale)}
                createUrl="/products/create"
                createText={t('add_new_product', locale)}
            />

            {/* Pagination */}
            {products.links && (
                <div className="mt-4">
                    {products.links.map((link, index) => (
                        link.url ? (
                            <Link
                                key={index}
                                href={link.url}
                                className={`px-3 py-2 mx-1 rounded ${
                                    link.active
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ) : (
                            <span
                                key={index}
                                className="px-3 py-2 mx-1 rounded bg-blue-500 text-white"
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        )
                    ))}
                </div>
            )}
        </>
    );
}