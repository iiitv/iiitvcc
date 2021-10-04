import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Header from "../../components/Header";
import { events } from "../../events/events.json";

export async function getServerSideProps(context) {
  console.log(context.query);
  return {
    props: {
      eventindex: context.query.eventindex,
    },
  };
}

const Eventpage = (props) => {
  return(
    <div className="eventpage">
    <Header />
    <div id="temp">{props.eventindex}</div>
    </div>
  )
};

export default Eventpage;
