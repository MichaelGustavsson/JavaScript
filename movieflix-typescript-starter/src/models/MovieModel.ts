import { BaseType } from './BaseType.js';

export interface Movie extends BaseType {
  title: string;
  release_date: string;
  runtime: number;
}
