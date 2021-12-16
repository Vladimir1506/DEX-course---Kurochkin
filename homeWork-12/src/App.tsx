import "./styles.css";
import { Input } from "../Input";
import { Provider } from "react-redux";
import { store } from "../redux";
import { useSelector } from "react-redux";

const Log = () => {
  const strs = useSelector((state: any) => state.commandsNPaths);

  return strs.map((str: string, index: number) => {
    return <p key={index}>{str}</p>;
  });
};

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Log />
        <Input />
      </div>
    </Provider>
  );
}
