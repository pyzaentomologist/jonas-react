import './App.css';
import { Avatar } from "./components/Avatar";
import { Intro } from "./components/Intro";
import { SkillList } from "./components/SkillList";
import { data } from './data/data';

function App() {
  const avatarData = data.imgSrc;
  const introData = { name: data.name, description: data.description };
  const skillListData = data.skillList;

  return (
    <div className="card">
      <Avatar data={avatarData} />
      <div className="data">
        <Intro data={introData} />
        <SkillList data={skillListData} />
      </div>
    </div>
  );
}

export default App;
