import { redirect } from "next/navigation";
import EventBox from "../../components/ui/EventBox";
function Page() {
//////////////////// if Other category box which is smaller just pass secondCat///////////////////
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="self-center h-fit py-2 w-11/12 flex flex-col bg-[#201f31] mt-4">
          <p className="pl-12 pt-5 text-2xl font-medium">Events Near</p>
          <div className="self-center  w-full flex flex-row">
            <section className="h-fit w-1/3 gap-8 py-4 flex flex-col pl-12">
            <EventBox caption={"Learning from Github"} time={"17 july 2023 | 19:00"} category={"WorkShop"}/>
            <EventBox caption={"Learning from Github"} time={"17 july 2023 | 19:00"} category={"WorkShop"}/>
            <EventBox caption={"Learning from Github"} time={"17 july 2023 | 19:00"} category={"WorkShop"}/>
            <EventBox caption={"Learning from Github"} time={"17 july 2023 | 19:00"} category={"WorkShop"} secondCat/>
            </section>
            <section className="h-fit w-1/3 gap-8 py-4 flex flex-col pl-12">
            <EventBox caption={"Learning from Github"} time={"17 july 2023 | 19:00"} category={"WorkShop"} secondCat/>
            <EventBox caption={"Learning from Github"} time={"17 july 2023 | 19:00"} category={"WorkShop"}/>
            <EventBox caption={"Learning from Github"} time={"17 july 2023 | 19:00"} category={"WorkShop"}/>
            <EventBox caption={"Learning from Github"} time={"17 july 2023 | 19:00"} category={"WorkShop"}/>
            </section>
            <section className="h-fit w-1/3 gap-8 py-4 flex flex-col pl-12">
            <EventBox caption={"Learning from Github"} time={"17 july 2023 | 19:00"} category={"WorkShop"}/>
            <EventBox caption={"Learning from Github"} time={"17 july 2023 | 19:00"} category={"WorkShop"}/>
            <EventBox caption={"Learning from Github"} time={"17 july 2023 | 19:00"} category={"WorkShop"}/>
            <EventBox caption={"Learning from Github"} time={"17 july 2023 | 19:00"} category={"WorkShop"}  secondCat/>
            </section>

          </div>
          <button className="text-xl text-[#FFBADE] border-[#FFBADE] border-[0.5vh] w-fit px-32 active:scale-95 transition-all duration-100 self-center rounded-3xl py-3 "> Show More </button>
        </div>
      </div>
    </>
  );
}

export default Page;
