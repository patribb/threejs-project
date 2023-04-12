import Canvas from './canvas'
import { Home, Customizer } from './pages'

const App = () => {
  return (
    <main className='app transition-none ease-in'>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}
export default App