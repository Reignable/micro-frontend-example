import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'about',
  exposes: {
    './Module': 'about/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
