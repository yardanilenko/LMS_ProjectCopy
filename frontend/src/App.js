import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import DatePicker from "./components/datepicker/DatePicker";
import Groups from './pages/Groups/Groups';
import Group from './pages/Group/Group';
import VoteList from "./components/vote/VoteList";
import Profile from "./components/profile/Profile";
import Profileedit from "./components/profileedit/Profileedit";
import VoteForm from "./components/vote/VoteForm";
import Pairs from './pages/Pairs/Pairs';
import GroupsFromPairs from './pages/GroupsFromPairs/GroupsFromPairs';
import VoteBlank from "./components/vote/VoteBlank";
import Codereview from './components/codereview/Codereview';
import PrivateRoutes from "./components/privateRoutes/PrivateRoutes";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import Materials from './components/materials/Materials';
import Materials2 from './components/materials2/Materials2';
import Contacts from './pages/Contacts/Contacts';
import Universalprofile from './components/universalprofile/universalprofile';
import ChatLayout from "../src/pages/chat/ChatLayout";
import Materialslist from './components/materialslist/Materialslist';
import Wiki from './components/wiki/Wiki';



function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route
                path="*"
                element={
                    <PrivateRoutes>
                        <Layout>
                            <Routes>
                                <Route path="/calendar" element={<DatePicker/>}/>
                                <Route path="/review" element={<Codereview/>}/>
                                <Route path="/profile" element={<Profile/>}/>
                                <Route path="profileedit" element={<Profileedit/>}/>
                                <Route path="/lectures" element={<Materials2/>}/>
                                <Route path="/lectures/:id" element={<Materialslist/>}/>
                                <Route path="/chats" element={<ChatLayout />}/>
                                <Route path="/votes" element={<VoteList/>}/>
                                <Route path="/votes/create" element={<VoteForm/>}/>
                                <Route path="/votes/:id" element={<VoteBlank/>}/>
                                <Route path="/pairs" element={<GroupsFromPairs/>}/>
                                <Route path="/pairs/:id" element={<Pairs/>}/>
                                <Route path="/userinfo/:id" element={<Universalprofile/>}/>
                                <Route path="/groups" element={<Groups/>}/>
                                <Route path="/groups/:id" element={<Group/>}/>
                                <Route path="/wiki" element={<Wiki/>}/>
                                <Route path="/contacts" element={<Contacts/>}/>
                                <Route path="/logout" element={<Logout />}/>
                            </Routes>
                        </Layout>
                    </PrivateRoutes>
                }
            />
        </Routes>
    );
}

export default App;
