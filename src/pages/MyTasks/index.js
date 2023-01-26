import { useEffect, useState } from "react";
import api from "../../services/api";

function MyTask() {
  const [lists, setLists] = useState();
  const getList = () => {
    try {
      api.get("list").then(async (res) => {
        await setLists(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <>osoososd</>
      {lists &&
        lists.map((list, key) => {
          return <div key={key}>{list.id}</div>;
        })}
    </div>
  );
}
export default MyTask;
