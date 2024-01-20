import { components } from "react-select";
import { useDropDownStyles } from "./jss/styles";

export const MultiValue = ({ children, ...props }) => {
  const {
    MultiValue,
    MultiValueContainer,
    MultiValueLabel,
    MultiValueRemove
  } = components;
  const styles = useDropDownStyles();
  return (
    <MultiValue {...props}>
      <MultiValueContainer className="pill" {...props}>
        <div
          style={{ backgroundColor: props.data.color, color: "white" }}
          className={styles.multiValueContainer}
        >
          <MultiValueLabel className={styles.multiValueLabel} {...props}>
            {props.data.label}
          </MultiValueLabel>
          <MultiValueRemove className={styles.multiValueRemove} {...props}>
            <div style={{display: "none"}}>X</div>
          </MultiValueRemove>
        </div>
      </MultiValueContainer>
    </MultiValue>
  );
};
