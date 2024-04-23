<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('point_interests', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('endereco');
            $table->string('latitude');
            $table->string('longitude');
            $table->integer('categoria');
            $table->timestamps();
        });
        // Adicionar valores à tabela existente
        DB::table('point_interests')->insert([
            [
                'nome' => 'Continente Africano', 
                'endereco' => 'Avenida Nelson Mandela',
                'latitude' => '18.20152429131462', 
                'longitude' => '2.8125', 
                'categoria' => '1'
            ],
            [
                'nome' => 'Shoping Riverside', 
                'endereco' => 'Avenida Raul Lopes', 
                'latitude' => '-4.419439154828944', 
                'longitude' => '-43.06640625000001', 
                'categoria' => '1'
            ],
            [
                'nome' => 'Praia do Futuro', 
                'endereco' => 'Avenida Zeze Diogo, Fortaleza', 
                'latitude' => '-3.1917072644208067', 
                'longitude' => '-38.67187500000001', 
                'categoria' => '1'
            ],
            [
                'nome' => 'UFPE', 
                'endereco' => 'Avenida Universitária', 
                'latitude' => '-7.195367357748827', 
                'longitude' => '-35.04638671875001', 
                'categoria' => '1'
            ],
            [
                'nome' => 'Pizarria de Juazeiro', 
                'endereco' => 'Juazeiro do Norte, 5134', 
                'latitude' => '-6.497260451491004', 
                'longitude' => '-39.55078125', 
                'categoria' => '1'
            ],
            [
                'nome' => 'Cristo Redentor',
                'endereco' => 'Parque Nacional da Tijuca',
                'latitude' => '-22.9519',
                'longitude' => '-43.2105',
                'categoria' => '1',
            ],
            [
                'nome' => 'Parque Nacional dos Lençóis Maranhenses',
                'endereco' => 'Barreirinhas, MA',
                'latitude' => '-2.6053',
                'longitude' => '-42.8521',
                'categoria' => '1',
            ],
            [
                'nome' => 'Pelourinho',
                'endereco' => 'Salvador, BA',
                'latitude' => '-12.9716',
                'longitude' => '-38.5024',
                'categoria' => '2',
            ],
            [
                'nome' => 'Cataratas do Iguaçu',
                'endereco' => 'Foz do Iguaçu, PR',
                'latitude' => '-25.6866',
                'longitude' => '-54.4447',
                'categoria' => '3',
            ],
            [
                'nome' => 'Parque Nacional da Chapada Diamantina',
                'endereco' => 'Palmeiras, BA',
                'latitude' => '-12.8275',
                'longitude' => '-41.4673',
                'categoria' => '4',
            ],
            [
                'nome' => 'Arena da Amazônia',
                'endereco' => 'Manaus, AM',
                'latitude' => '-3.1064',
                'longitude' => '-60.0264',
                'categoria' => '5',
            ],
            [
                'nome' => 'Pão de Açúcar',
                'endereco' => 'Rio de Janeiro, RJ',
                'latitude' => '-22.9519',
                'longitude' => '-43.1658',
                'categoria' => '3',
            ],
            [
                'nome' => 'Lagoa das Sete Cidades',
                'endereco' => 'Piracuruca, PI',
                'latitude' => '-4.3217',
                'longitude' => '-41.6298',
                'categoria' => '2',
            ],
            [
                'nome' => 'Praia de Pipa',
                'endereco' => 'Tibau do Sul, RN',
                'latitude' => '-6.2311',
                'longitude' => '-35.0350',
                'categoria' => '5',
            ],
            [
                'nome' => 'Museu do Amanhã',
                'endereco' => 'Rio de Janeiro, RJ',
                'latitude' => '-22.8957',
                'longitude' => '-43.1816',
                'categoria' => '4',
            ],
            [
                'nome' => 'Orla de Ponta Negra',
                'endereco' => 'Natal, RN',
                'latitude' => '-5.8848',
                'longitude' => '-35.1679',
                'categoria' => '6',
            ],
            [
                'nome' => 'Praia do Rosa',
                'endereco' => 'Imbituba, SC',
                'latitude' => '-28.1628',
                'longitude' => '-48.6545',
                'categoria' => '4',
            ],
            [
                'nome' => 'Parque Estadual do Jalapão',
                'endereco' => 'Mateiros, TO',
                'latitude' => '-11.9775',
                'longitude' => '-46.6361',
                'categoria' => '1',
            ],
            [
                'nome' => 'Vale da Lua',
                'endereco' => 'São Jorge, GO',
                'latitude' => '-14.2479',
                'longitude' => '-47.8025',
                'categoria' => '2',
            ],
            [
                'nome' => 'Porto de Galinhas',
                'endereco' => 'Ipojuca, PE',
                'latitude' => '-8.5395',
                'longitude' => '-34.9980',
                'categoria' => '4',
            ],
            [
                'nome' => 'Pico da Bandeira',
                'endereco' => 'Alto Caparaó, MG/ES',
                'latitude' => '-20.4439',
                'longitude' => '-41.7819',
                'categoria' => '5',
            ],
            [
                'nome' => 'Vale dos Vinhedos',
                'endereco' => 'Bento Gonçalves, RS',
                'latitude' => '-29.1705',
                'longitude' => '-51.4826',
                'categoria' => '6',
            ],
            [
                'nome' => 'Parque Estadual de Vila Velha',
                'endereco' => 'Ponta Grossa, PR',
                'latitude' => '-25.3905',
                'longitude' => '-50.0096',
                'categoria' => '4',
            ],
            [
                'nome' => 'Jardim Botânico de Curitiba',
                'endereco' => 'Curitiba, PR',
                'latitude' => '-25.4390',
                'longitude' => '-49.2374',
                'categoria' => '2',
            ],
            [
                'nome' => 'Dunas de Genipabu',
                'endereco' => 'Extremoz, RN',
                'latitude' => '-5.7105',
                'longitude' => '-35.1815',
                'categoria' => '1',
            ],
            [
                'nome' => 'Torre Eiffel',
                'endereco' => 'Champ de Mars, Paris, França',
                'latitude' => '48.8584',
                'longitude' => '2.2945',
                'categoria' => '2',
            ],
            [
                'nome' => 'Coliseu de Roma',
                'endereco' => 'Piazza del Colosseo, Roma, Itália',
                'latitude' => '41.8902',
                'longitude' => '12.4922',
                'categoria' => '3',
            ],
            [
                'nome' => 'Museu do Louvre',
                'endereco' => 'Rue de Rivoli, Paris, França',
                'latitude' => '48.8606',
                'longitude' => '2.3376',
                'categoria' => '6',
            ],
            [
                'nome' => 'Praça de São Pedro',
                'endereco' => 'Cidade do Vaticano',
                'latitude' => '41.9022',
                'longitude' => '12.4536',
                'categoria' => '5',
            ],
            [
                'nome' => 'Acrópole de Atenas',
                'endereco' => 'Atenas, Grécia',
                'latitude' => '37.9715',
                'longitude' => '23.7261',
                'categoria' => '1',
            ],
            [
                'nome' => 'Palácio de Buckingham',
                'endereco' => 'Londres, Reino Unido',
                'latitude' => '51.5014',
                'longitude' => '-0.1419',
                'categoria' => '4',
            ],
            [
                'nome' => 'Catedral de Notre-Dame de Paris',
                'endereco' => 'Parvis Notre-Dame - Pl. Jean-Paul II, Paris, França',
                'latitude' => '48.8530',
                'longitude' => '2.3499',
                'categoria' => '4',
            ],
            [
                'nome' => 'Basílica de São Marcos',
                'endereco' => 'Piazza San Marco, Veneza, Itália',
                'latitude' => '45.4345',
                'longitude' => '12.3397',
                'categoria' => '6',
            ],
            [
                'nome' => 'Castelo de Neuschwanstein',
                'endereco' => 'Schwangau, Alemanha',
                'latitude' => '47.5576',
                'longitude' => '10.7498',
                'categoria' => '5',
            ],
            [
                'nome' => 'Ponte Charles',
                'endereco' => 'Praga, República Tcheca',
                'latitude' => '50.0865',
                'longitude' => '14.4119',
                'categoria' => '4',
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('point_interests');
    }
};
