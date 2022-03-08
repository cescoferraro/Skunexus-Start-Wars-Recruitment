import { TextField } from "./TextField";

export function FormField({ header, name, formik }) {
  const value = formik.values[name];
  const type = header.find((h) => h.name === name)?.type || "string";
  return (
    <TextField
      placeholder={name}
      value={value}
      type={type}
      onChange={(e) => {
        formik.setFieldValue(name, e.target.value);
      }}
    />
  );
}
