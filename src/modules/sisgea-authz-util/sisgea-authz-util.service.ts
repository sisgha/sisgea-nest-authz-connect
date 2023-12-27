import { Inject, Injectable } from '@nestjs/common';
import { GenericCanRequest, SisgeaAuthzConnect, UserCanRequest } from '@sisgea/authz-client';

@Injectable()
export class SisgeaAuthzUtilService {
  constructor(
    //
    @Inject(SisgeaAuthzConnect)
    readonly sisgeaAuthzConnect: SisgeaAuthzConnect,
  ) {}

  //

  async getCheckServiceClient() {
    await this.sisgeaAuthzConnect.connect();
    return this.sisgeaAuthzConnect.checkerClient;
  }

  //

  async checkInternalSystemCan(canRequest: GenericCanRequest) {
    const checkServiceClient = await this.getCheckServiceClient();
    const { can } = await checkServiceClient.internalSystemCan(canRequest);
    return can;
  }

  async checkAnonymousCan(canRequest: GenericCanRequest) {
    const checkServiceClient = await this.getCheckServiceClient();
    const { can } = await checkServiceClient.anonymousCan(canRequest);
    return can;
  }

  async checkUserCan(canRequest: UserCanRequest) {
    const checkServiceClient = await this.getCheckServiceClient();
    const { can } = await checkServiceClient.userCan(canRequest);
    return can;
  }
}
