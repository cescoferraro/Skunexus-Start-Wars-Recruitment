import { Input, InputGroup, InputGroupText } from "reactstrap";

export function TextField({ children, type, placeholder, value, onChange }) {
  return (
    <InputGroup>
      <InputGroupText>{placeholder}</InputGroupText>
      <Input
        multiple={type === "select"}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      >
        {children}
      </Input>
    </InputGroup>
  );
}
