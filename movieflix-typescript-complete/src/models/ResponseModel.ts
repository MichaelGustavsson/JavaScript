import { BaseType } from './BaseType';

export interface ResponseModel {
  page: number;
  total_pages: number;
  total_results: number;
  results: [BaseType];
}
