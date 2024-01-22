import { BaseType } from './BaseType';

export interface TV extends BaseType {
  name: string;
  first_air_date: string;
  number_of_seasons: number;
}
