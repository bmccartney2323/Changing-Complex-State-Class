import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lname, setlName] = useState("");

  const [headingText, setHeadingText] = useState("");

  function handleChange() {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handlelChange() {
    console.log(event.target.value);
    setlName(event.target.value);
  }
  function handleClick(event) {
    setHeadingText(name + " " + lname);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <input
          onChange={handlelChange}
          type="text"
          placeholder="What's your last name?"
          value={lname}
        />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;


// import React from "react";

// function App() {
//   return (
//     <div className="container">
//       <h1>Hello</h1>
//       <form>
//         <input name="fName" placeholder="First Name" />
//         <input name="lName" placeholder="Last Name" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
