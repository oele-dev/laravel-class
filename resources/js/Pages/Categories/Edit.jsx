import { Head, Link } from '@inertiajs/react';
import Form from '@/Components/Form';

export default function Edit({ category }) {
    const fields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            value: category.name,
        },
        {
            name: 'minimum_quantity',
            label: 'Minimum Quantity',
            type: 'number',
            value: category.minimum_quantity,
        },
    ];

    return (
        <>
            <Head title={`Edit Category: ${category.name}`} />

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-medium text-gray-900">Edit Category</h3>
                        <div>
                            <Link
                                href={`/categories/${category.id}`}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                            >
                                View
                            </Link>
                            <Link
                                href="/categories"
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Back to Categories
                            </Link>
                        </div>
                    </div>

                    <Form
                        fields={fields}
                        submitUrl={`/categories/${category.id}`}
                        method="put"
                        submitText="Update Category"
                    />
                </div>
            </div>
        </>
    );
}