import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    
      <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
        <h1 className="w-11/12 bg-white text-center m-3 p-2 text-4xl font-bold rounded-lg">Rndom GIF</h1>
      
    <Random/>
    <Tag/>
    </div>
  );
}
