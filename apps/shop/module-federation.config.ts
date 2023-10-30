import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shop',
  exposes: {
    './Module': 'apps/shop/src/app/remote-entry/entry.module.ts',
    './Component': 'apps/shop/src/app/remote-entry/entry.component.ts',
  },
};

export default config;
