function UserProfile() {
  return (
    <div className="bg-gray-100 sm:p-4 md:p-8 max-w-xs sm:max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center transition-shadow duration-300 hover:shadow-xl">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 sm:w-36 sm:h-36 mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h1 className="text-lg sm:text-xl text-blue-800 my-4 transition-colors duration-300 hover:text-blue-500">
        John Doe
      </h1>
      <p className="text-sm sm:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
