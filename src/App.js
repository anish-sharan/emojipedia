import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia";


function create(item)
{
  return (
   <Entry
    key={item.id}
    emoji={item.emoji}
    meaning={item.meaning}
    name={item.name}
   />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       {emojipedia.map(create)}
       </dl>
       </div>
  );
}

export default App;
