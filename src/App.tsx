import "./App.css";
import { Table } from "./components";



function App() {
  const header = [{ title: "name", value: (row: Record<string, string>) => row?.name }];
  const items = [{ name: "alireza" }];

  return (
    <>
      <Table {...{ header, items }} />
    </>
  );
}

export default App;
