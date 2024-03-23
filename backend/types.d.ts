
export interface Message {
  message: string,
  author: string,
}

export interface MessageWithIdAndDate extends Message {
  id: string,
  date: Date
}
