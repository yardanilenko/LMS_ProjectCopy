import './App.css';
import {Routes, Route, useParams} from "react-router-dom";
import Layout from "./components/layout/Layout";
import DatePicker from "./components/datepicker/DatePicker";
import Groups from './pages/Groups/Groups';
import Group from './pages/Group/Group';
import VoteList from "./components/vote/VoteList";
import VoteForm from "./components/vote/VoteForm";

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
          <Route path="/votes" element={<VoteList />}/>
          <Route path="/votes/create" element={<VoteForm />}/>
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
