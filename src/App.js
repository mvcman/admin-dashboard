import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/home';

function App() {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="other">
                    <Home />
                </div>
            </div>
        </div>
    );
}

export default App;
