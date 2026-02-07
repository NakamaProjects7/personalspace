<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Timeline;

class TimelineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            [
                'year' => '2005',
                'title' => 'Masa Kecil',
                'description' => 'Awal mula mengenal dunia, belum kenal coding, taunya cuma main.',
                'image' => '/images/timeline-childhood.jpg',
                'sort_order' => 1
            ],
            [
                'year' => '2015',
                'title' => 'Masa SMA',
                'description' => 'Mulai penasaran sama komputer. Sering nongkrong di warnet bukan cuma buat main game, tapi ngulik.',
                'image' => '/images/timeline-sma.jpg',
                'sort_order' => 2
            ],
            [
                'year' => '2016',
                'title' => 'Lomba Kompetensi',
                'description' => 'Nekat ikut lomba kompetensi siswa walau skill masih pas-pasan. Pengalaman berharga banget.',
                'image' => '/images/timeline-lomba.jpg',
                'sort_order' => 3
            ],
            [
                'year' => '2016',
                'title' => 'Juara 2',
                'description' => 'Alhamdulillah, usaha nggak mengkhianati hasil. Pulang bawa piala Juara 2 tingkat regional.',
                'image' => '/images/timeline-juara.jpg',
                'sort_order' => 4
            ],
            [
                'year' => '2019',
                'title' => 'Studi Luar Negeri',
                'description' => 'Dapat kesempatan short course di luar negeri. Membuka mata banget tentang teknologi global.',
                'image' => '/images/timeline-abroad.jpg',
                'sort_order' => 5
            ],
            [
                'year' => '2021',
                'title' => 'Narasumber Telkom',
                'description' => 'Diundang jadi narasumber buat sharing session di Telkom. Deg-degan tapi seru!',
                'image' => '/images/timeline-telkom.jpg',
                'sort_order' => 6
            ],
            [
                'year' => '2023',
                'title' => 'Visit Google',
                'description' => 'Kesampaian main ke kantor Google. Liat langsung budaya kerja startup level dunia.',
                'image' => '/images/timeline-google.jpg',
                'sort_order' => 7
            ],
        ];

        foreach ($items as $item) {
            Timeline::create($item);
        }
    }
}
