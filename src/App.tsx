import Slider from "react-slick";

import CardSlider from "./components/CardSlider";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold underline py-6">
        Reviews !
      </h1>
      <CardSlider />
    </div>
  );
};

export default App;
