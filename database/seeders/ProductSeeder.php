<?php

namespace Database\Seeders;

use App\Enums\UnitOfMeasure;
use App\Models\Category;
use App\Models\Product;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create('es_ES'); // Configurar Faker para español
        $categories = Category::all();
        $unitOfMeasures = UnitOfMeasure::cases();

        for ($i = 0; $i < 1000; $i++) {
            Product::create([
                'name' => $faker->unique()->words(rand(2, 5), true),
                'price' => $faker->randomFloat(2, 1, 10000), // Precio entre 1 y 10000 con 2 decimales
                'quantity' => $faker->numberBetween(0, 1000),
                'unit_of_measure' => $faker->randomElement($unitOfMeasures)->value,
                'category_id' => $categories->random()->id,
            ]);
        }
    }
}