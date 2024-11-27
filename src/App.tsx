import './App.css'

import Menu from './components/menu/Menu'
import Logo from './components/logo/Logo'
import Terminal from './components/terminal/Terminal'

function App() {
  return (
    <>
      {/*<div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
          <div className="grid grid-cols-2 w-full sm:w-auto order-3 lg:order-1">
            <div className="col">
              <Menu />
            </div>
            <div className="col">
              <Terminal />
            </div>
          </div>
          <div className="w-full sm:w-auto order-1 lg:order-3">
            <div className="mb-4">
              <Logo name="Alexandru Bunea" title="Software Developer" />
            </div>
          </div>
        </div>
      </div>*/}

      <div className="container mx-auto">
        <div className="flex flex-col gap-5">
            <Logo name="Alexandru Bunea" title="Software Developer" />
          <div className="grid grid-flow-row grid-rows-max md:grid-flow-col md:auto-cols-max gap-10 md:gap-35 xl:gap-56 mx-auto">
            <Menu />
            <Terminal />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;