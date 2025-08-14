<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UrlController;


// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('{shortCode}', [UrlController::class, 'redirect'])->where('shortCode', '[A-Za-z0-9]{6}');