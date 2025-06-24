import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ScrollRestoration } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { Pencil } from "lucide-react";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName,
        photoURL,
      });
      setSuccessMessage("Profile updated successfully!");
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Update failed:", error);
      setSuccessMessage("Failed to update profile.");
      toast.error("Failed to update profile.");
    }
  };

  useEffect(() => {
    document.title = "My Profile | Cratezy";
  }, []);
  return (
    <div className="min-h-screen bg-white text-white px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Card */}
        <div className="bg-white text-black border w-full lg:max-w-sm p-6 rounded-3xl shadow-lg text-center space-y-3 py-7">
          <h1 className="text-2xl font-bold text-indigo-700 text-center mb-10">
            My Profile
          </h1>
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-600 p-1 overflow-hidden">
            <img
              src={photoURL}
              alt="User"
              className="rounded-full object-cover w-full h-full "
            />
          </div>
          <h2 className="text-xl font-bold">{displayName}</h2>

          <p className="text-sm ">Email: {user.email}</p>
        </div>

        {/* Right Editable Form */}
        <div className="bg-white  text-black border w-full p-6 rounded-3xl shadow-lg relative">
          <div className="flex justify-between items-center border-b border-dashed border-gray-600 pb-4 mb-4 py-3">
            <h3 className="text-xl font-semibold text-indigo-700">
              Edit Profile
            </h3>
            <Pencil
              size={22}
              className="text-indigo-700  cursor-pointer"
              onClick={() => setIsEditing(!isEditing)}
            />
          </div>

          {successMessage && (
            <div className="text-green-400 mb-4 text-sm">{successMessage}</div>
          )}

          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="py-3">
              <label className="text-sm  block mb-1">Full Name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-4 py-2  border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 "
                disabled={!isEditing}
              />
            </div>

            <div className="py-3">
              <label className="text-sm  block mb-1">Photo URL</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full px-4 py-2  border text-black  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 "
                disabled={!isEditing}
              />
            </div>

            {isEditing && (
              <button
                type="submit"
                className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-all"
              >
                Save Changes
              </button>
            )}
          </form>
        </div>
      </div>

      <ScrollRestoration />
    </div>
  );
};

export default MyProfile;
