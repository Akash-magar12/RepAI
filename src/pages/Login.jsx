import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/config/firebase";
import handleGoogleLogin from "@/utils/authHelpers";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      // toast("loggedin successfully.");
      toast.success("Logout successful", {
        description: "You have been logged out!",
        action: {
          label: "✖", // Close button
          onClick: () => {}, // does nothing, just closes
        },
      });

      navigate("/");
    } catch (error) {
      toast.error("Login failed", {
        description: error.message,
        action: {
          label: "✖", // or "Close"
          onClick: () => {},
        },
      });
    }
  };

  return (
    <div className="flex justify-center items-center  h-120">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">Login to your account</CardTitle>
          <CardDescription className="text-center">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="*****"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4 ">
              <Button type="submit" className="w-full">
                Signup
              </Button>
              <Button
                onClick={() => handleGoogleLogin(navigate)}
                type="button"
                variant="outline"
                className="w-full"
              >
                Signup with Google
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
