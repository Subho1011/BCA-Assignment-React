import ButtonComponent from "./assignments/ButtonComponent";
import Greetings from "./assignments/Greetings";
import UserInfo from "./assignments/UserInfo";

const App = () => {
  const userName = "John Doe",
    age = 25;
  return (
    <>
      <Greetings />
      <UserInfo userName={userName} age={age}/>
      <ButtonComponent/>
    </>
  );
};

export default App;
