import { createUseStyles } from "react-jss";

export const useDropDownStyles = createUseStyles({
  app: {
    background:
      "linear-gradient(183deg, rgba(210,211,217,0.3) 0%, rgba(212,222,255,0.3) 100%)",
    padding: "1rem 2rem",
    height: "100%"
  },
  label: {
    fontSize: ".8rem"
  },
  errors: {
    fontSize: ".8rem",
    color: "#FA541C"
  }
});
