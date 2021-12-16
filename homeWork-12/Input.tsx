import { useRef } from "react";
import { useSelector } from "react-redux";
import { store } from "./redux";

export const Input = () => {
  let pressCount = 0;
  const inputRef = useRef<HTMLInputElement>(null);
  const currentDir = useSelector(
    (state: any) => state.paths.join("\\") + "\\>"
  );
  const inputs = useSelector((state: any) => state.inputs);
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      switch (event.key) {
        case "Enter": {
          const input = inputRef.current.value;
          const [firstPart, secondPart] = input.trim().split(" ");
          store.dispatch({
            type: firstPart,
            payload: secondPart,
            input: input
          });
          inputRef.current.value = "";
          break;
        }
        case "ArrowUp": {
          inputRef.current.value =
            inputs[inputs.length - ++pressCount] ||
            ((pressCount = inputs.length + 1) && "");

          break;
        }
        case "ArrowDown": {
          inputRef.current.value = inputs[inputs.length - --pressCount] || "";
          pressCount < 0 ? pressCount++ : pressCount;
          break;
        }
      }
    }
  };

  return (
    <div className="ddd">
      <span>{currentDir}</span>
      <input className="input" ref={inputRef} onKeyDown={handleKeyPress} />
    </div>
  );
};
