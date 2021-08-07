function ShowStudentList(props) {
  return (
    <div>
      <ul>
        {props.data.map((student) => {
          return <li>{student}</li>;
        })}
      </ul>
    </div>
  );
}

export default ShowStudentList;
