import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  const [headingText, setHeadingText] = useState("");

  function handleChange(event) {
    //console.log(event.target.value);
    //const newValue = event.target.value;
    //const inputName = event.target.name;
    const {value, name} = event.target;

    setFullName((prevValue) => {
 //     if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
//      }
    });
  }
  function handlelChange(event) {
    //console.log(event.target.value);
    //    const lastName = event.target.value;
//    const newValue = event.target.value;
//    const inputName = event.target.name;
    const {value, name} = event.target;

    setFullName((prevValue) => {
//      if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
//      }
    });

    //      setFullName({fName:prevValue.fname, lName:lastName});
  }
  function handleClick(event) {
    setHeadingText(fullName.fName + " " + fullName.lName);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handlelChange}
          type="text"
          placeholder="What's your last name?"
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

// function App() {
//   const [name, setName] = useState("");
//   const [lname, setlName] = useState("");

//   const [headingText, setHeadingText] = useState("");

//   function handleChange() {
//     console.log(event.target.value);
//     setName(event.target.value);
//   }
//   function handlelChange() {
//     console.log(event.target.value);
//     setlName(event.target.value);
//   }
//   function handleClick(event) {
//     setHeadingText(name + " " + lname);
//     event.preventDefault();
//   }
//   return (
//     <div className="container">
//       <h1>Hello {headingText} </h1>
//       <form onSubmit={handleClick}>
//         <input
//           onChange={handleChange}
//           type="text"
//           placeholder="What's your name?"
//           value={name}
//         />
//         <input
//           onChange={handlelChange}
//           type="text"
//           placeholder="What's your last name?"
//           value={lname}
//         />
//         <button type="submit" >Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

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
