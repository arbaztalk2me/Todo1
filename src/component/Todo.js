import React, { useState } from "react";
import "../index.css";
function Todo() {
  const [val, setVal] = useState("");
  const [items, setItems] = useState([]);
  const setData = () => {
    if (val === "") {
    } else {
      setItems([val, ...items]);
      setVal("");
    }
  };
  const DeleteItem = (id) => {
    const arr = items.filter((item, index) => {
      return index !== id;
    });
    setItems(arr);
  };
  const DeleteAll = () => {
    setItems([]);
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className=" col-md-6 m-auto">
          <div className="card p-5">
            <img
              src="https://i.ibb.co/KmxZDZm/todoicon.png"
              className="card-img-top m-auto"
              alt="note"
              style={{ width: "5rem" }}
            />
            <div className="card-body">
              <h5 className="card-title text-center pb-2">📝Your Todo</h5>

              <div className="d-flex justify-content-between align-items-center">
                <input
                  className="form-control mb-1"
                  type="text"
                  placeholder="✍ Write Here"
                  value={val}
                  onChange={(e) => {
                    setVal(e.target.value);
                  }}
                />
                <i className="fas fa-plus px-1 pb-2 fs-4" onClick={setData}></i>
              </div>
              <hr className="text-primary" />
              <ul className="list-group mb-3">
                {items.map((element, idx) => (
                  <li
                    className="list-group-item border border-warning mb-2 d-flex justify-content-between"
                    key={idx}
                  >
                    {element}{" "}
                    <i
                      className="fas fa-trash-restore-alt"
                      onClick={() => {
                        DeleteItem(idx);
                      }}
                    ></i>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={DeleteAll}>
                  Delete All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
