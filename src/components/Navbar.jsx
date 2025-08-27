import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex py-2 items-center justify-between">
      <h2 className="text-md font-bold">RepAI</h2>
      <div className="flex gap-4">
        <Button variant="ghost">Login</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
