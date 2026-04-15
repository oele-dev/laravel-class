<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Electrónicos', 'minimum_quantity' => 5],
            ['name' => 'Ropa y Accesorios', 'minimum_quantity' => 10],
            ['name' => 'Alimentos y Bebidas', 'minimum_quantity' => 20],
            ['name' => 'Hogar y Jardín', 'minimum_quantity' => 3],
            ['name' => 'Deportes y Recreación', 'minimum_quantity' => 8],
            ['name' => 'Libros y Educación', 'minimum_quantity' => 15],
            ['name' => 'Salud y Belleza', 'minimum_quantity' => 12],
            ['name' => 'Automóviles', 'minimum_quantity' => 2],
            ['name' => 'Juguetes y Juegos', 'minimum_quantity' => 25],
            ['name' => 'Herramientas y Ferretería', 'minimum_quantity' => 6],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}