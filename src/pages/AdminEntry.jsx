import { useEffect } from "react";

const ADMIN_LOGIN_URL = import.meta.env.VITE_ADMIN_LOGIN_URL || "http://localhost:3000/admin/login";

const AdminEntry = () => {
  useEffect(() => {
    window.location.replace(ADMIN_LOGIN_URL);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff4dc] px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg text-center">
        <h1 className="text-2xl font-secondary text-[#913c07] mb-2">Redirecting to Admin Login</h1>
        <p className="text-secondary mb-6">
          If redirect does not happen automatically, click the button below.
        </p>

        <a
          href={ADMIN_LOGIN_URL}
          className="inline-flex items-center justify-center rounded-md bg-[#913c07] px-5 py-2.5 text-white hover:bg-[#7a3105] transition-colors"
        >
          Open Admin Login
        </a>
      </div>
    </div>
  );
};

export default AdminEntry;
