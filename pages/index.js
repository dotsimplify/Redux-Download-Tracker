import Content from "../components/Content";
import Header from "../components/Head";
import { Provider } from "react-redux";
import store from "../redux/Game/store";
function HomePage() {
  return (
    <Provider store={store}>
      <Header />
      <Content />
    </Provider>
  );
}

export default HomePage;
