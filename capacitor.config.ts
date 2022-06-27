import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tymetro.ios',
  appName: 'tymetro',
  webDir: 'www',
  bundledWebRuntime: false,
  server: { "allowNavigation": ["*"] }
};

export default config;
