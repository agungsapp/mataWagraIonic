import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'mataWargaIonic',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      // launchAutoHide: true,
      backgroundColor: '#de0f17',
      // androidSplashResourceName: 'splash',
      // androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: 'small',
      iosSpinnerStyle: 'small',
      splashFullscreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
