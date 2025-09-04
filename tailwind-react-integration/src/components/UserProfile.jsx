export default function UserProfile() {
  return (
    <div className="mx-auto my-10 max-w-xs md:max-w-sm bg-gray-100 rounded-lg shadow-lg p-4 sm:p-4 md:p-8 text-center">
      {/* Responsive Profile Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="mx-auto rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36"
      />

      {/* Responsive Heading */}
      <h1 className="my-4 text-lg sm:text-lg md:text-xl text-blue-800 font-semibold">
        John Doe
      </h1>

      {/* Responsive Paragraph */}
      <p className="text-sm md:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
 }
