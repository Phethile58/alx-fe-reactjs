import React from "react";

function UserProfile() {
 return (
    <div
      className="
        bg-white rounded-xl shadow-md
        p-4 sm:p-4 md:p-8 
        max-w-xs sm:max-w-xs md:max-w-sm
        text-center
        hover:shadow-xl transition-shadow duration-300 ease-in-out
      "
    >
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="
          rounded-full mx-auto mb-4
          w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36
          object-cover
          transition-transform duration-300 ease-in-out
          hover:scale-110
        "
      />
      <h2
        className="
          text-lg sm:text-lg md:text-xl 
          font-bold text-gray-800
          hover:text-blue-500 transition-colors duration-300
        "
      >
        John Doe
      </h2>
      <p
        className="
          text-sm sm:text-sm md:text-base
          text-gray-600
        "
      >
        Frontend Developer | React Enthusiast  

      </p>
    </div>
  );
 }

 export default UserProfile;