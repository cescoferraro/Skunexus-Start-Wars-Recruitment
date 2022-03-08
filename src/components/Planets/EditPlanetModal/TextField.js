import { Input, InputGroup, InputGroupText } from "reactstrap";

export function TextField({ type, placeholder, value, onChange }) {
  return (
    <InputGroup>
      <InputGroupText>{placeholder}</InputGroupText>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputGroup>
  );
}
