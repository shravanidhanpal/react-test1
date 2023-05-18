import React,{ useEffect, useState} from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{ },[]);
  const addDataHandler = (enteredData) => {
    setData(prevdata => {
      const updatedData=[enteredData,...prevdata];
      localStorage.setItem('storedData',JSON.stringify(updatedData));
      return updatedData;
    });
  };
  const deleteHandler = (deltetedItemId) => {
    setData(prevData => {
      return prevData.filter(item => {
      localStorage.removeItem('storedData');
       return  item.id !== deltetedItemId
      })
  })
};
  const table1Data = data.filter((item) => { return item.tab === 'table-1' });
  const table2Data = data.filter((item) => { return item.tab === "table-2" });
  const table3Data = data.filter((item) => { return item.tab === "table-3" });
  return (
    <React.Fragment>
      <Form addItem={addDataHandler} />
      <List ondelete={deleteHandler} category={'table-1'} listItems={table1Data} />
      <List ondelete={deleteHandler} category={'table-2'} listItems={table2Data} />
      <List ondelete={deleteHandler} category={'table-3'} listItems={table3Data} />
    </React.Fragment>
  );
}
export default App;