import whatsappIcon from "./assets/logo/whatsapp.png";

const FloatingWhatsapp = () => {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-30 right-6 z-[9999] group"
    >
      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-green-400 blur-2xl opacity-40 group-hover:opacity-70 transition"></div>

        {/* Pulse */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>

        {/* Button */}
        <div className="relative w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center 
        hover:scale-110 transition-all duration-300 border border-green-200">

          <img
            src={whatsappIcon}
            alt="WhatsApp"
            className="w-10 h-10 object-contain"
          />

        </div>

      </div>
    </a>
  );
};

export default FloatingWhatsapp;