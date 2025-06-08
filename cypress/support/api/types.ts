export interface User {
  userId?: string;
  userName: string;
  lastName: string;
  email: string;
  subjects: string[];
  current_address: string;
  permanent_address: string;
  age: string;
  salary: string;
  department: string;
  mobile: string;
  date_of_birth: Date;
  genre: string;
  hobbies_list: string[];
  state: string;
  city: string;
  password: string;
  user_subjects: string[];
}

export interface Book {
  isbn: string;
  title: string;
  subTitle: string;
  author: string;
  publish_date: string;
  publisher: string;
  pages: number;
  description: string;
  website: string;
}

export interface TokenResponse {
  token: string;
  expires: string;
  status: string;
  result: string;
}

export interface BooksResponse {
  books: Book[];
}

export interface ApiHeaders {
  accept: string;
  'Content-Type': string;
  Authorization?: string;
}
