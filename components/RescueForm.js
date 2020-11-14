import { useState } from "react";
import { Formik } from "formik";

function FormInput({ type, name, inputLabel }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {inputLabel}
      </label>
      <div className="mt-1 rounded-md shadow-sm">
        {type !== "textarea" ? (
          <input
            id={name}
            type={type}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        ) : (
          <textarea
            id={name}
            required
            rows={3}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        )}
      </div>
    </div>
  );
}

function ButtonClass(peopleCount, buttonCount) {
  if (peopleCount == buttonCount) {
    return "relative inline-flex items-center px-8 py-3 border border-gray-300 bg-indigo-600 text-sm leading-5 font-medium text-white hover:text-white focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150";
  } else {
    return "relative inline-flex items-center px-8 py-3 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150";
  }
}

export default function RescueForm() {
  const [peopleCount, setPeopleCount] = useState(1);

  const initialValues = {
    names: "",
    contact_number: "",
    number_of_people: 1,
    address: "",
    remarks: "",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Fill up the Rescue Form
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <FormInput type="textarea" name="names" inputLabel="Names" />
                </div>

                <div className="mt-4">
                  <FormInput
                    type="text"
                    name="contact_numbers"
                    inputLabel="Contact Number"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    Number of People
                  </label>

                  <span className="relative z-0 mt-2 inline-flex shadow-sm rounded-md">
                    <button
                      type="button"
                      className={`${ButtonClass(peopleCount, 1)} rounded-l-md`}
                      onClick={() => setPeopleCount(1)}
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className={`${ButtonClass(peopleCount, 2)} -ml-px`}
                      onClick={() => setPeopleCount(2)}
                    >
                      2
                    </button>
                    <button
                      type="button"
                      className={`${ButtonClass(peopleCount, 3)} -ml-px`}
                      onClick={() => setPeopleCount(3)}
                    >
                      3
                    </button>
                    <button
                      type="button"
                      className={`${ButtonClass(peopleCount, 4)} -ml-px`}
                      onClick={() => setPeopleCount(4)}
                    >
                      4
                    </button>
                    <button
                      type="button"
                      className={`${ButtonClass(
                        peopleCount,
                        5
                      )} -ml-px rounded-r-md`}
                      onClick={() => setPeopleCount(5)}
                    >
                      5+
                    </button>
                  </span>
                </div>

                <div className="mt-4">
                  <FormInput
                    type="textarea"
                    name="address"
                    inputLabel="Address"
                  />
                </div>

                <div className="mt-4">
                  <FormInput
                    type="textarea"
                    name="remarks"
                    inputLabel="Situation/Remarks"
                  />
                </div>

                <div className="mt-6">
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Sign in
                    </button>
                  </span>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
