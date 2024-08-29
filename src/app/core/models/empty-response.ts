import { MessageEnum } from "../enums/message.enum";

export interface EmptyResponse {
  isEmpty: boolean,
  messageType: MessageEnum
}

export const InitEmpty = () => {
  return {
    isEmpty: true,
    messageType: MessageEnum.NO_CONTENT
  } as EmptyResponse;
};
