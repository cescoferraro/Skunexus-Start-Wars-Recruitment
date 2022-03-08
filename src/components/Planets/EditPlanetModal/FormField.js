import { TextField } from "./TextField";

export function FormField({ header, name, formik, children }) {
  const value = formik.values[name];
  const itype = header.find((h) => h.name === name)?.type || "string";
  return (
    <TextField
      placeholder={name}
      value={value}
      type={itype}
      onChange={(e) => {
        let value1 = e.target.value;
        console.log(value1);
        formik.setFieldValue(name, value1);
      }}
    >
      {children}
    </TextField>
  );
}
