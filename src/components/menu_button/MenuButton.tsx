import './MenuButton.css'

function MenuButton({ text }: { text: string }) {
  return (
    <>
      <button className="menu-button w-full sm:w-[12em] h-[3em] rounded uppercase font-bold text-center 
        p-2 transition-transform duration-500 hover:translate-x-10 my-3 shadow-md">
        {text}
      </button>
    </>
  );
}

export default MenuButton;
