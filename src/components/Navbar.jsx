import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { toast } from "sonner";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logout successful", {
        description: "You have been logged out!",
        action: {
          label: "✖",
          onClick: () => {},
        },
        duration: 2000,
      });
      navigate("/login");
    } catch (err) {
      toast.error("Logout failed", {
        description: err.message,
      });
    }
  };

  if (loading) return null;

  return (
    <nav className="flex  items-center justify-between">
      <Link to="/">
        <h2 className="text-lg font-bold">RepAI</h2>
      </Link>
      <div className="flex gap-4">
        {!user ? (
          <>
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </>
        ) : (
          <Button onClick={handleLogout}>Log Out</Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
