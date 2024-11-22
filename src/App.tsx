import './App.css'

import MenuButton from './components/menu_button/MenuButton'
import Logo from './components/logo/Logo'

function App() {
  let buttons: string[] = [
    "about",
    "projects",
    "toolset",
    "contact"
  ];

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 pt-10">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="w-full sm:w-auto">
            {buttons.map((button, index) => (
              <div className="mb-4 sm:mb-0">
                <MenuButton key={index} text={button} />
              </div>
            ))}
          </div>
          <div className="w-full sm:w-auto">
            <div className="row-auto">
              <Logo name="Alexandru Bunea" title="Software Developer"/>
            </div>
            <div className="row-auto">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
