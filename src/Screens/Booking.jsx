import { useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Booking = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [selected, setSelected] = useState("rickshaw");

  useEffect(() => {
    console.log(currentUser);
    if (!currentUser) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen w-screen flex relative p-4 pt-20 gap-4">
      <nav className="h-16 w-full bg-blue-500 flex justify-between items-center px-10 absolute top-0 left-0">
        <h1 className="text-3xl text-white font-bold">Cab Booking</h1>
        <button className="text-white text-2xl" onClick={handleLogout}>
          {currentUser?.displayName} Logout
        </button>
      </nav>
      <div className="flex w-1/5 flex-col items-center p-10 border-2 rounded-lg border-gray-300 gap-4">
        <h3 className="text-3xl font-bold">
          Hi {currentUser?.displayName}, Book a Cab
        </h3>
        <div className="flex flex-col w-full">
          <label htmlFor="from" className="text-xl">
            From
          </label>
          <input
            type="text"
            id="from"
            className="border-2 border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="to" className="text-xl">
            To
          </label>
          <input
            type="text"
            id="to"
            className="border-2 border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="flex w-full gap-2 justify-evenly items-start flex-wrap">
          <button
            className={`rounded-lg text-xl w-2/5 border border-slate-500 ${
              selected === "rickshaw" ? "bg-green-400" : null
            }`}
            onClick={() => setSelected("rickshaw")}
          >
            Rickshaw
          </button>
          <button
            className={`rounded-lg text-xl w-2/5 border border-slate-500 ${
              selected === "hatchback" ? "bg-green-400" : null
            }`}
            onClick={() => setSelected("hatchback")}
          >
            Hatchback
          </button>
          <button
            className={`rounded-lg text-xl w-2/5 border border-slate-500 ${
              selected === "sedan" ? "bg-green-400" : null
            }`}
            onClick={() => setSelected("sedan")}
          >
            Sedan
          </button>
          <button
            className={`rounded-lg text-xl w-2/5 border border-slate-500 ${
              selected === "suv" ? "bg-green-400" : null
            }`}
            onClick={() => setSelected("suv")}
          >
            SUV
          </button>
        </div>
        <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-2xl w-full">
          Book
        </button>
      </div>
      <div className="flex w-4/5 flex-col items-center p-10 border-2 rounded-lg border-gray-300 gap-4"></div>
    </div>
  );
};

export default Booking;
