<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Todo;

Route::get('/', function () {
    // $todos = App\Todo::all();

    // foreach ($todos as $todo) {
    //     echo $todo->title;
    // }

    return 'Hello world';
    // return view('welcome');
});
