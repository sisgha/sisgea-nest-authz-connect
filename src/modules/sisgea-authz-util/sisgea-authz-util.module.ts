import { Module } from '@nestjs/common';
import { SisgeaAuthzClientModule } from '../sisgea-authz-client';
import { SisgeaAuthzUtilService } from './sisgea-authz-util.service';

@Module({
  imports: [
    //
    SisgeaAuthzClientModule,
  ],
  providers: [
    //
    SisgeaAuthzUtilService,
  ],
  exports: [
    //
    SisgeaAuthzUtilService,
  ],
})
export class SisgeaAuthzUtilModule {}
