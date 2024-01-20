import { Formik } from 'formik';
import './App.css'

import { useDropDownStyles } from "./jss/styles";
import { MultiSelect } from "./MultiSelect";

export default function App() {
  const styles = useDropDownStyles();

  const options = [
    { label: "Tiger", value: "AG", color: "#BDC3C7" },
    { label: "lion", value: "CH", color: "#1ABC9C" },
    { label: "leopard", value: "OS", color: "#9B59B6" },
    { label: "elephant", value: "AM", color: "#3498DB" },
    { label: "hayena", value: "RE", color: "#2ECC71" },
    { label: "zebra", value: "AV", color: "#ECF0F1" },
    { label: "bull", value: "MA", color: "#E74C3C" }
  ];

  const initialValues = {
    Order: ""
  };

  return (
    <div className={styles.app}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ handleSubmit, setFieldError }) => (
          <>
            <MultiSelect label="Animal order" name="Order" options={options} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1.5rem"
              }}
            >
              <button
                type="submit"
                onClick={handleSubmit}
                style={{ marginRight: "1rem", display: "none" }}
              >
                Submit
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setFieldError("Order", "There was an error");
                }}
                style={{display: "none" }}
              >
                Error
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}
