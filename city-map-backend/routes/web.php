<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PointInterestController;
use App\Http\Middleware\CorsMiddleware;
use App\Http\Middleware\VerifyCsrfToken;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/city-map', function () {
    return view('city-map');
});

Route::get('/points', function () {
    return view('points');
});

Route::get('/points/{latitude}/{longitude}', function ($latitude, $longitude) {
    return view('points',[
        'latitude' => $latitude,
        'longitude'=> $longitude
    ]);
});

Route::get('/home',[PointInterestController::class, 'listAll']);
Route::post('/points-interest', [PointInterestController::class, 'create']);
