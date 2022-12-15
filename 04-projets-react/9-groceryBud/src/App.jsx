import { useState, useEffect } from "react";
// import { FaIndent } from "react-icons/fa";
import Alert from "./alert";
import List from "./List";

function App() {
  const [groceryList, setGroceryList] = useState([]);
  const [grocery, setGrocery] = useState("");
  //! const [list, setList] = useState(getLocalStorage()); ne pas l'utiliser
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });

  //! pour l'afficher
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing === true && grocery) {
      const edit = groceryList.map((el) => {
        if (editId === el.id) {
          return { ...el, grocery };
        } else {
          return el;
        }
      });
      setGroceryList(edit);
      showAlert(true, "alert-success", "item modifier");
      setGrocery("");
      setEditId(null);
      setIsEditing(false);
    } else if (grocery) {
      const newList = {
        id: new Date().getTime().toString(),
        grocery: grocery,
      };
      setGroceryList([...groceryList, newList]);
      showAlert(true, "alert-success", "item ajouter");
      setGrocery("");
    }
  };
  //! pour clear toute la liste
  const clearList = () => {
    setGroceryList([]);
    showAlert(true, "alert-danger", "list clear");
  };
  //! pour clear juste un seul item
  const removeItem = (id) => {
    const delGrocery = groceryList.filter((del) => del.id !== id);
    setGroceryList([...delGrocery]);
    showAlert(true, "alert-success", "item enlever");
  };
  //! pour afficher l'alerte
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ ...alert, show, type, msg });
  };
  //! pour le edit
  const editItem = (id) => {
    setIsEditing(true);
    setEditId(id);
    const idItem = groceryList.find((value) => value.id === id);
    setGrocery(idItem.grocery);
  };

  // const getLocalStorage = () => {};

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            name="grocery"
            id="grocery"
            className="grocery"
            value={grocery}
            onChange={(e) => setGrocery(e.target.value)}
          />
          <button className="submit-btn">add</button>
        </div>
      </form>
      <div className="grocery-container">
        <List
          groceryList={groceryList}
          removeItem={removeItem}
          editItem={editItem}
        />
        {groceryList.length === 0 || (
          <button className="clear-btn" onClick={clearList}>
            clear All
          </button>
        )}
      </div>
    </section>
  );
}

export default App;
