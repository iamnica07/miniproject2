import './App.css';
import Footers from './SkyCast/Footer';
import Contents from './SkyCast/Content';

function App() {
  return (
        <div class="flex flex-col min-h-screen bg-black">
          {/* Na kay jan yung navbar */}
          {/* Content */}
           <Contents />         

          {/* Footer */}
          <Footers />
        </div>
  );
}

export default App;