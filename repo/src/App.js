
function App() {
  const os=["Android","Blackberry","Iphone","Samsung"];
  const mm=["Samsung","HTC","Micromax","Apple"];
  return (
    <div className="App">
      <h2>Mobile Operating System</h2>
      <ul>{os.map((e)=>{
          return <li>{e}</li>
      })}</ul>
      <MobileManufactors data={mm}/>

    </div>
  );
}
function MobileManufactors(props){
  return <div>
    <h2>Mobile Manufactors</h2>
     <ul>
       {props.data.map((k)=>{
         return <li>{k}</li>
       })}
     </ul>
  </div>
}

export default App;
