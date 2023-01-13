import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import DatePicker from "./components/datepicker/DatePicker";
import VoteList from "./components/vote/VoteList";
import Profile from "./components/profile/Profile";
import Profileedit from "./components/profileedit/Profileedit";
import VoteForm from "./components/vote/VoteForm";
import VoteBlank from "./components/vote/VoteBlank";
import Codereview from './components/codereview/Codereview';


function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/calendar" element={<DatePicker />}/>
          <Route path="/review" element={<Codereview/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profileedit" element={<Profileedit/>}/>
          <Route path="/lectures" element={<div>Материалы лекции</div>}/>
          <Route path="/chats" element={<div>Чаты</div>}/>
          <Route path="/votes" element={<VoteList />}/>
          <Route path="/votes/create" element={<VoteForm />}/>
          <Route path="/votes/:id" element={<VoteBlank/>}/>
          <Route path="/pairs" element={<div>Пары</div>}/>
          <Route path="/groups" element={<div>Группы</div>}/>
          <Route path="/groups/:id" element={<div>Пары</div>} />
          <Route path="/wiki" element={<div>Вики</div>}/>
      </Routes>
    </Layout>
  );
}

export default App;
