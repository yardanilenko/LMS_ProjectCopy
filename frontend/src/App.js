import './App.css';
import {Routes, Route, useParams} from "react-router-dom";
import Layout from "./components/layout/Layout";
import DatePicker from "./components/datepicker/DatePicker";
import Groups from './pages/Groups/Groups';
import Group from './pages/Group/Group';

function App() {
  let { id } = useParams();
  return (
    <Layout>
      <Routes>
          <Route path="/calendar" element={<DatePicker />}/>
          <Route path="/review" element={<div>Код ревью</div>}/>
          <Route path="/profile" element={<div>Профиль</div>}/>
          <Route path="/lectures" element={<div>Материалы лекции</div>}/>
          <Route path="/chats" element={<div>Чаты</div>}/>
          <Route path="/votes" element={<div>Голосования</div>}/>
          <Route path="/pairs" element={<div>Пары</div>}/>
          <Route path="/groups" element={<Groups/>}/>
          <Route path="/groups">
          <Route path=":id" element={<Group/>}/>
          </Route>
          <Route path="/wiki" element={<div>Вики</div>}/>
      </Routes>
    </Layout>
  );
}

export default App;
