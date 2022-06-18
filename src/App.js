import Container from "./components/Container";
import Text from "./components/Text";


function App() {
  return (
    <div className="App">
      <Container>
      <Text as={"h1"}>Social media dashboard</Text>
      <Text as={"p"}>Total Followers: 23,004</Text>
      </Container>
    </div>
  );
}

export default App;
