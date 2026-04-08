@extends('layouts.app')

@section('header')
    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        {{ __('Product Details') }}
    </h2>
@endsection

@section('content')
    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-white border-b border-gray-200">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-medium text-gray-900">{{ $product->name }}</h3>
                <div>
                    <a href="/products/{{ $product->id }}/edit"
                       class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Edit
                    </a>
                    <a href="/products"
                       class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Back to List
                    </a>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Product Information</h4>
                    <dl class="space-y-3">
                        <div>
                            <dt class="text-sm font-medium text-gray-500">ID</dt>
                            <dd class="mt-1 text-sm text-gray-900">{{ $product->id }}</dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500">Name</dt>
                            <dd class="mt-1 text-sm text-gray-900">{{ $product->name }}</dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500">Price</dt>
                            <dd class="mt-1 text-sm text-gray-900">${{ number_format($product->price, 2) }}</dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500">Quantity</dt>
                            <dd class="mt-1 text-sm text-gray-900">{{ $product->quantity }}</dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500">Unit of Measure</dt>
                            <dd class="mt-1 text-sm text-gray-900">{{ $product->unit_of_measure->label() }}</dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500">Category</dt>
                            <dd class="mt-1 text-sm text-gray-900">
                                <a href="/categories/{{ $product->category->id }}"
                                   class="text-indigo-600 hover:text-indigo-900">
                                    {{ $product->category->name }}
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500">Created At</dt>
                            <dd class="mt-1 text-sm text-gray-900">{{ $product->created_at->format('M d, Y H:i') }}</dd>
                        </div>
                        <div>
                            <dt class="text-sm font-medium text-gray-500">Updated At</dt>
                            <dd class="mt-1 text-sm text-gray-900">{{ $product->updated_at->format('M d, Y H:i') }}</dd>
                        </div>
                    </dl>
                </div>

                <div>
                    <h4 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Additional Information</h4>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span class="text-sm text-gray-600">Total Value:</span>
                                <span class="text-sm font-medium text-gray-900">
                                    ${{ number_format($product->price * $product->quantity, 2) }}
                                </span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-sm text-gray-600">Category Min. Quantity:</span>
                                <span class="text-sm font-medium text-gray-900">
                                    {{ $product->category->minimum_quantity }}
                                </span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-sm text-gray-600">Stock Status:</span>
                                <span class="text-sm font-medium {{ $product->quantity >= $product->category->minimum_quantity ? 'text-green-600' : 'text-red-600' }}">
                                    {{ $product->quantity >= $product->category->minimum_quantity ? 'In Stock' : 'Low Stock' }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <h5 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Quick Actions</h5>
                        <div class="space-y-2">
                            <a href="/products/create?category={{ $product->category_id }}"
                               class="block w-full text-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                                Add Another Product in {{ $product->category->name }}
                            </a>
                            <a href="/categories/{{ $product->category->id }}"
                               class="block w-full text-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200">
                                View All {{ $product->category->name }} Products
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection