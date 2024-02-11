const headerButton =
  "text-sm md:text-base px-8 md:px-7 lg:px-9 py-3 rounded-lg font-medium active:scale-90 duration-500";

function HeaderButtons() {
  return (
    <div className="flex items-center justify-between gap-x-4 pt-2">
      <button className={`${headerButton} text-[#5367FF]`}>Sign in</button>
      <button className={`${headerButton} bg-[#5367FF] text-[#FFFFFF]`}>
        Register
      </button>
    </div>
  );
}

export default HeaderButtons;
