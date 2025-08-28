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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(auth.currentUser, {
        displayName: data.name,
      });
      toast.success("Signup successful", {
        description: "Your account has been created!",
        action: {
          label: "✖", // Close button
          onClick: () => {}, // no console log, just closes
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
    <div className="flex justify-center items-center mt-12 sm:mt-0 min-h-120 ">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">Signup to your account</CardTitle>
          <CardDescription className="text-center">
            Enter your email below to Signup to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                required
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
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
                  className="ml-auto text-sm underline hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="*****"
                required
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <Button type="submit" className="w-full">
                Signup
              </Button>
              <Button
                type="button"
                onClick={() => handleGoogleLogin(navigate)}
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

export default Signup;
