export default function UserProfile() {
  return (
    <div className="mx-auto my-10 max-w-xs md:max-w-sm bg-gray-100 rounded-lg shadow-lg p-4 sm:p-4 md:p-8 text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36"
      />
      <h1 className="text-lg sm:text-lg md:text-xl text-blue-800  my-4 text-center hover:text-blue-500 transition-colors duration-300 ease-in-out">
        John Doe
      </h1>
      <p className="text-sm sm:text-sm md:text-base text-gray-600 text-center">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
 }