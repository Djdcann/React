function Button(props) {
    // const handleClick = () => setCounter(counter+1);
      return <button onClick={props.handler}>+1</button>;
  }
  
  function Display(props) {
  return <div>{props.message}</div>;
  }
  
  function App(){
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter+1);
    return (
      <>
      <Button handler={incrementCounter}/>
      <Display message={counter}/>
    </>
           );
  }
  ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
  );