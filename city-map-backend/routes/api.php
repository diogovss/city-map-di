<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PointInterestController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/points-interest',[PointInterestController::class, 'listAll']);
Route::post('/points-interest', [PointInterestController::class, 'create']);
