import image from './img/img.jpeg';
import Ejemplo from './components/ejemplo/Ejemplo';

export default function App() {
  return (
    <><h1 className="text-3xl font-bold underline">
      {/* components */}
      Hello world!
    </h1>
    <div>
      <img src={image} alt=""/>
    </div>
      <Ejemplo></Ejemplo>
    </>
  )
}
