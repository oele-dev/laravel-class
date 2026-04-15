import { Head, Link, router } from '@inertiajs/react';
import DataTable from '@/Components/DataTable';

export default function Index({ products }) {
    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        {
            key: 'price',
            label: 'Price',
            render: (item) => `$${parseFloat(item.price).toFixed(2)}`
        },
        { key: 'quantity', label: 'Quantity' },
        {
            key: 'unit_of_measure',
            label: 'Unit',
            render: (item) => item.unit_of_measure
        },
        {
            key: 'category',
            label: 'Category',
            render: (item) => item.category?.name || 'N/A'
        },
        {
            key: 'created_at',
            label: 'Created At',
            render: (item) => new Date(item.created_at).toLocaleDateString()
        },
    ];

    const actions = (product) => (
        <>
            <Link
                href={`/products/${product.id}`}
                className="text-indigo-600 hover:text-indigo-900 mr-3"
            >
                View
            </Link>
            <Link
                href={`/products/${product.id}/edit`}
                className="text-indigo-600 hover:text-indigo-900 mr-3"
            >
                Edit
            </Link>
            <button
                onClick={() => {
                    if (confirm('Are you sure you want to delete this product?')) {
                        router.delete(`/products/${product.id}`);
                    }
                }}
                className="text-red-600 hover:text-red-900"
            >
                Delete
            </button>
        </>
    );

    return (
        <>
            <Head title="Products" />

            <DataTable
                columns={columns}
                data={products.data}
                actions={actions}
                emptyMessage="No products found."
                createUrl="/products/create"
                createText="Add New Product"
            />

            {/* Pagination */}
            {products.links && (
                <div className="mt-4">
                    {products.links.map((link, index) => (
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
                    ))}
                </div>
            )}
        </>
    );
}