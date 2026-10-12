import { useForm } from "react-hook-form";
import "./index.css";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (date) => {
    console.log( "form Submited: ",+ date );
    alert("Registration successful!" );
  };

  return (
    <div className="min-h-screen bg-green-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-green-50 rounded-xl shadow-lg p-8 ring-1 ring-zinc-900/5">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-semibold text-zinc-900 mb-8 text-center">
            Student Registration
          </h1>

          <div className="space-y-4">
            <label className="block text-sm font-medium mb-1">
              {" "}
              Student Name
            </label>
            <input
              {...register("studentName", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              className=" w-full p-2 border rounded focus:outline-none focus:ring-2 w-full p-2 border-blue-300 rounded "
            />
            {/* message */}

            {errors.studentName && (
              <p className="text-red-500 text-sm ">
                {errors.studentName.message}
              </p>
            )}
          </div>

          <div>
            <label> Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className=" w-full p-2 border rounded focus:outline-none focus:ring-2 w-full p-2 border-blue-300 rounded "
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {" "}
              Grade Level
            </label>
            <select
              {...register("gradeLevel", {
                required: "Please select a grade",
              })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Grade</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>
          {errors.gradeLevel && (
            <p className="text-red-500 text-sm mt-1">
              {errors.gradeLevel.message}
            </p>
          )}

          {/* intrest box */}

          <div>
            <label className="block text-sm font-medium mb-2"> Subject Intrest</label>

            <div className="space-y-2">

              <label className="flex items-center">
                <input
                  type="checkBox"
                  {...register("subjects", {
                    required: "Select at least one subject",
                  })}
                  value="math"
                  className="mr-2"
                />
                Mathematics
              </label>

              

              <label className="flex items-center">
                <input  type="checkbox"
                {...register('subjects')}
                value="biology"
                className="mr-2" />
                Biology
              </label>


              <label className="flex items-center">
                <input  type="checkbox"
                {...register('subjects')}
                value="somaali"
                className="mr-2" />
                soomaali
              </label>

              <label className="flex items-center">
                <input  type="checkbox"
                {...register('subjects')}
                value="english"
                className="mr-2" />
                English
              </label>
            </div>
            {errors.subjects && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subjects.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-rose-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2  my-5"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
