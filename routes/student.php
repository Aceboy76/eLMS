<?php

use App\Http\Controllers\Student\StudentInfoFormController;





Route::middleware('permission')->group(function () {

    Route::get('student/register', [StudentInfoFormController::class, 'create'])
        ->name('student.register');

    Route::get('student/edit', [StudentInfoFormController::class, 'edit'])
        ->name('student.edit');


    Route::post('student/register', [StudentInfoFormController::class, 'store']);



});
