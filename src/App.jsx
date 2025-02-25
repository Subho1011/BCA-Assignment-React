import ButtonComponent from "./assignments/ButtonComponent";
import Greetings from "./assignments/Greetings";
import UserInfo from "./assignments/UserInfo";
import ItemList from './assignments/ItemList';
import StatusMessage from './assignments/StatusMessage';

const App = () => {
  const userName = "John Doe",
    age = 25,
    fruits = ['Apple', 'Banana', 'Cherry'],
    isLoggedIn = true;
  return (
    <>
      <Greetings />
      <UserInfo userName={userName} age={age}/>
      <ButtonComponent/>
      <ItemList fruits={fruits}/>
      <StatusMessage isLoggedIn={isLoggedIn}/>
    </>
  );
};

export default App;
