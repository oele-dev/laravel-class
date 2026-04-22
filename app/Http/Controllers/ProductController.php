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
    public function index(Request $request): Response
    {
        $search = $request->input('search');
        $productsQuery = Product::with('category');

        if ($search) {
            $productsQuery->where(function ($query) use ($search) {
                $query->where('name', 'like', "%$search%")
                    ->orWhereHas('category', function ($q) use ($search) {
                        $q->where('name', 'like', "%$search%")
                        ;
                    });
            });
        }

        $products = $productsQuery->paginate(15)->withQueryString();

        return Inertia::render('Products/Index', [
            'products' => $products,
            'filters' => [
                'search' => $search,
            ],
            'locale' => app()->getLocale(),
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
            'locale' => app()->getLocale(),
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

        // Inertia espera un redirect después de éxito, pero los errores de validación se manejan automáticamente
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
            'locale' => app()->getLocale(),
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
            'locale' => app()->getLocale(),
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

        // Inertia espera un redirect después de éxito, pero los errores de validación se manejan automáticamente
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