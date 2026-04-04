import { Link } from "react-router-dom";
import robot from "./assets/logo/bot.png";

const FloatingGini = () => {
  return (
    <Link
      to="/hellogini"
      className="fixed bottom-10 right-6 z-[9999] p-2 hover:scale-110 transition-all duration-300"
    >
      <img
        src={robot}
        alt="AI Bot"
        className="w-14 h-14 object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]"
      />
    </Link>
  );
};

export default FloatingGini;