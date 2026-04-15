import { Head, Link } from '@inertiajs/react';

export default function Show({ category }) {
    return (
        <>
            <Head title={`Category: ${category.name}`} />

            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-medium text-gray-900">Category Details</h3>
                        <div>
                            <Link
                                href={`/categories/${category.id}/edit`}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            >
                                Edit
                            </Link>
                            <Link
                                href="/categories"
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Back to Categories
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Category Details */}
                        <div>
                            <h4 className="text-md font-medium text-gray-900 mb-4">Category Information</h4>
                            <dl className="space-y-3">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">ID</dt>
                                    <dd className="text-sm text-gray-900">{category.id}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                                    <dd className="text-sm text-gray-900">{category.name}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Minimum Quantity</dt>
                                    <dd className="text-sm text-gray-900">{category.minimum_quantity}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Created At</dt>
                                    <dd className="text-sm text-gray-900">
                                        {new Date(category.created_at).toLocaleDateString()}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Updated At</dt>
                                    <dd className="text-sm text-gray-900">
                                        {new Date(category.updated_at).toLocaleDateString()}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        {/* Products */}
                        <div>
                            <h4 className="text-md font-medium text-gray-900 mb-4">
                                Products ({category.products.length})
                            </h4>
                            {category.products.length > 0 ? (
                                <div className="space-y-3">
                                    {category.products.map((product) => (
                                        <div key={product.id} className="border rounded-lg p-4">
                                            <Link
                                                href={`/products/${product.id}`}
                                                className="text-indigo-600 hover:text-indigo-900 font-medium"
                                            >
                                                {product.name}
                                            </Link>
                                            <p className="text-sm text-gray-600">
                                                Quantity: {product.quantity} {product.unit_of_measure} • Price: ${product.price}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500">
                                    No products in this category.{' '}
                                    <Link
                                        href={`/products/create?category=${category.id}`}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        Add the first product
                                    </Link>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}