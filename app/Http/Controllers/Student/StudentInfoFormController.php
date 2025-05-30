<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Http\Requests\Student\StudentRegisterRequest;
use App\Models\User;
use Hash;
use Inertia\Response;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\RedirectResponse;


class StudentInfoFormController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('student/student-info-form', [
            'FormPurpose' => 'Register',
        ]);
    }



    public function store(StudentRegisterRequest $request): RedirectResponse
    {
        $request->validated();

        $user = User::create([
            'firstname' => $request->firstname,
            'middlename' => $request->middlename,
            'lastname' => $request->lastname,
            'extension' => $request->extension,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return to_route(route: 'student.register');
    }


    public function edit(): Response
    {
        return Inertia::render('student/student-info-form', [
            'FormPurpose' => 'Update',
        ]);
    }

}
