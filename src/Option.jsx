import { components } from "react-select";
import { useDropDownStyles } from "./jss/styles";

export const Option = (props) => {
  const { Option } = components;
  const styles = useDropDownStyles();
  return (
    <Option className={styles.option} {...props}>
      <div
        className={styles.optionCircle}
        style={{ backgroundColor: props.data.color }}
      />
      {props.data.label}
    </Option>
  );
};
