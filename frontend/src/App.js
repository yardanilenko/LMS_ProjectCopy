import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import DatePicker from "./components/datepicker/DatePicker";
import VoteList from "./components/vote/VoteList";
import Profile from "./components/profile/Profile";
import Profileedit from './components/profileedit/Profileedit';

function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/calendar" element={<DatePicker />}/>
          <Route path="/review" element={<div>Код ревью</div>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profileedit" element={<Profileedit/>}/>
          <Route path="/lectures" element={<div>Материалы лекции</div>}/>
          <Route path="/chats" element={<div>Чаты</div>}/>
          <Route path="/votes" element={<VoteList />}/>
          <Route path="/pairs" element={<div>Пары</div>}/>
          <Route path="/groups" element={<div>Группы</div>}/>
          <Route path="/wiki" element={<div>Вики</div>}/>
      </Routes>
    </Layout>
  );
}

export default App;
