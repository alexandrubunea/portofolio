import './App.css';

import Menu from './components/menu/Menu';
import Logo from './components/logo/Logo';
import Terminal from './components/terminal/Terminal';

function App() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col gap-10 sm:gap-12 md:gap-10">
                <Logo name="Alexandru Bunea" title="Software Developer" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 xl:gap-16 mb-5 md:mb-0">
                    <Menu />
                    <Terminal/>
                </div>
            </div>
        </div>
    );
}

export default App;
