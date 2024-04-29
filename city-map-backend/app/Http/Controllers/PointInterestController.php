<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PointInterest;

class PointInterestController extends Controller
{
    
    public function listAll() {
        $pointInterests = PointInterest::all();
        return json_encode($pointInterests);
    }

    public function create(Request $request) {
        $point = new PointInterest;

        $point->nome = $request->nome;
        $point->endereco = $request->endereco;
        $point->latitude = $request->latitude;
        $point->longitude = $request->longitude;
        $point->categoria = $request->categoria;

        $point->save();

        return json_encode($point);
    }
    
}

