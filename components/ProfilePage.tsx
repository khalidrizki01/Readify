import React from "react";
import Link from "next/link";

const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-200 p-8 rounded-lg">
        <div className="flex flex-col mb-4">
          <label className="text-lg font-semibold mb-2">Name:</label>
          <span className="w-80 h-12 px-4 rounded border border-gray-300 flex items-center justify-center">
            John Doe
          </span>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-semibold mb-2">Email:</label>
          <span className="w-80 h-12 px-4 rounded border border-gray-300 flex items-center justify-center">
            johndoe@example.com
          </span>
        </div>
        <div className="flex justify-center space-x-4">
        <Link to="/issued">
  <button className="w-40 h-12 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded">
    My Book
  </button>
</Link>
<Link href="/login">
  <button className="w-40 h-12 bg-red-500 hover:bg-red-700 text-white font-semibold rounded">
    Logout
  </button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
