import { useNavigate } from "react-router-dom";
import todoApp from "../../assets/task_app_illustration (1).jpg";
import Button from "../common/Button";
import IntroFooter from "../layout/Footer";
function IntroToDosPage() {
  const direct = useNavigate();
  return (
    <>
      <main className="flex flex-col relative ">
        <section className="flex h-full ">
          <section className="self-center px-4 h-full mb-10">
            <h1 className="text-5xl font-bold font-rubik leading-tight">
              <span className="text-blue-barry-hot">
                Open Your Imagination an
                <span className="text-tea-forest">D</span>
              </span>
              <span className="text-tea-forest ">
                <span className="text-blue-barry-hot">C</span>reativity, Write
                Down Your Thoughts
              </span>
            </h1>
            <div className="mt-5">
              <p className="text-pretty text-lg font-medium ">
                welcome to the world that going to let you imagine and put you
                thoughts all togather in one place and keep orginized and let
                you reach whenever you want so that you can start bringing it to
                life 🗯
              </p>
            </div>
          </section>

          <section>
            <img src={todoApp} alt="todo app" />
          </section>
        </section>
        <Button
          onClick={() => direct("enovateTodo")}
          className="bg-blue-barry-cold absolute bottom-6  text-white font-rubik self-center p-3 rounded-3xl hover:bg-blue-barry-hot transition-colors"
        >
          Start The Journy
        </Button>
      </main>
      <IntroFooter />
    </>
  );
}

export default IntroToDosPage;
