import { Head, Link } from '@inertiajs/react';
import Form from '@/Components/Form';

export default function Edit({ product, categories, unitOfMeasures }) {
    const fields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            value: product.name,
        },
        {
            name: 'price',
            label: 'Price',
            type: 'number',
            step: '0.01',
            value: product.price,
        },
        {
            name: 'quantity',
            label: 'Quantity',
            type: 'number',
            value: product.quantity,
        },
        {
            name: 'unit_of_measure',
            label: 'Unit of Measure',
            type: 'select',
            value: product.unit_of_measure,
            options: unitOfMeasures.map(unit => ({
                value: unit.value,
                label: unit.value
            })),
        },
        {
            name: 'category_id',
            label: 'Category',
            type: 'select',
            value: product.category_id,
            options: categories.map(category => ({
                value: category.id,
                label: category.name
            })),
        },
    ];

    return (
        <>
            <Head title={`Edit Product: ${product.name}`} />

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-medium text-gray-900">Edit Product</h3>
                        <div>
                            <Link
                                href={`/products/${product.id}`}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                            >
                                View
                            </Link>
                            <Link
                                href="/products"
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Back to Products
                            </Link>
                        </div>
                    </div>

                    <Form
                        fields={fields}
                        submitUrl={`/products/${product.id}`}
                        method="put"
                        submitText="Update Product"
                    />
                </div>
            </div>
        </>
    );
}