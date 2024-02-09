function ListGroup() {
  const items = ["Antipolo", "Masinag", "Marikina", "Robinson", "Sta.Lu"];

  return (
    <>
      <h1>This is a List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
