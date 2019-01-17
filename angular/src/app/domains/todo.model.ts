export interface Todo {
  id: number | null;
  text: string;
  done: boolean;
}

export interface TodoStatus {
  doneCount: number;
  totalCount: number;
}