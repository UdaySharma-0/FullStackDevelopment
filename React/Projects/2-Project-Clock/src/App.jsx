import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";

const App = ()=>{
  return <div className="m-4">
    <ClockHeading />
    <ClockSlogan />
    <CurrentTime />
  </div>
}

export default App;