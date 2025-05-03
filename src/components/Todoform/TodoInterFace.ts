export interface TodoFormProps {
  todos: { id: string; text: string; complete: boolean }[];
  onSubmit: (todo: { id: string; text: string; complete: boolean }) => void;
}
