import { auth, googleProvider } from "@/config/firebase";
import { signInWithPopup } from "firebase/auth";
import { toast } from "sonner";

const handleGoogleLogin = async ( navigate ) => {
    console.log(navigate);
  try {
    await signInWithPopup(auth, googleProvider);

    toast.success("Login successful", {
      description: "Signed in with Google!",
      duration: 2000,
    });

    navigate("/");
  } catch (error) {
    toast.error("Google login failed", {
      description: error.message,
    });
  }
};
export default handleGoogleLogin;
