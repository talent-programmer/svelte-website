type Field = {
  el: HTMLInputElement | HTMLTextAreaElement;
  valid: boolean;
  value?: string;
  checked?: boolean;
};

export type Form = {
  [fieldName: string]: Field;
};
