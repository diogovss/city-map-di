<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PointInterestController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/home',[PointInterestController::class, 'index']);
Route::post('/point-interest', [PointInterestController::class, 'store']);
