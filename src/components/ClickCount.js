import withCounter from "../HOC/withCounter";
function ClickCount(props) {
  const { count, incrementCount } = props;
  return (
    <div>
      <button onClick={incrementCount}>Click Count {count} Time </button>
    </div>
  );
}

export default withCounter(ClickCount);
