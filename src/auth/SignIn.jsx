import { useNavigate } from "react-router-dom";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const HandleSignIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User successfully Sign In")
    navigate("/");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
  };

  const HandleWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleSignUpPage = () => {
    navigate("/signup");
  };
  return (
    <div className="flex flex-col justify-center items-center py-24 sm:px-3">
      <Card className="w-96">
        <form onSubmit={HandleSignIn} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@gmail.com"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password"
             value={password}
             onChange={(e)=>{setPassword(e.target.value)}}
            required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <div className="flex flex-col items-center gap-0">
            <Button type="submit" className={"w-full"}>
              Submit
            </Button>
          </div>
        </form>
   
      <div className="flex flex-col items-center mt-0 pt-0">
        <p className={"text-center mb-2"}>Or</p>
        <Button onClick={HandleWithGoogle} className={"w-full"}>
          Login with Google
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Label htmlFor="notRegister">Not have an account? </Label>
        <p
          onClick={handleSignUpPage}
          className="text-blue-500 underline cursor-pointer hover:text-blue-800"
        >
          Sign Up
        </p>
      </div>
      </Card>
    </div>
  );
}

export default SignIn;
