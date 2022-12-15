import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const List = ({ groceryList, removeItem, editItem }) => {
  //   console.log(groceryList);
  return (
    <div className="grocery-list">
      {groceryList.map((list) => {
        const { id, grocery } = list;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{grocery}</p>
            <div className="btn-container">
              <button className="edit-btn" onClick={() => editItem(id)}>
                <FaEdit />
              </button>
              <button className="delete-btn" onClick={() => removeItem(id)}>
                <FaTrashAlt />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
