function Button(props) {
    // const handleClick = () => setCounter(counter+1);
      return <button onClick={() => props.handler(props.increment)}>+{props.increment}</button>;
  }
  
  function Display(props) {
  return <div>{props.message}</div>;
  }
  
  function App(){
    const [counter, setCounter] = useState(0);
    const incrementCounter = (x) => setCounter(counter+x);
    return (
      <>
      <Button handler={incrementCounter} increment={1}/>
      <Button handler={incrementCounter} increment={5}/>
      <Button handler={incrementCounter} increment={10}/>
      <Button handler={incrementCounter} increment={100}/>
      <Display message={counter}/>
    </>
           );
  }
  ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
  );