import './App.css'

function App({name = ''}: {name?: string}) {
  return (
    <>
    <input id="theme-toggler" type="checkbox"/>
    <div className="app" style={{['--text-color']: 'green'}}>
      <h1>Hello World {name} </h1>
      <p>This is a dummy App component</p>
    </div>
    <label htmlFor="theme-toggler">Toggle</label>
    </>
  )
}

export default App;
