
import Home from "./home.js"
import Backproject from "./backproject.js"

import{BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     
        < Router >
     
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path= "backproject" element={<Backproject />} />
           

        </Routes>
       
          
    </Router>
    </div>
  );
}

export default App;
