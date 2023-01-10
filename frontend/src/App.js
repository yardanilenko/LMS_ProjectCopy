import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/registration" element={<div>Календарь</div>}/>
      </Routes>
    </Layout>
  );
}

export default App;
