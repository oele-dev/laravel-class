import { Head, Link } from '@inertiajs/react';

export default function Show({ product }) {
    const totalValue = (parseFloat(product.price) * parseInt(product.quantity)).toFixed(2);
    const isLowStock = parseInt(product.quantity) < parseInt(product.category?.minimum_quantity || 0);

    return (
        <>
            <Head title={`Product: ${product.name}`} />

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-medium text-gray-900">Product Details</h3>
                        <div>
                            <Link
                                href={`/products/${product.id}/edit`}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            >
                                Edit
                            </Link>
                            <Link
                                href="/products"
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Back to Products
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Product Details */}
                        <div>
                            <h4 className="text-md font-medium text-gray-900 mb-4">Product Information</h4>
                            <dl className="space-y-3">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">ID</dt>
                                    <dd className="text-sm text-gray-900">{product.id}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                                    <dd className="text-sm text-gray-900">{product.name}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Price</dt>
                                    <dd className="text-sm text-gray-900">${parseFloat(product.price).toFixed(2)}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Quantity</dt>
                                    <dd className="text-sm text-gray-900">{product.quantity} {product.unit_of_measure}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Unit of Measure</dt>
                                    <dd className="text-sm text-gray-900">{product.unit_of_measure}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Category</dt>
                                    <dd className="text-sm text-gray-900">
                                        <Link
                                            href={`/categories/${product.category?.id}`}
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            {product.category?.name || 'N/A'}
                                        </Link>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Created At</dt>
                                    <dd className="text-sm text-gray-900">
                                        {new Date(product.created_at).toLocaleDateString()}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Updated At</dt>
                                    <dd className="text-sm text-gray-900">
                                        {new Date(product.updated_at).toLocaleDateString()}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        {/* Additional Info */}
                        <div>
                            <h4 className="text-md font-medium text-gray-900 mb-4">Additional Information</h4>
                            <dl className="space-y-3">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Total Value</dt>
                                    <dd className="text-sm text-gray-900">${totalValue}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Category Min Quantity</dt>
                                    <dd className="text-sm text-gray-900">{product.category?.minimum_quantity || 'N/A'}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Stock Status</dt>
                                    <dd className={`text-sm ${isLowStock ? 'text-red-600' : 'text-green-600'}`}>
                                        {isLowStock ? 'Low Stock' : 'In Stock'}
                                    </dd>
                                </div>
                            </dl>

                            <div className="mt-6 space-y-2">
                                <Link
                                    href={`/products/create?category=${product.category?.id}`}
                                    className="block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Add Another Product in Category
                                </Link>
                                <Link
                                    href={`/categories/${product.category?.id}`}
                                    className="block w-full text-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    View All Category Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}