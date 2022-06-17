import home_default from "../assets/media/home_default.svg";
import pasha_bank from "../assets/media/pashabank-logo.png";
import safaroff from "../assets/media/safaroff_logo .png";
import kapital_bank from "../assets/media/kapitalbank_logo.png";
import endorphin from "../assets/media/endorphin_logo.png";
import apple from "../assets/media/apple_logo.png";
import abb from "../assets/media/abb_logo.png";
import bag_squart from "../assets/icons/bag_squart.svg";
import people_add from "../assets/icons/add_circle.svg";
import lamp_circle from "../assets/icons/lamp_circle.svg";
import contact_squart from "../assets/icons/contact_squart.svg";
function Hero() {
  const images = [pasha_bank, safaroff, kapital_bank, endorphin, apple, abb];
  return (
    <div className="w-full h-full" id="home">
      <div className="flex w-full h-full">
        <div className="w-1/2 flex flex-col px-28 space-y-8 justify-center items-center">
          <div className="space-y-4">
            <h1 className="font-bold text-4xl">
              Biznes əlaqələrini bizimlə genişləndir.
            </h1>
            <p className="text-base">
              Buca biznesini və ya portfolionu bir kliklə geniş auditoriyaya
              çatdıran platformadır.
            </p>
          </div>
          <div className="flex w-full justify-start items-start">
            <button className="flex px-8 py-3 text-default bg-primary rounded hover:bg-blue-btnHover">
              Search Profiles / It’s Free
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center relative ">
          <img src={home_default} alt="" />
          <div className="flex w-72 space-x-4 bg-default px-4 py-4 boxshadow-lg absolute rounded left-0 top-14">
            <img src={bag_squart} alt="" />
            <div className="flex flex-col space-y-2">
              <span className="font-bold text-lg">10000+</span>
              <span className="text-sm">Ümumi şirkətlərin sayı</span>
            </div>
          </div>
          <img className="top-12 right-28 absolute" src={people_add} alt="" />
          <img className="left-8 bottom-20 absolute" src={lamp_circle} alt="" />
          <div className="flex w-80 space-x-4 bg-default px-4 py-4 boxshadow-lg absolute rounded right-32 bottom-0">
            <img src={contact_squart} alt="" />
            <div className="flex flex-col space-y-2">
              <span className="font-bold text-lg">20000+</span>
              <span className="text-sm">Ümumi profillərin sayı</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full px-28 py-8">
        {images.map((image) => {
          return (
            <div className="flex mr-auto">
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
