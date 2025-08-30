import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import useUserStore from "@/store/useUserStore";

const Profile = () => {
  const { user, loading } = useUserStore();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  if (loading) {
    return (
      <p className="text-gray-500 text-center mt-20">Checking session...</p>
    );
  }

  if (!user) {
    return <p className="text-gray-500 text-center mt-20">No user logged in</p>;
  }

  const handleSave = () => {
    console.log("Updated profile:", { name, photo });
    setOpen(false);
  };

  return (
    <div className="flex justify-center items-center my-20">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center border border-gray-100">
        {/* Avatar */}
        <div className="relative flex justify-center">
          <Avatar className="w-28 h-28 ring-4 ring-gray-100 shadow-md">
            <AvatarImage
              src={user.photoURL || "https://github.com/shadcn.png"}
            />
            <AvatarFallback>
              {user.displayName?.[0]?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* User Info */}
        <div className="mt-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            {user.displayName}
          </h1>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        {/* Actions */}
        <div className="mt-6">
          <Dialog open={open} onOpenChange={setOpen}>
            {/* ✅ This is correct usage */}
            <DialogTrigger asChild>
              <Button className="rounded-full px-6">Edit Profile</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-lg font-semibold">
                  Edit Profile
                </DialogTitle>
                <DialogDescription className="text-sm text-gray-500">
                  Update your profile details and save changes.
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col gap-4 py-4">
                <Input
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  placeholder="Photo URL"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="ghost" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>Save</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Profile;
