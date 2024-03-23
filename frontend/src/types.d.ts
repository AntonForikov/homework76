export interface Message {
  author: string,
  message: string
}

export interface MessageWithIdAndDate extends Message {
  id: string
  dateTime: string
}