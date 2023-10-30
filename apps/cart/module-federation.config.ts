import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cart',
  exposes: {
    './Module': 'apps/cart/src/app/remote-entry/entry.module.ts',
    './Component': 'apps/cart/src/app/remote-entry/entry.component.ts',
  },
};

export default config;
