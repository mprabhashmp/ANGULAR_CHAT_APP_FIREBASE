export interface Message {
    id: string;
    avatar: string;
    name: string;
    text: string;
    createdAt: any;
    desc: string;
    messages: Message[];
  }
  