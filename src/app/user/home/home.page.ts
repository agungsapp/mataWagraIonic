import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaporanService } from 'src/app/service/laporan.service';

interface Laporan {
  id: number;
  judul: string;
  deskripsi: string;
  instansi: string;
  jumlahKomen: number;
  jumlahLike: number;
  gambar: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public judul!: string;
  public laporans?: Array<Laporan>;
  constructor(private router: Router, private laporanService: LaporanService) {}

  ngOnInit() {
    this.judul = 'Home' as string;
    // this.laporans = localStorage.getItem('laporan');
    const laporanString = localStorage.getItem('laporan');
    if (laporanString) {
      this.laporans = JSON.parse(laporanString).map((laporan: any[]) => {
        return {
          id: laporan[0],
          judul: laporan[1],
          deskripsi: laporan[2],
          instansi: laporan[3],
          jumlahKomen: laporan[4],
          jumlahLike: laporan[5],
          gambar: laporan[6],
        };
      });
    } else {
      // Penanganan jika data tidak ditemukan di local storage
      this.laporans = [];
    }
    // console.log('laporan fetch ' + this.laporans);
  }

  incrementLike(laporanId: number): void {
    this.laporanService
      .updateLaporan(laporanId, '', '', '', 0, 1, '')
      .then((updated) => {
        if (updated) {
          console.log('Like laporan ID:', laporanId, 'diperbarui');
          // Perbarui data di UI jika diperlukan
        } else {
          console.error('Gagal memperbarui like laporan ID:', laporanId);
        }
      })
      .catch((error) => {
        console.error('Terjadi kesalahan saat memperbarui like:', error);
      });
  }
}
