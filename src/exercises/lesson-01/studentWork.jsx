//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  let name = "Brendan Trieu";
  let age = 99;
  let hobbies = [
    "eating",
    "sleeping",
    "lying"
  ]
  return (
    <div>
      {/* add JSX here */}
      <p> Student output will go here </p>
      <h1>About {name}</h1>
      <h2>Descripion:</h2>
      <p>Blah blah blah. Some paragraph.</p>

      <h2>My hobbies</h2>
      <ul>
        {hobbies.map(hobby => <li>{hobby}</li>)}
      </ul>
      
    </div>
  );
}
