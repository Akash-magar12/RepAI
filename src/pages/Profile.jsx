import { auth } from "@/config/firebase";

const Profile = () => {
  const user = auth.currentUser;
  console.log(user);
  return <div>Profile</div>;
};

export default Profile;
