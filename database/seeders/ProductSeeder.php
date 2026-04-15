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
        $faker = Faker::create('es_ES');

        $productsByCategory = [
            'Electrónicos' => [
                ['name' => 'Teléfono móvil Samsung Galaxy', 'unit' => 'piece', 'price_range' => [200, 800]],
                ['name' => 'Laptop Dell Inspiron', 'unit' => 'piece', 'price_range' => [500, 1200]],
                ['name' => 'Auriculares inalámbricos Sony', 'unit' => 'piece', 'price_range' => [50, 150]],
                ['name' => 'Televisor LED LG 55"', 'unit' => 'piece', 'price_range' => [400, 1000]],
                ['name' => 'Cargador USB rápido', 'unit' => 'piece', 'price_range' => [10, 30]],
                ['name' => 'Tablet Apple iPad', 'unit' => 'piece', 'price_range' => [300, 700]],
                ['name' => 'Mouse inalámbrico Logitech', 'unit' => 'piece', 'price_range' => [15, 50]],
                ['name' => 'Teclado mecánico RGB', 'unit' => 'piece', 'price_range' => [40, 100]],
            ],
            'Ropa y Accesorios' => [
                ['name' => 'Camiseta algodón básica', 'unit' => 'piece', 'price_range' => [10, 25]],
                ['name' => 'Pantalones vaqueros Levi\'s', 'unit' => 'piece', 'price_range' => [30, 80]],
                ['name' => 'Zapatos deportivos Nike', 'unit' => 'piece', 'price_range' => [50, 120]],
                ['name' => 'Bolso de cuero', 'unit' => 'piece', 'price_range' => [40, 150]],
                ['name' => 'Gafas de sol Ray-Ban', 'unit' => 'piece', 'price_range' => [60, 200]],
                ['name' => 'Reloj Casio digital', 'unit' => 'piece', 'price_range' => [20, 80]],
                ['name' => 'Chaqueta impermeable', 'unit' => 'piece', 'price_range' => [35, 100]],
                ['name' => 'Bufanda de lana', 'unit' => 'piece', 'price_range' => [15, 40]],
            ],
            'Alimentos y Bebidas' => [
                ['name' => 'Arroz blanco 1kg', 'unit' => 'kg', 'price_range' => [1, 3]],
                ['name' => 'Leche entera 1L', 'unit' => 'liter', 'price_range' => [0.8, 1.5]],
                ['name' => 'Pan de molde integral', 'unit' => 'pack', 'price_range' => [2, 5]],
                ['name' => 'Café molido 500g', 'unit' => 'kg', 'price_range' => [5, 12]],
                ['name' => 'Aceite de oliva 1L', 'unit' => 'liter', 'price_range' => [4, 10]],
                ['name' => 'Manzanas rojas', 'unit' => 'kg', 'price_range' => [1.5, 4]],
                ['name' => 'Cerveza Corona pack 6', 'unit' => 'pack', 'price_range' => [6, 12]],
                ['name' => 'Chocolate negro 100g', 'unit' => 'piece', 'price_range' => [2, 6]],
            ],
            'Hogar y Jardín' => [
                ['name' => 'Juego de sábanas queen', 'unit' => 'piece', 'price_range' => [25, 60]],
                ['name' => 'Lámpara de mesa LED', 'unit' => 'piece', 'price_range' => [15, 50]],
                ['name' => 'Mesa de comedor extensible', 'unit' => 'piece', 'price_range' => [150, 400]],
                ['name' => 'Cortacésped eléctrico', 'unit' => 'piece', 'price_range' => [80, 200]],
                ['name' => 'Maceta de cerámica 20cm', 'unit' => 'piece', 'price_range' => [8, 25]],
                ['name' => 'Aspiradora robot', 'unit' => 'piece', 'price_range' => [100, 300]],
                ['name' => 'Jardín zen piedras', 'unit' => 'piece', 'price_range' => [20, 50]],
                ['name' => 'Almohada viscoelástica', 'unit' => 'piece', 'price_range' => [20, 60]],
            ],
            'Deportes y Recreación' => [
                ['name' => 'Pelota de fútbol Adidas', 'unit' => 'piece', 'price_range' => [15, 40]],
                ['name' => 'Bicicleta de montaña', 'unit' => 'piece', 'price_range' => [200, 600]],
                ['name' => 'Pesas dumbbells 5kg', 'unit' => 'piece', 'price_range' => [10, 30]],
                ['name' => 'Raqueta de tenis Wilson', 'unit' => 'piece', 'price_range' => [50, 150]],
                ['name' => 'Tabla de surf', 'unit' => 'piece', 'price_range' => [100, 300]],
                ['name' => 'Guantes de boxeo', 'unit' => 'piece', 'price_range' => [25, 70]],
                ['name' => 'Colchoneta de yoga', 'unit' => 'piece', 'price_range' => [15, 40]],
                ['name' => 'Casco de ciclismo', 'unit' => 'piece', 'price_range' => [20, 60]],
            ],
            'Libros y Educación' => [
                ['name' => 'Libro "El Quijote"', 'unit' => 'piece', 'price_range' => [10, 25]],
                ['name' => 'Cuaderno universitario', 'unit' => 'piece', 'price_range' => [3, 8]],
                ['name' => 'Diccionario español-inglés', 'unit' => 'piece', 'price_range' => [15, 40]],
                ['name' => 'Libro de matemáticas', 'unit' => 'piece', 'price_range' => [20, 50]],
                ['name' => 'Atlas geográfico', 'unit' => 'piece', 'price_range' => [12, 30]],
                ['name' => 'Marcadores fluorescentes pack', 'unit' => 'pack', 'price_range' => [5, 15]],
                ['name' => 'Novela "Cien años de soledad"', 'unit' => 'piece', 'price_range' => [8, 20]],
                ['name' => 'Calculadora científica', 'unit' => 'piece', 'price_range' => [15, 50]],
            ],
            'Salud y Belleza' => [
                ['name' => 'Crema hidratante facial', 'unit' => 'piece', 'price_range' => [10, 30]],
                ['name' => 'Champú anticaspa 500ml', 'unit' => 'piece', 'price_range' => [5, 15]],
                ['name' => 'Vitamina C 1000mg', 'unit' => 'pack', 'price_range' => [8, 25]],
                ['name' => 'Máquina de afeitar eléctrica', 'unit' => 'piece', 'price_range' => [30, 80]],
                ['name' => 'Perfume Chanel No. 5', 'unit' => 'piece', 'price_range' => [50, 150]],
                ['name' => 'Pasta dental Colgate', 'unit' => 'piece', 'price_range' => [2, 6]],
                ['name' => 'Protector solar SPF 50', 'unit' => 'piece', 'price_range' => [8, 20]],
                ['name' => 'Cepillo de dientes eléctrico', 'unit' => 'piece', 'price_range' => [15, 40]],
            ],
            'Automóviles' => [
                ['name' => 'Aceite motor 5W30 1L', 'unit' => 'liter', 'price_range' => [8, 20]],
                ['name' => 'Filtro de aire universal', 'unit' => 'piece', 'price_range' => [5, 15]],
                ['name' => 'Batería de auto 12V', 'unit' => 'piece', 'price_range' => [50, 150]],
                ['name' => 'Llantas Michelin 205/55R16', 'unit' => 'piece', 'price_range' => [80, 200]],
                ['name' => 'Limpiaparabrisas Bosch', 'unit' => 'piece', 'price_range' => [10, 30]],
                ['name' => 'Anticongelante 2L', 'unit' => 'liter', 'price_range' => [6, 15]],
                ['name' => 'Kit de herramientas básico', 'unit' => 'piece', 'price_range' => [20, 50]],
                ['name' => 'Espejo retrovisor', 'unit' => 'piece', 'price_range' => [15, 40]],
            ],
            'Juguetes y Juegos' => [
                ['name' => 'Lego Creator 3-en-1', 'unit' => 'piece', 'price_range' => [20, 60]],
                ['name' => 'Muñeca Barbie Fashion', 'unit' => 'piece', 'price_range' => [15, 40]],
                ['name' => 'Juego de mesa Monopoly', 'unit' => 'piece', 'price_range' => [25, 50]],
                ['name' => 'Pelota de playa inflable', 'unit' => 'piece', 'price_range' => [5, 15]],
                ['name' => 'Puzzle 1000 piezas', 'unit' => 'piece', 'price_range' => [8, 20]],
                ['name' => 'Coche teledirigido', 'unit' => 'piece', 'price_range' => [30, 80]],
                ['name' => 'Bloques de construcción', 'unit' => 'piece', 'price_range' => [10, 30]],
                ['name' => 'Juego de cartas Uno', 'unit' => 'pack', 'price_range' => [5, 12]],
            ],
            'Herramientas y Ferretería' => [
                ['name' => 'Martillo de carpintero', 'unit' => 'piece', 'price_range' => [8, 20]],
                ['name' => 'Destornillador Phillips', 'unit' => 'piece', 'price_range' => [3, 10]],
                ['name' => 'Taladro inalámbrico Bosch', 'unit' => 'piece', 'price_range' => [50, 150]],
                ['name' => 'Cinta métrica 5m', 'unit' => 'piece', 'price_range' => [4, 12]],
                ['name' => 'Sierra para madera', 'unit' => 'piece', 'price_range' => [15, 40]],
                ['name' => 'Llave inglesa ajustable', 'unit' => 'piece', 'price_range' => [6, 18]],
                ['name' => 'Pintura acrílica blanca 1L', 'unit' => 'liter', 'price_range' => [8, 20]],
                ['name' => 'Clavos 100g', 'unit' => 'kg', 'price_range' => [2, 6]],
            ],
        ];

        $categories = Category::all();

        foreach ($categories as $category) {
            $categoryName = $category->name;
            if (isset($productsByCategory[$categoryName])) {
                foreach ($productsByCategory[$categoryName] as $productData) {
                    Product::create([
                        'name' => $productData['name'],
                        'price' => $faker->randomFloat(2, $productData['price_range'][0], $productData['price_range'][1]),
                        'quantity' => $faker->numberBetween(0, 100),
                        'unit_of_measure' => $productData['unit'],
                        'category_id' => $category->id,
                    ]);
                }
            }
        }

        // Add some random products to fill up to ~1000 if needed
        $totalProducts = Product::count();
        while ($totalProducts < 1000) {
            $randomCategory = $categories->random();
            Product::create([
                'name' => $faker->unique()->words(rand(2, 4), true),
                'price' => $faker->randomFloat(2, 1, 500),
                'quantity' => $faker->numberBetween(0, 100),
                'unit_of_measure' => $faker->randomElement(UnitOfMeasure::cases())->value,
                'category_id' => $randomCategory->id,
            ]);
            $totalProducts++;
        }
    }
}