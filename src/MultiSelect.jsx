import { useField } from "formik";
import Select from "react-select";
import { useDropDownStyles } from "./jss/styles";
import { MultiValue } from "./MultiValue";
import { Option } from "./Option";

export const MultiSelect = ({ name, label, options }) => {
  const [field, meta, helpers] = useField(name);
  const styles = useDropDownStyles();
  return (
    <>
      <label className={styles.label}>{label}</label>

      <Select
        options={options}
        onChange={(selection) => {
          helpers.setValue(selection);
        }}
        styles={{
          control: (base) => ({ ...base, ...styles.control })
        }}
        name={field.name}
        isMulti
        components={{
          Option: Option,
          MultiValue: MultiValue
        }}
      />

      {meta?.error && <span className={styles.errors}>{meta.error}</span>}
    </>
  );
};
