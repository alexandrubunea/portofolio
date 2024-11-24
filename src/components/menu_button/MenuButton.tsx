import './MenuButton.css'

function MenuButton({ text }: { text: string }) {
  return (
    <>
      <button className="menu-button w-[10em] lg:w-[12em] h-[3em] rounded uppercase font-bold text-center 
        p-2 transition-all duration-500 my-3">
        {text}
      </button>
    </>
  );
}

export default MenuButton;
