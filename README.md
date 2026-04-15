# Laravel Class Project

A small Laravel application for managing categories and products.

This repository is built on Laravel and includes:
- resource routes for `categories` and `products`
- Eloquent models and relationships
- database migrations for categories and products
- Blade views for CRUD operations
- a simple admin-style inventory workflow

## How this Laravel app works

Laravel is an MVC framework. This application follows Laravel conventions in these ways:

- `routes/web.php` defines routes and maps them to controllers.
- `app/Http/Controllers/CategoryController.php` and `app/Http/Controllers/ProductController.php` implement CRUD operations.
- `app/Models/Category.php` and `app/Models/Product.php` define database models and relationships.
- `database/migrations/` contains the schema for `categories` and `products`.
- `resources/views/` contains Blade templates for listing, creating, editing, viewing, and deleting records.

This app uses standard Laravel features:
- `Route::resource()` for RESTful routing
- `Request` validation for form input
- Eloquent ORM for database access
- migrations to create database tables
- Blade templating for the UI

## What this repository contains

Key files and directories:
- `app/Http/Controllers/` — controller logic for categories and products
- `app/Models/` — Eloquent models and relationships
- `app/Enums/UnitOfMeasure.php` — allowed unit values for products
- `database/migrations/` — schema definitions for `categories` and `products`
- `resources/views/` — Blade templates for UI pages
- `routes/web.php` — web routes configuration
- `composer.json` — PHP dependencies and project scripts

## Application features

The application currently supports:
- category CRUD
- product CRUD
- product-category relationship
- pagination for lists
- validation for required fields
- numeric and enum validation for products

## Install and run locally

To get started locally, fork the repository on GitHub and clone your fork.

```bash
git clone https://github.com/<your-username>/laravel-class.git
cd laravel-class
```

Install PHP dependencies:

```bash
composer install
```

Copy the example environment file and generate an application key:

```bash
cp .env.example .env
php artisan key:generate
```

Configure the database in `.env`.

### Option 1: SQLite (quick local setup)

```bash
touch database/database.sqlite
```

Then set in `.env`:

```env
DB_CONNECTION=sqlite
DB_DATABASE=/workspaces/laravel-class/database/database.sqlite
```

### Option 2: MySQL / MariaDB

Update `.env` with your credentials:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_class
DB_USERNAME=your_user
DB_PASSWORD=your_password
```

Run migrations:

```bash
php artisan migrate
```

Install frontend dependencies and build assets:

```bash
npm install
npm run dev
```

Start the local development server:

```bash
php artisan serve
```

Visit `http://127.0.0.1:8000` in your browser.

## Work on the project

After forking and cloning your own copy:
- create a feature branch for your work
- run `composer install` and `npm install`
- use `php artisan migrate` after changing migrations
- use `npm run dev` while developing frontend assets
- use `php artisan test` to run Laravel tests

## Commit/build process notes

This repository appears to have been imported from GitHub as the current project state, with a main commit from the original source. The current application was built by:
- starting from a Laravel skeleton project
- adding migrations for categories and products
- creating models and Eloquent relationships
- adding resource controllers and validation logic
- adding views for category and product management
- defining the app routes in `routes/web.php`

If you want to extend this app, add a new migration, update models/controllers, and then run `php artisan migrate` or `php artisan migrate:fresh` to rebuild the database.

## License

This project is open source and released under the MIT license.
