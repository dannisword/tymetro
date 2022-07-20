import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tymetro.ios',
  appName: 'i搭桃捷2.0',
  webDir: 'www',
  bundledWebRuntime: false,
  server: { "allowNavigation": ["*"] }
};

export default config;
