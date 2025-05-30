<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Course::create([
            'code' => 'BSIT',
            'name' => 'Bachelor Of Science In Information Technology',
            'units' => 150,
            'duration_years' => 4,
        ]);
    }
}
