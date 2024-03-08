import Clock from './components/Clock/Clock';

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
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
