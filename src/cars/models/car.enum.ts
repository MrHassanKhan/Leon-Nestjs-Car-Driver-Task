import { registerEnumType } from '@nestjs/graphql';

export enum CarStatus {
  Active,
  Available,
  InActive,
}
registerEnumType(CarStatus, {
  name: 'CarStatus',
});
