import Clock from './components/Clock/Clock';

function App() {
  return (
    <div>
      <Clock>
        <Clock.Numbers />
        <Clock.Hour />
        <Clock.Minute />
        <Clock.Second />
      </Clock>
    </div>
  );
}

export default App;
