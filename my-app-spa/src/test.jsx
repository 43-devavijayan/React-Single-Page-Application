
const element = (abc) => { 
  const user=abc.person;  
  return(
  <div>
    <h1>Hello, {abc.fnPerson(user)}</h1>
    <p>Hello</p>
  </div>
)};
export default element;
