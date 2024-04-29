<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PointInterestController;

Route::get('/points-interest',[PointInterestController::class, 'listAll']);
Route::post('/points-interest', [PointInterestController::class, 'create']);
