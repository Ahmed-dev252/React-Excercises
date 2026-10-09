import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log( "Selected: "+selectedOption);
    console.log(  "isChecked: " + isChecked     );

  };

  return (
    <>
      <h1>Form with Multiple Inputs</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Fadlan dooro labadaan option:
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>

        <label>
          Cashirka ma dhamaysay:
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
