<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PointInterest;

class PointInterestController extends Controller
{
    
    public function index() {
        $pointInterests = PointInterest::all();

        return view('home', ['pointInterests' => $pointInterests]);
    }

    public function create() {
        return view('point-interest.create');
    }

    public function store(Request $request) {
        $point = new PointInterest;

        $point->nome = $request->nome;
        $point->endereco = $request->endereco;
        $point->latitude = $request->latitude;
        $point->longitude = $request->longitude;
        $point->categoria = $request->categoria;

        $point->save();

        return redirect('home');
    }
    
}

