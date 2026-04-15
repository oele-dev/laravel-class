<?php

namespace App\Http\Controllers;

use App\Enums\UnitOfMeasure;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $products = Product::with('category')->paginate(15);

        return Inertia::render('Products/Index', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $categories = Category::all();
        $unitOfMeasures = UnitOfMeasure::cases();

        return Inertia::render('Products/Create', [
            'categories' => $categories,
            'unitOfMeasures' => $unitOfMeasures,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:0',
            'unit_of_measure' => 'required|in:' . implode(',', array_column(UnitOfMeasure::cases(), 'value')),
            'category_id' => 'required|exists:categories,id',
        ]);

        Product::create($validated);

        return redirect('/products')
            ->with('success', 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product): Response
    {
        $product->load('category');

        return Inertia::render('Products/Show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product): Response
    {
        $categories = Category::all();
        $unitOfMeasures = UnitOfMeasure::cases();

        return Inertia::render('Products/Edit', [
            'product' => $product,
            'categories' => $categories,
            'unitOfMeasures' => $unitOfMeasures,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:0',
            'unit_of_measure' => 'required|in:' . implode(',', array_column(UnitOfMeasure::cases(), 'value')),
            'category_id' => 'required|exists:categories,id',
        ]);

        $product->update($validated);

        return redirect('/products')
            ->with('success', 'Product updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product): RedirectResponse
    {
        $product->delete();

        return redirect('/products')
            ->with('success', 'Product deleted successfully.');
    }
}