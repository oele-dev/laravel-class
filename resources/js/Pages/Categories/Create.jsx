import { Head, Link } from '@inertiajs/react';
import Form from '@/Components/Form';

export default function Create() {
    const fields = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            value: '',
        },
        {
            name: 'minimum_quantity',
            label: 'Minimum Quantity',
            type: 'number',
            value: '',
        },
    ];

    return (
        <>
            <Head title="Create Category" />

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-medium text-gray-900">Create Category</h3>
                        <Link
                            href="/categories"
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Back to Categories
                        </Link>
                    </div>

                    <Form
                        fields={fields}
                        submitUrl="/categories"
                        method="post"
                        submitText="Create Category"
                        onSuccess={() => window.location.href = '/categories'}
                    />
                </div>
            </div>
        </>
    );
}