import { Skill } from "./subcomponents/Skill";

export function SkillList(props) {
  const { data } = props;
  return (
    <ul className="skill-list">
      {data.map((el, i) => {
        return <Skill {...el} key={i} />;
      })}
    </ul>
  );
}
