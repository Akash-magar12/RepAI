import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import useUserStore from "@/store/useUserStore";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser, logout, loading } = useUserStore();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, [setUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      logout();
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
  if (loading) {
    return (
      <nav className="flex items-center justify-between p-4 shadow">
        <h2 className="text-lg font-bold">RepAI</h2>
        <p className="text-sm text-gray-500">Loading...</p>
      </nav>
    );
  }
  return (
    <nav className="flex items-center justify-between">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* ✅ use a wrapper div instead of Button to avoid ref error */}
              <div className="cursor-pointer rounded-full">
                <Avatar>
                  <AvatarImage
                    src={user?.photoURL || "https://github.com/shadcn.png"}
                  />
                  <AvatarFallback>
                    {user?.displayName?.[0]?.toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48 bg-white shadow-md rounded-lg">
              <DropdownMenuLabel>
                {user?.displayName || "My Account"}
                <p className="text-xs text-gray-500">{user?.email}</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/settings")}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
