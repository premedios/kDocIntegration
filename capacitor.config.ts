import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'kdoc.integration',
  appName: 'kdoc-integration',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
