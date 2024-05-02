import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LaporanService } from 'src/app/service/laporan.service';

@Component({
  selector: 'app-laporan',
  templateUrl: './laporan.page.html',
  styleUrls: ['./laporan.page.scss'],
})
export class LaporanPage implements OnInit {
  public judul!: string;

  instansiData = [
    { id: '1', nama: 'Pemkot' },
    { id: '2', nama: 'PLN' },
    { id: '3', nama: 'PDAM' },
    { id: '4', nama: 'Polisi' },
    { id: '5', nama: 'Tidak tahu' },
  ];

  laporanForm = this.formBuilder.group({
    judul: '',
    deskripsi: '',
    instansi: '',
    jumlahKomen: 0,
    jumlahLike: 0,
    gambar: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private laporanService: LaporanService,
    private router: Router
  ) {}

  ngOnInit() {
    this.judul = 'Laporan' as string;
  }

  onSubmit(): void {
    // Process checkout data here
    // console.warn('Your order has been submitted', this.laporanForm.value);

    const save = this.laporanService.saveLaporan(
      this.laporanForm.value.judul.toUpperCase(),
      this.laporanForm.value.deskripsi,
      this.laporanForm.value.instansi,
      this.laporanForm.value.jumlahKomen,
      this.laporanForm.value.jumlahLike,
      this.laporanForm.value.gambar
    );

    this.laporanForm.reset();
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  }
}
