import Card from "./components/Card";

function App() {
  let name1 = "Anurag";
  let salary1 = 400000;
  let name2 = "Ujjawal";
  let salary2 = 4000000;

  let btnText = "Anurag";


  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Card
        name={name1}
        salary={salary1}
        myarray={[1, 3, 4, 4]}
        btnText={btnText}
       
      />
      <Card name={name2} salary={salary2} myarray={[1, 3, 4, 4]}  />
    </>
  );
}

export default App;
