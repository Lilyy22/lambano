import AppLayout from "./components/Layout/AppLayout";
import { IoLogoWhatsapp } from "react-icons/io";
function App() {
  // Get a variable from local storage
  var chat = sessionStorage.getItem("want_chat");

  return (
    <>
      <div className="font-tailwind bg-gray-900">
        <AppLayout />
      </div>
    </>
  );
}

export default App;
