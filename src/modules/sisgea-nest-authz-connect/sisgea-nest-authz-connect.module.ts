import { Module } from '@nestjs/common';
import { SisgeaAuthzUtilModule } from '../sisgea-authz-util';
import { SisgeaAuthzClientModule } from '../sisgea-authz-client';

@Module({
  imports: [
    //
    SisgeaAuthzUtilModule,
    SisgeaAuthzClientModule,
  ],
})
export class SisgeaNestAuthzConnectModule {}
