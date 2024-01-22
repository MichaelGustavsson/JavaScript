import { BaseType } from './BaseType';

export interface Movie extends BaseType {
  title: string;
  release_date: string;
  runtime: number;
}
