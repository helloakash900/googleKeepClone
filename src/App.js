import React, { useState } from 'react'
import Footer from './Component/Footer';
import Header from './Component/Header';
import CreateNote from "./Component/CreateNote";
import Note from "./Component/Note"


function App() {
  const [data, setData] = useState([]);

  const addNote = (note) => {
    setData((predata)=> {
    return [...predata, note];
    });
    console.log(note)
  }
  const doDel = (id) => {
    setData((oldData) =>
      oldData.filter((curr, index) => {
        return index!==id
      })
   );
};

  return (
    <div><Header />
      <CreateNote passNote = {addNote} />
      {data.map((val, i) => {
        return <Note
          key={i}
          id={i}
          title={val.title}
          content={val.content}
          deleteItem = {doDel}
        />;
      })
      }
      <Footer />
    </div>
  )
}

export default App