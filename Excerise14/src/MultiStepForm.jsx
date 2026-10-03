import { useReducer } from "react";
import { MultiUseReducer, initialState } from "./MultiUseReducer";

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(MultiUseReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const nextStep = () => dispatch({ type: "NEXT_STEP" });
  const prevStep = () => dispatch({ type: "PREV_STEP" });
  const resetForm = () => dispatch({ type: "RESET_FORM" });

  const handleSubmit = () => {
    alert("Form submitted successfully!");
    resetForm();
  };

  return (
    <div>
      <h1>Multi-Step Registration</h1>

      {state.step === 1 && (
        <div>
          <h3>Step 1: Profile</h3>

          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
            />
          </label>

          <br />

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
            />
          </label>

          <br />

          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {state.step === 2 && (
        <div>
          <h3>Step 2: Contact</h3>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={state.phone}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Next</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
