import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'about',
  exposes: {
    './Module': 'apps/about/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
