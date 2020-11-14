import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  return (
    <div className="">
      <Head>
        <title>RescueMe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-gray-200 h-screen flex items-center justify-center">
          <div className="max-w-lg mx-auto py-12 px-4 sm:px-6 lg:px-12">
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-8 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-5 pb-4 px-4">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Request sent
                </h3>
                <div className="mt-2 w-56">
                  <p className="text-sm leading-5 text-gray-500">
                    We'll do our best to send your request to the local
                    authorities.
                  </p>
                </div>
                <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  {/* <span class="flex w-full rounded-md shadow-sm sm:col-start-2">
                    <button
                      type="button"
                      class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      Contact Your LGU
                    </button>
                  </span> */}
                  <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:col-start-1">
                    <button
                      type="button"
                      class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      onClick={() => router.push("/")}
                    >
                      Go Back
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}
