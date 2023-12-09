import Input from "./common/Input";

type ImportanceProps = {
  cruciality: { checked: boolean; type: string }[];
  onCheck: (time: { checked: boolean; type: string }) => void;
};

export type typeC = Pick<ImportanceProps, "cruciality">;



function Importance({ cruciality, onCheck }: ImportanceProps) {
  return (
    <div>
      <ul>
        {cruciality.map((time) => (
          <li>
            {time.type}
            <Input
              onChange={() => onCheck(time)}
              type="radio"
              value={time.type}
              checked={time.checked}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Importance;
