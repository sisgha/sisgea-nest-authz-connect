import { Provider } from '@nestjs/common';
import { SisgeaAuthzConnect } from '@sisgea/authz-client';
import { Channel } from 'nice-grpc';
import { SisgeaNestAuthzConnectProvidedChannel } from '../../sisgea-nest-authz-connect/tokens';

export const SisgeaAuthzClientProvider: Provider = {
  provide: SisgeaAuthzConnect,

  useFactory: (
    //
    channel: Channel,
  ) => {
    return new SisgeaAuthzConnect(channel);
  },

  inject: [
    //
    SisgeaNestAuthzConnectProvidedChannel,
  ],
};
