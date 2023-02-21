import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import TechnologyTabDivision from './TechnologyTabDivision';
import Introduction from './Introduction';

function App() {
  return (
    <div>
    <NavBar/>
    <div>
    <div>
    <Introduction/>
    </div>
    </div>
    <TechnologyTabDivision/>
    </div>
  );
}

export default App;
