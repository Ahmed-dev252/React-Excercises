import { useState } from "react";
import './index.css'

const App = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    agreeToTerms: false,
    notifications: false,
  });

  const skillOptions = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "UI Design",
    "API Development",
  ];

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Product Manager",
  ];

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    if (name === "fullName") {
      if (!value.trim()) {
        error = "Full name is required";
      } else if (!/^[a-zA-Z\s]{2,30}$/.test(value)) {
        error = "Please enter a valid name (2-30 characters, letters only)";
      }
    }

    if (name === "email") {
      if (!value) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address";
      }
    }

    if (name === "role") {
      if (!value) {
        error = "Please select a role";
      }
    }

    if (name === "experience") {
      if (!value) {
        error = "Experience is required";
      } else if (isNaN(value) || value < 0 || value > 50) {
        error = "Please enter valid years of experience (0-50)";
      }
    }

    if (name === "skills") {
      if (!value || value.length === 0) {
        error = "Please select at least one skill";
      }
    }

    if (name === "agreeToTerms") {
      if (!value) {
        error = "You must agree to the terms";
      }
    }

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all
    const formErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        formErrors[key] = error;
      }
    });

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formData);

      //successful submissions
    } else {
      setErrors(formErrors);
    }
  };

  const handleSkillChange = (skill) => {
    const newSkills = formData.skills.includes(skill)
      ? formData.skills.filter((s) => s !== skill)
      : [...formData.skills, skill];

    setFormData((prev) => ({
      ...prev,
      skills: newSkills,
    }));

    //  skills Validate 
    const error = validateField("skills", newSkills);
    setErrors((prev) => ({
      ...prev,
      skills: error,
    }));
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Show validation immediately...
    const error = validateField(name, newValue);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <div className="min-h-screen bg-green-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-green-50 rounded-xl shadow-lg p-8 ring-1 ring-zinc-900/5">
        <h1 className="text-2xl font-semibold text-zinc-900 mb-8 text-center">
          Developer Form Application
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* forms */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.fullName
                  ? "border-red-300 ring-red-500"
                  : "border-zinc-300 ring-blue-500"
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            />
            {errors.fullName && (
              <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.email
                  ? "border-red-300 ring-red-500"
                  : "border-zinc-300 ring-blue-500"
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            {/* dropdown */}
            <label className="block text-sm font-medium text-zinc-700">
              Role{" "}
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${
                errors.role
                  ? "border-red-300 ring-red-500"
                  : "border-zinc-300 ring-blue-500"
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            >
              <option value="">Select a role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            {errors.role && (
              <p className="mt-2 text-sm text-red-600">{errors.role}</p>
            )}
          </div>

          {/* years of Expreinces */}
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Years of Experience
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              min="0"
              max="50"
              className={`mt-1 block w-full rounded-lg border ${
                errors.experience
                  ? "border-red-300 ring-red-500"
                  : "border-zinc-300 ring-blue-500"
              } px-3 py-2 text-sm focus:outline-none focus:ring-2`}
            />
            {errors.experience && (
              <p className="mt-2 text-sm text-red-600">{errors.experience}</p>
            )}
          </div>

          {/* Skills Checkboxes */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Skills
            </label>
            <div className="grid grid-cols-2 gap-4">
              {skillOptions.map((skill) => (
                <label key={skill} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.skills.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                    className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-zinc-600">{skill}</span>
                </label>
              ))}
            </div>
            {errors.skills && (
              <p className="mt-2 text-sm text-red-600">{errors.skills}</p>
            )}
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="text-sm text-zinc-900">
              I agree to the terms and conditions
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="mt-2 text-sm text-red-600">{errors.agreeToTerms}</p>
          )}

          {/* Notification Checkbox */}
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
              className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="text-sm text-zinc-600">
              Receive notifications about new opportunities
            </label>
          </div>

          {/* Submiting Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-rose-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
