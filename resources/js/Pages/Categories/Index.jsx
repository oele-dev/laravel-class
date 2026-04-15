import { Head, Link, router } from '@inertiajs/react';
import DataTable from '@/Components/DataTable';

export default function Index({ categories }) {
    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'minimum_quantity', label: 'Minimum Quantity' },
        { key: 'products_count', label: 'Products Count' },
        {
            key: 'created_at',
            label: 'Created At',
            render: (item) => new Date(item.created_at).toLocaleDateString()
        },
    ];

    const actions = (category) => (
        <>
            <Link
                href={`/categories/${category.id}`}
                className="text-indigo-600 hover:text-indigo-900 mr-3"
            >
                View
            </Link>
            <Link
                href={`/categories/${category.id}/edit`}
                className="text-indigo-600 hover:text-indigo-900 mr-3"
            >
                Edit
            </Link>
            <button
                onClick={() => {
                    if (confirm('Are you sure you want to delete this category?')) {
                        router.delete(`/categories/${category.id}`);
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
            <Head title="Categories" />

            <DataTable
                columns={columns}
                data={categories.data}
                actions={actions}
                emptyMessage="No categories found."
                createUrl="/categories/create"
                createText="Add New Category"
            />

            {/* Pagination */}
            {categories.links && (
                <div className="mt-4">
                    {categories.links.map((link, index) => (
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