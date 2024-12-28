import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-white min-h-[450px] text-black rounded-2xl shadow-2xl p-4">
              <div className="rounded-t-xl flex justify-center items-center">
                <img src={d.img} alt={d.name} className="w-44 h-44" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <p className="text-xl font-semibold font-mono pt-4">{d.name}</p>
                <p className="">{d.reviews}</p>
                <button className="btn btn-primary text-base text-white">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;

const data = [
  {
    name: "iPhone 14 Pro Max",
    img: "https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d2e6ccujb3mkqf.cloudfront.net/b614ec1b-0de9-4e23-9e1f-e6eb2deb68f8-1_b4781e45-ec7c-4650-ac43-72def6d5f5d6.jpg",
    reviews:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, id?",
  },
  {
    name: "Galaxy S23 Ultra",
    img: "https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d2e6ccujb3mkqf.cloudfront.net/56d522ad-3154-4feb-8ca8-e3bac0c31599-1_42e1ae8a-c274-4118-9e38-82729860451c.jpg",
    reviews:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, id?",
  },
  {
    name: "iPhone 16 Pro Max",
    img: "https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d2e6ccujb3mkqf.cloudfront.net/c47a0e0e-c5be-4a29-b229-903f1714b9d1-1_7aa8104e-b718-4f75-b91a-999fa7899438.jpg",
    reviews:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, id?",
  },
  {
    name: "Galaxy S22",
    img: "https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d2e6ccujb3mkqf.cloudfront.net/b12fbd31-2d50-4762-ab43-2c9b60475aa6-1_9d95cc77-8d37-47bb-a3bb-330b75274b1a.jpg",
    reviews:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, id?",
  },
  {
    name: "iPhone 15 Plus",
    img: "https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D750/https://d2e6ccujb3mkqf.cloudfront.net/3ad638e3-47f5-48a0-810d-e4b4247270c7-1_ee427e93-cb89-4b5d-abbe-2940e83a994d.jpg",
    reviews:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, id?",
  },
  {
    name: "Google Pixel 7",
    img: "https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d2e6ccujb3mkqf.cloudfront.net/8d69c306-9413-47bd-80be-f4b593fb4e4f-1_2855d8f7-ed91-44de-88cc-54b4bfd5e30a.jpg",
    reviews:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, id?",
  },
];
