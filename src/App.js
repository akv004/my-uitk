import "./styles.css";
import Card from "./Card";

const theme = {
  colorBackgroundLayout: "#E7E9F1",
  dropShadowCard: "1px 0 12px 0 rgba(0, 0, 0, 0.5)"
};
export default function App() {
  return (
    <div className="App">
      <Card header={`abc`} theme={theme} />
    </div>
  );
}
