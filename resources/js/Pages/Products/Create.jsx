import { Head, Link } from '@inertiajs/react';
import Form from '@/Components/Form';

export default function Create({ categories, unitOfMeasures }) {
    const fields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            value: '',
        },
        {
            name: 'price',
            label: 'Price',
            type: 'number',
            step: '0.01',
            value: '',
        },
        {
            name: 'quantity',
            label: 'Quantity',
            type: 'number',
            value: '',
        },
        {
            name: 'unit_of_measure',
            label: 'Unit of Measure',
            type: 'select',
            value: '',
            options: unitOfMeasures.map(unit => ({
                value: unit.value,
                label: unit.value
            })),
        },
        {
            name: 'category_id',
            label: 'Category',
            type: 'select',
            value: '',
            options: categories.map(category => ({
                value: category.id,
                label: category.name
            })),
        },
    ];

    return (
        <>
            <Head title="Create Product" />

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-medium text-gray-900">Create Product</h3>
                        <Link
                            href="/products"
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Back to Products
                        </Link>
                    </div>

                    <Form
                        fields={fields}
                        submitUrl="/products"
                        method="post"
                        submitText="Create Product"
                        onSuccess={() => window.location.href = '/products'}
                    />
                </div>
            </div>
        </>
    );
}