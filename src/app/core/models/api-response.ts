import { ResponseEnum } from "../enums/response.enum";

export class ApiResponse {
  status: ResponseEnum = ResponseEnum.DEFAULT;
  message: string = '';
  data: any;

  constructor(status: ResponseEnum, data: any) {
    this.data = data;
    this.status = status;
  }
}
