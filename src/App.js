import { useRef, useState} from "react";

function Item (props){
  return <li>{props.name}, ${props.price}, {props.status}</li>;
}

function Title (props){
  return <h1>{props.name}</h1>;
}

function Header(props) {
  return <Title name={props.name} />;
}

function Hsu (props){
  return <Header name="App Title"/>;
}

// function Item(props){
//   return <li>{props.name}, ${props.price}</li>;
// }

// export default function App (){
//   return (
//     <div>
//       <h1>Hello React</h1>
//       <ul>
//         <Item name="Apple" price="0.09"/>
//         <Item name = "Orange" price = "0.89"/>
//       </ul>
//     </div>

//   );
// }

function AddForm(props){
  const nameRef = useRef();
  const priceRef = useRef();
  const statusRef = useRef();
  
  return (
    <form onSubmit={e=> {
      e.preventDefault();
      props.add(
        nameRef.current.value,
        priceRef.current.value,
        statusRef.current.value
      );

    }}>
      <input type="text" ref={nameRef} /><br/>
      <input type="text" ref={priceRef} /><br/>
      <input type="text" ref={statusRef} /><br/>
      <button type="submit">Add</button>
    </form>
  );
}


export default function App(){
  const [data, setData] = useState ([
    {id: 1, name: "Apple", price: 0.99 , status: "Single"},
    {id: 2, name: "Orange", price: 0.89 , status: "Single"}
  
  ]);

  const add = (name, price, status)=>{
    const id = data.length+1;
    // const name = nameRef.current.value;
    // const price = priceRef.current.value;

    setData([
      ...data,
      {id, name, price, status}
    ]);
  }

  return (
    <div>
      <h1>Hello React</h1>
      <ul>
        {data.map(i=>(
          <Item key={i.id} name={i.name} price={i.price} status={i.status}/>

        ))}
      </ul>
      <AddForm add = {add} />
    </div>
  );
}