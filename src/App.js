import { useState } from "react";
import Input from "./components/InputExpense";
import styles from "./App.module.css";
import List from "./components/LIstExpense";
import Navbar from "./components/Navbar";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";

function App() {
  const [list, setList] = useState([]);
  const [summaryValue, setSummaryValue] = useState(0);
  const [countValue, setCountValue] = useState(0);
  return (
    <div className="App">
      <Navbar />
      <h1 className={styles.size}>
        <span className={styles.eLetter}>E-</span>
        <span className={styles.restLetter}>EXPENSE</span>
      </h1>
      <div className={styles.container}>
        <div className="row">
          <div className="input-field col l12 m12 s12">
            <h3>
              Viewing {countValue} expenses totaling ${summaryValue}
            </h3>
            <div className="input-field col l4 m12 s12">
              <Collapsible accordion popout>
                <CollapsibleItem
                  header="Add expense"
                  icon={<Icon>attach_money</Icon>}
                  node="show"
                >
                  <div className={styles.xd} node="show">
                    <Input list={list} setList={setList} />
                  </div>
                </CollapsibleItem>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>

      <List
        list={list}
        setList={setList}
        setSummaryValue={setSummaryValue}
        setCountValue={setCountValue}
      />
    </div>
  );
}

export default App;
