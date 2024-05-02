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
  regForm: FormGroup;

  // username: string = '';
  // password: string = '';

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private authService: AuthenticationService,
    private router: Router,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
        ],
      ],
    });
  }

  get errorControl() {
    return this.regForm?.controls;
  }

  async onLogin() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    if (this.regForm?.valid) {
      // const user = await this.authService.loginUser(username, password);
    }

    // const success = await this.authService.loginUser(
    //   this.username,
    //   this.password
    // );

    // if (success) {
    //   this.router.navigate(['/home']);
    // } else {
    //   // Display an error message
    //   console.error('Invalid credentials');
    // }
  }
}
