
import './style.css'
import xyz from "./dog.jpg"
// video src
// import sz from "./sss.mp4"
function App() {
  return (
    <div className='blocc'>
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

      <h1 className="titleRed"> Salim </h1>

       <br />
    {/* src img */}

      <img className='foto' src={xyz} alt="dogg"/>

    <br />
    {/* public img */}

<img src="/salim.jpg" alt="salim"/>

     </div>
     {/* public video */}

<video width="320" height="240" controls>

    <source src="/sss.mp4" type="video/mp4" />

   </video>
   {/* video dans src!!! */}
   {/* <video width="320" height="240" controls>

    <source src={sz} type="video/mp4" />

   </video> */}
</div>
  );
}

export default App;
     