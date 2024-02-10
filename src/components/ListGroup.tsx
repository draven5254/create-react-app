function ListGroup() {
  const items = ["Antipolo", "Masinag", "Marikina", "Robinson", "Sta.Lu"];
  // items = [];

  // const getMessage = () => {
  //   return ;
  // };

  return (
    <>
      <h1>This is a List</h1>
      {/* {items.length === 0 ? <p>No Item Found</p> : null} */}
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            onClick={(event) => console.log(event)}
            key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
