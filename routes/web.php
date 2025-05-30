<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome/welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard/dashboard');
    })->name('dashboard');

});

Route::get('/forbidden', function () {
    return Inertia::render('403/403-forbidden');
})->name('forbidden');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
require __DIR__ . '/student.php';
