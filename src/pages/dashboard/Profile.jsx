import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Mail, User, CalendarDays, BadgeCheck, Lock } from "lucide-react";
import toast from "react-hot-toast";

const Profile = () => {
  const { currentUser } = useAuth();

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [updating, setUpdating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = passwordForm;

    if (!currentPassword || !newPassword || !confirmPassword) {
      return toast.error("Please fill in all fields");
    }
    if (newPassword !== confirmPassword) {
      return toast.error("New passwords do not match");
    }
    if (newPassword.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    try {
      setUpdating(true);
      const res = await fetch("http://localhost:5000/api/users/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser?.token}`,
        },
        body: JSON.stringify({ email: currentUser.email, currentPassword, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to change password");

      toast.success("Password updated successfully");
      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setUpdating(false);
    }
  };

  if (!currentUser) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50">
        <h2 className="text-xl text-red-600">No user data available.</h2>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Heading */}
        <div className="flex items-center gap-3">
          <User className="w-8 h-8 text-indigo-600" />
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">My Profile</h2>
        </div>

        {/* User Card */}
        <article className="relative bg-white rounded-2xl shadow-lg ring-1 ring-gray-100 overflow-hidden">
          <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500" />
          <div className="p-6 sm:p-8">
            <header className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-3xl font-bold text-indigo-600">
                {currentUser.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">{currentUser.name}</h3>
                <p className="text-sm capitalize text-gray-500">{currentUser.role}</p>
              </div>
            </header>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-500" />
                <span>{currentUser.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-gray-500" />
                <span className="capitalize">Role: {currentUser.role}</span>
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-gray-500" />
                <span>
                  Joined: {currentUser.createdAt ? new Date(currentUser.createdAt).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : "N/A"}
                </span>
              </li>
            </ul>
          </div>
        </article>

        {/* Password Form */}
        <article className="relative bg-white rounded-2xl shadow-lg ring-1 ring-gray-100 overflow-hidden">
          <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500" />
          <div className="p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Change Password</h3>
            <form onSubmit={handlePasswordUpdate} className="space-y-5">
              {[
                { label: "Current Password", name: "currentPassword" },
                { label: "New Password", name: "newPassword" },
                { label: "Confirm New Password", name: "confirmPassword" },
              ].map(({ label, name }) => (
                <div className="relative" key={name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <Lock className="absolute left-3 top-9 w-4 h-4 text-gray-400" />
                  <input
                    type="password"
                    name={name}
                    value={passwordForm[name]}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
                    placeholder={label}
                    required
                  />
                </div>
              ))}
              <button
                type="submit"
                disabled={updating}
                className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {updating ? "Updating..." : "Update Password"}
              </button>
            </form>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Profile;
