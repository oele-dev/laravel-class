<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/products');

Route::resource('categories', CategoryController::class);
Route::resource('products', ProductController::class);

use Inertia\Inertia;
Route::get('/api-products', function () {
	return Inertia::render('Products/ApiProductsTest');
});
