import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LaporanService {
  constructor() {}

  // **Operasi Data Laporan**

  async saveLaporan(
    judul: string,
    deskripsi: string,
    instansi: string,
    jumlahKomen: number,
    jumlahLike: number,
    gambar: string
  ): Promise<boolean> {
    // Simple static check (replace with secure validation later)
    const data = [judul, deskripsi, instansi, 0, 0, gambar];

    // Dapatkan data laporan yang tersimpan
    let laporanData = JSON.parse(localStorage.getItem('laporan')) || [];

    // Dapatkan ID maksimum
    let maxId = 0;
    laporanData.forEach((item) => {
      if (item[0] > maxId) {
        maxId = item[0];
      }
    });

    // Hitung ID baru
    const newId = maxId + 1;

    // Simpan data dengan ID baru
    laporanData.push([newId, ...data]);

    // Perbarui localStorage
    await localStorage.setItem('laporan', JSON.stringify(laporanData));

    console.log('Laporan disimpan dengan ID:', newId);
    return true;
  }

  getLaporan(): Array<Laporan> {
    // Dapatkan array laporan dari localStorage
    const laporanData = JSON.parse(localStorage.getItem('laporan')) || [];

    // Konversi data menjadi array Laporan
    const laporan: Array<Laporan> = laporanData.map((data) => {
      return {
        id: data[0],
        judul: data[1],
        deskripsi: data[2],
        instansi: data[3],
        jumlahKomen: data[4],
        jumlahLike: data[5],
        gambar: data[6],
      };
    });

    console.log('Laporan diunduh:', laporan);
    return laporan;
  }

  updateLaporan(
    id: number,
    judul: string,
    deskripsi: string,
    instansi: string,
    jumlahKomen: number,
    jumlahLike: number,
    gambar: string
  ): Promise<boolean> {
    // Dapatkan data laporan yang tersimpan
    let laporanData = JSON.parse(localStorage.getItem('laporan')) || [];

    // Temukan laporan yang sesuai dengan id
    const laporanIndex = laporanData.findIndex((laporan) => laporan.id === id);

    console.log('index laporan asli' + laporanData);

    if (laporanIndex !== -1) {
      // Perbarui data laporan
      laporanData[laporanIndex] = [
        id,
        judul,
        deskripsi,
        instansi,
        jumlahKomen,
        jumlahLike,
        gambar,
      ];

      // Perbarui localStorage
      localStorage.setItem('laporan', JSON.stringify(laporanData));

      console.log('Laporan dengan ID:', id, 'diperbarui');
      return Promise.resolve(true);
    } else {
      console.error('Laporan dengan ID:', id, 'tidak ditemukan');
      return Promise.resolve(false);
    }
  }

  deleteLaporan(id: number): Promise<boolean> {
    // Dapatkan data laporan yang tersimpan
    let laporanData = JSON.parse(localStorage.getItem('laporan')) || [];

    // Temukan laporan yang sesuai dengan id
    const laporanIndex = laporanData.findIndex((laporan) => laporan.id === id);

    if (laporanIndex !== -1) {
      // Hapus laporan dari array
      laporanData.splice(laporanIndex, 1);

      // Perbarui localStorage
      localStorage.setItem('laporan', JSON.stringify(laporanData));

      console.log('Laporan dengan ID:', id, 'dihapus');
      return Promise.resolve(true);
    } else {
      console.error('Laporan dengan ID:', id, 'tidak ditemukan');
      return Promise.resolve(false);
    }
  }
}

// Interface untuk tipe data laporan
interface Laporan {
  id: number;
  judul: string;
  deskripsi: string;
  instansi: string;
  jumlahKomen: number;
  jumlahLike: number;
  gambar: string;
}
