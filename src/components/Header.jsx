import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

function Header() {
  const { user } = useContext(UserContext);
  console.log(user);
  const navigate = useNavigate();
  const handleLoginPage = () => {
    navigate("/signin");
  };
  const HandleSignOut = async () => {
    await signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        navigate("/");
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="data:image/png;base64,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"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>

      {user.isLogin === false ? (
        <Button className={"md:order-2"} onClick={handleLoginPage}>
          Login
        </Button>
      ) : (
        <div className="flex justify-center items-center gap-2 md:order-2">
           <span className="truncate text-sm font-medium">
                {user.email}
              </span>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={user.photo}
                rounded
              />
            }
          >
            <Dropdown.Header>
            <span className="block text-sm">{user.username}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Link onClick={HandleSignOut}>Sign out</Link>
            </Dropdown.Item>
          </Dropdown>

          <Navbar.Toggle />
        </div>
      )}

      <Navbar.Collapse>
        <Navbar>
          <Link to={"/"}>Home</Link>
        </Navbar>
        <Navbar>
          <Link to={"bestseller"}>Best Seller</Link>
        </Navbar>
        <Navbar>
          <Link to={"products"}>Products</Link>
        </Navbar>
        <Navbar>
          <Link to={"contactus"}>Contact Us</Link>
        </Navbar>
        <Navbar>
          <Link to={"aboutus"}>About Us</Link>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
