<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->group(function () {
Route::get('/home', 'HomeController@index');
});


Route::post('login', [ 'as' => 'login', 'uses' => 'AuthController@login']);
// register
Route::post('register', 'AuthController@register');
// verify token
Route::get('me', 'AuthController@me');
// logout route
Route::get('logout', 'AuthController@logout');
// refresh token
Route::get('refresh', 'AuthController@refresh');

