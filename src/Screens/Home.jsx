import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import HomeImg from "../assets/home.svg";
import { auth } from "../utils/firebase";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      navigate("/booking");
    }
    // eslint-disable-next-line
  }, [currentUser]);

  const handleLogin = async () => {
    if (!currentUser) {
      try {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        if (res.user) {
          navigate("/booking");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log(currentUser);
      navigate("/booking");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className=" h-full w-2/3 flex justify-center items-center bg-gradient-to-r from-yellow-400 to-transparent pl-20">
        <img src={HomeImg} alt="Home" className="w-full" />
      </div>
      <div className="w-1/3 py-20 pr-20 h-full">
        <div className="border-4 border-l-0 h-full border-gray-500 p-4 rounded-lg flex flex-col justify-evenly items-center">
          <h3 className="text-4xl font-bold text-center">
            Welcome to yet another Cab Booking service
          </h3>
          <p className="text-center text-2xl">
            We are a team of highly skilled developers who are committed to
            providing you with the best cab booking service.
          </p>
          <button
            className="bg-blue-500 text-white px-8 py-4 rounded-lg text-2xl"
            onClick={handleLogin}
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
