import { Module } from '@nestjs/common';
import { SisgeaAuthzClientProvider } from './providers/sisgea-authz-client.provider';

@Module({
  imports: [
    //
  ],
  providers: [
    //
    SisgeaAuthzClientProvider,
  ],
  exports: [
    //
    SisgeaAuthzClientProvider,
  ],
})
export class SisgeaAuthzClientModule {}
