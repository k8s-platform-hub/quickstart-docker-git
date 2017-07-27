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
    $todos = Todo::all();
    echo '<h3>Hello Laravel!</h3>';
    if ($todos->count()) {
        echo 'A list of all the todos:<br/>';
        echo '<ul>';
        foreach ($todos as $todo) {
            echo '<li>'.$todo->title.'</li>';
        }
        echo '</ul>';
        return;
    }
    return "Go to /insert/{title} to insert a todo with a title.";
});

Route::get('/insert/{title}', function ($title) {
    $todo = new Todo;
    $todo->title = $title;
    $todo->user_id = 1;
    $todo->save();
    return 'Added a todo: '.$title;
    // return view('welcome');
});
