import withCounter from "../HOC/withCounter";
function MouseOver(props) {
  const { count, incrementCount } = props;
  return (
    <div>
      <h1 onMouseOver={incrementCount}>Hover Count {count} Time </h1>
    </div>
  );
}

export default withCounter(MouseOver);
