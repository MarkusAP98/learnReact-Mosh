import Buttons from "./components/Buttons";

function App() {
  return (
    <div>
      <Buttons color='primary' onClick={() => console.log('Clicked')
      } >My Button</Buttons>
    </div>
  );
}
export default App;
