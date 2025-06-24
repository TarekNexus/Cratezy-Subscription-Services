import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";

const auth = getAuth(app);

const ForgetPassword = () => {
  const location = useLocation();
  const prefilledEmail = location.state?.email || "";
  const [email, setEmail] = useState(prefilledEmail);
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
      // Redirect to Gmail
      window.location.href = "https://mail.google.com";
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md border">
        <h2 className="text-xl font-semibold mb-4 text-center">Reset Your Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
