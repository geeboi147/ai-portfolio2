
const ProfilePicture = () => {
  return (
    <div className="relative group">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-300">
        <img 
          src="seyi.png"
          alt="Oluwaseyi - AI Developer"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to a default avatar if image fails to load
            e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDMTE2LjU2OSA3MCAxMzAgODMuNDMxNSAxMzAgMTAwQzEzMCAxMTYuNTY5IDExNi41NjkgMTMwIDEwMCAxMzBDODMuNDMxNSAxMzAgNzAgMTE2LjU2OSA3MCAxMDBDNzAgODMuNDMxNSA4My40MzE1IDcwIDEwMCA3MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTEwMCAxNDBDMTI3LjYxNCAxNDAgMTUwIDE1NS44MTcgMTUwIDE3NVYyMDBIMTAwSDUwVjE3NUM1MCAxNTUuODE3IDcyLjM4NTggMTQwIDEwMCAxNDBaIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPg==";
          }}
        />
      </div>
      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
    </div>
  );
};

export default ProfilePicture;
