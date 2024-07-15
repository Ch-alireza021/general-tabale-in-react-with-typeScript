import "./App.css";
import { CTable } from "./components";



function App() {
  const header = [{ title: "name", value: (row: Record<string, string>) => row?.name }
    ,{ title: "last name", value: (row: Record<string, string>) => row?.lName }
  ];
  const items = [{ name: "alireza",lName:'chizi' },{ name: "majid",lName:'mizi' }];

  return (
    <div style={{display:"flex",justifyContent:'center'}}>
      <CTable {...{ header, items }} />
    </div>
  );
}

export default App;
