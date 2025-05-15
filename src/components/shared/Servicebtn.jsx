const Servicebtn = ({ icon, label, onClick, isSelected }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 p-3 border rounded-md ${
        isSelected ? "bg-[#09B5FF] text-white" : "bg-[#F3F3F4] text-black"
      }`}
    >
      <div>{icon}</div>
      <div className="text-sm">{label}</div>
    </button>
  );
};

export default Servicebtn;
