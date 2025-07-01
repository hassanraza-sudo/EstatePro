import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";

const MyProperties = () => {
  const { currentUser } = useAuth();
  const [properties, setProperties] = useState([]);

  const fetchMyProperties = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/properties/my", {
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
        },
      });
      setProperties(res.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchMyProperties();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this property?"))
      return;

    try {
      await axios.delete(`http://localhost:5000/api/properties/${id}`, {
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
        },
      });
      // Remove deleted property from state
      setProperties((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Error deleting property:", error);
      alert("Failed to delete property.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Listed Properties</h2>
      {properties.length === 0 ? (
        <p className="text-gray-500">No properties found.</p>
      ) : (
        <div className="grid gap-4">
          {properties.map((prop) => (
            <div key={prop._id} className="border p-4 rounded-md shadow">
              <h3 className="text-xl font-semibold">{prop.title}</h3>
              <p className="text-gray-600">{prop.city}</p>
              <p className="text-gray-800 font-medium">
                Rs. {prop.price.toLocaleString()}
              </p>
              <Link
                to={`/property/${prop._id}`}
                className="text-blue-500 text-sm hover:underline mt-1 inline-block"
              >
                View Details
              </Link>
              <button
                onClick={() => handleDelete(prop._id)}
                className="ml-4 text-red-600 text-sm hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProperties;
