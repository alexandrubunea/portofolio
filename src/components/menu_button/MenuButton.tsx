import './MenuButton.css'

function MenuButton({ text }: { text: string }) {
  return (
    <>
      <button className="menu-button w-[15em] lg:w-[12em] h-[3em] text-xl lg:text-3xl rounded uppercase font-bold text-center 
        p-2 transition-all duration-500 hover:-translate-y-2 lg:hover:translate-x-10 lg:hover:translate-y-0">
        {text}
      </button>
    </>
  );
}

export default MenuButton;
