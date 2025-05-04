export interface TodoProps {
  todo: {
    id: string;
    complete: boolean;
    text: string;
  };
  onDelete: () => void;
  toggleComplete: () => void;
}
