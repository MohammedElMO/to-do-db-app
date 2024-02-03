import drawingImg from "../../assets/drawing_app_illustration-removebg.png";
import CurevedArrowRight from "../../assets/icons/CurevedArrowRight";
import CurvedArrow from "../../assets/icons/CurvedArrow";
function IntroFooter() {
  return (
    <section className="flex items-center justify-around bg-blue-barry-cold w-full h-48 p-3 fixed bottom-0">
      <div className="h-full">
        <ul className="grid font-rubik place-items-center *:font-semibold relative grid-rows-4 gap-1 grid-cols-4 h-full text-white">
          <li></li>
          <li></li>
          <li></li>
          <li className="font-bold botto"> Bring To Life </li>
          <CurevedArrowRight classes="absolute bottom-[170px] left-[320px] size-[120px]" />
          <li></li>
          <li></li>
          <li>Imagine</li>
          <CurvedArrow classes="absolute bottom-12 left-[280px] size-[100px]" />
          <li></li>
          <li></li>
          <li>Create </li>
          <li></li>
          <li></li>
          <li>Explore</li>
          <CurvedArrow classes="absolute bottom-3 left-[170px] size-[70px]" />
          <li></li>
          <li></li>
          <li></li>
          <CurvedArrow classes="absolute -bottom-3 left-20 size-[40px]" />
        </ul>
      </div>
      <div>
        <img
          src={drawingImg}
          alt="drawing illustration"
          className="size-60 object-contain"
        />
      </div>
    </section>
  );
}

export default IntroFooter;
