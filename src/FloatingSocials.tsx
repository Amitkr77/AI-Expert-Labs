const FloatingSocials = () => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[9999] flex flex-col items-center gap-5">

      {/* INSTAGRAM */}
      <a href="https://instagram.com" target="_blank">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          className="w-6 h-6 hover:scale-125 transition duration-300"
        />
      </a>

      {/* FACEBOOK */}
      <a href="https://facebook.com" target="_blank">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
          className="w-6 h-6 hover:scale-125 transition duration-300"
        />
      </a>

      {/* X */}
     <a href="https://x.com" target="_blank">
  <div className="p-1 rounded-md bg-white/20 backdrop-blur-sm">
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
      className="w-6 h-6 hover:scale-125 transition duration-300 
      drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]"
    />
  </div>
</a>

      {/* LINKEDIN */}
      <a href="https://linkedin.com" target="_blank">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          className="w-6 h-6 hover:scale-125 transition duration-300"
        />
      </a>

      {/* WHATSAPP */}
      <a href="https://wa.me/91XXXXXXXXXX" target="_blank">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          className="w-6 h-6 hover:scale-125 transition duration-300"
        />
      </a>

      {/* LINE */}
      {/* <div className="w-[2px] h-10 bg-gray-400 mt-2"></div> */}

    </div>
  );
};

export default FloatingSocials;