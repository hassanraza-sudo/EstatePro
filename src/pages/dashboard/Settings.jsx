import React from "react";
import { useAuth } from "../../contexts/AuthContext.jsx";

const Settings = () => {
  const { currentUser, userRole } = useAuth();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Account Settings
      </h1>

      {/* Profile Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 border">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Profile Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={currentUser?.name || ""}
              disabled
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={currentUser?.email || ""}
              disabled
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Role</label>
            <input
              type="text"
              value={userRole || "User"}
              disabled
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700 capitalize"
            />
          </div>
        </div>
      </div>

      {/* Password Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 border">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Security</h2>
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Change Password
          </label>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Update Password
          </button>
        </div>
      </div>

      {/* Notification Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8 border">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Notifications
        </h2>
        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked
              readOnly
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="text-gray-700">
              Email me about property updates
            </span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="text-gray-700">Send push notifications</span>
          </label>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white shadow-md rounded-xl p-6 border border-red-200">
        <h2 className="text-xl font-semibold text-red-600 mb-4">Danger Zone</h2>
        <p className="text-sm text-gray-600 mb-3">
          Once you delete your account, there is no going back.
        </p>
        <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
