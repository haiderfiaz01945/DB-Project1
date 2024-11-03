import React from 'react';
import { Link } from 'react-router-dom';
 
function DBLab() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
       {/* Background shapes */}
      {/* Background shapes */}
      <div  
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#201E43] to-[#134B70] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#508C9B] to-[#EEEEEE] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(40% 0%, 100% 60%, 60% 100%, 0% 60%)',
          }}
          className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[50rem] -translate-x-1/2 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] opacity-30"
        />
      </div>
      <h1 className="text-4xl font-extrabold mb-10 tracking-wide shadow-md p-2 rounded-lg text-primary">
        DB Lab Tasks
      </h1>

      <div className="space-y-6 w-full max-w-2xl">
        {/* Header Container for View Solution and Questions */}
        <div className="hidden md:flex justify-between items-center mb-4 bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-2xl font-semibold text-primary">View Solution</h2>
          <h2 className="text-2xl font-semibold text-primary">Questions</h2>
        </div>

        {/* Combined View Solution and Download PDF Section */}
        {[1, 2, 3, 4, 5, 6].map((task) => (
          <div
            key={task}
            className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-lg space-y-4 sm:space-y-0 sm:space-x-6"
          >
            {/* View Solution Button */}
            <Link
              to={`/Lab-Task-${task}`}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primaryDark text-white font-semibold text-lg text-center shadow-md hover:bg-primaryDark hover:scale-105 transform transition-transform duration-300"
            >
              Lab Task {task}
            </Link>

            {/* Download PDF Button */}
            <a
              href={`/assets/DbLab${task}.pdf`}
              download={`DbLab${task}.pdf`}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primaryDark text-white font-semibold text-lg text-center shadow-md hover:bg-primaryDark hover:scale-105 transform transition-transform duration-300"
            >
              Download PDFF
            </a>
          </div>
        ))}
      </div>
     </div>
  );
}

export default DBLab;
