export enum RouteType {
  BaseToSynthetic = 'baseToSynthetic',
  SyntheticToSynthetic = 'syntheticToSynthetic',
  SyntheticToBase = 'syntheticToBase',
}

export interface Route {
  type: RouteType;
  baseCaip19Id: Caip19Id; // i.e. the underlying 'collateralized' token
  baseRouterAddress: Address;
  originCaip2Id: Caip2Id;
  originRouterAddress: Address;
  originDecimals: number;
  destCaip2Id: Caip2Id;
  destRouterAddress: Address;
  destDecimals: number;
}

export type RoutesMap = Record<Caip2Id, Record<Caip2Id, Route[]>>;
