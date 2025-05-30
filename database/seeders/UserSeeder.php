<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'firstname' => 'admin',
            'middlename' => 'admin',
            'lastname' => 'admin',
            'extension' => null,
            'email' => 'admin@gmail.com',
            'role_id' => 1,
            'password' => 'admin123',
        ]);

         User::create([
            'firstname' => 'student',
            'middlename' => 'student',
            'lastname' => 'student',
            'extension' => null,
            'email' => 'student@gmail.com',
            'role_id' => 2,
            'password' => 'student123',
        ]);

         User::create([
            'firstname' => 'professor',
            'middlename' => 'professor',
            'lastname' => 'professor',
            'extension' => null,
            'email' => 'professor@gmail.com',
            'role_id' => 3,
            'password' => 'professor123',
        ]);
    }
}
