import './App.css'

import Menu from './components/menu/Menu'
import Logo from './components/logo/Logo'

function App() {
  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
          <div className="w-full sm:w-auto order-2 lg:order-1">
            <Menu />
          </div>
          <div className="w-full sm:w-auto order-1 lg:order-2">
            <div className="mb-4">
              <Logo name="Alexandru Bunea" title="Software Developer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;