<?php

namespace Database\Seeders;

use App\Models\Category;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create('es_ES'); // Configurar Faker para español

        for ($i = 0; $i < 100; $i++) {
            Category::create([
                'name' => $faker->unique()->words(rand(1, 3), true),
                'minimum_quantity' => $faker->numberBetween(1, 50),
            ]);
        }
    }
}