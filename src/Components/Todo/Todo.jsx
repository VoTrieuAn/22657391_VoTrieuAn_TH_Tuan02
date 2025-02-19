import { useState } from "react";

const data = [
  {
    id: 1,
    content: "Công việc 1",
    status: "initial",
  },
  {
    id: 2,
    content: "Công việc 2",
    status: "initial",
  },
  {
    id: 3,
    content: "Công việc 3",
    status: "doing",
  },
  {
    id: 4,
    content: "Công việc 4",
    status: "completed",
  },
  {
    id: 5,
    content: "Công việc 5",
    status: "rejected",
  },
];

export const Todo = () => {
  const [dataState, setDataState] = useState(data);

  const handleCreate = (event) => {
    event.preventDefault();

    const content = event.target.content.value;

    if (content) {
      setDataState([
        ...dataState,
        {
          id: Date.now(),
          content: content,
          status: "initial"
        }
      ]);

      event.target.content.value = "";
    }
  }

  const handleDelete = (id) => {
    const newDataState = dataState.filter(item => item.id !== id);
    setDataState(newDataState);
  }

  const handleChangeStatus = (event, id) => {
    const status = event.target.value;
    const newDataState = [...dataState];
    const itemUpdate = newDataState.find(item => item.id === id);
    itemUpdate.status = status;
    setDataState(newDataState);
  }

  return (
    <>
      <h2 className="title">Danh Sách Công Việc</h2>
      <div className="todo">
        <form className="todo__create" onSubmit={handleCreate}>
          <input name="content" placeholder="Nhập nội dung..." />
          <button>Tạo</button>
        </form>

        <div className="todo__list">
          {dataState.map(item =>
            <div key={item.id} className={`todo__item todo__item--${item.status}`}>
              <span>
                {item.content}
              </span>
              <span>
                <select
                  defaultValue={item.status}
                  onChange={(event) => handleChangeStatus(event, item.id)}
                >
                  <option value={"initial"}>Khởi tạo</option>
                  <option value={"doing"}>Đang làm</option>
                  <option value={"completed"}>Hoàn thành</option>
                  <option value={"rejected"}>Không hoàn thành</option>
                </select>
                <button onClick={() => handleDelete(item.id)}>Xóa</button>
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}