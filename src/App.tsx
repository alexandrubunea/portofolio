import './App.css'

import Menu from './components/menu/Menu'
import Logo from './components/logo/Logo'

function App() {
  return (
    <>
      <div className="">
        <div className="container mx-auto px-10 py-10">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
              <div className="w-full sm:w-auto order-2 lg:order-1">
                <Menu />
              </div>
              <div className="w-full sm:w-auto order-1 lg:order-2">
                <div className="row-auto">
                  <Logo name="Alexandru Bunea" title="Software Developer"/>
                </div>
                <div className="row-auto">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;