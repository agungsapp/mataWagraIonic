import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // loginForm: FormGroup;

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
      ],
    ],
  });

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  async onLogin(): Promise<boolean> {
    // ... content of your onLogin function

    const auth = await this.authService.loginUser(
      this.loginForm.value.username,
      this.loginForm.value.password
    );

    if (auth) {
      return this.router.navigate(['/home']); // Success
    } else {
      await this.presentToast('Password atau username salah');
      return false; // Failure
    }
  }

  // Fungsi untuk menampilkan toast
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Durasi tampilan toast dalam milidetik
      position: 'bottom', // Posisi toast
    });
    toast.present(); // Tampilkan toast
  }
}
