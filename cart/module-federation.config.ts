import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cart',
  exposes: {
    './Module': 'cart/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
