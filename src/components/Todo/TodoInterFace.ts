export interface TodoProps {
  todo: {
    text: string;
  };
  onDelete: () => void;
}
