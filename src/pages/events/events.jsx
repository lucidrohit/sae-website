import "./events.scss";
import Cards from "../../components/cards/cards";
import HeadingText from "../../components/common/headingText/headingText";

import { getEvents } from "../../sanityClient";
import { useEffect, useState } from "react";
import moment from "moment";

function Events() {
  const [events, setEvents] = useState({
    loading: false,
    data: [],
    error: "",
  });
  useEffect(() => {
    getEventList();
  }, []);

  const getEventList = async () => {
    setEvents((prevEvent) => ({ ...prevEvent, loading: true }));

    try {
      const list = await getEvents();
      setEvents({ data: list, error: "", loading: false });
    } catch (error) {
      setEvents({ data: [], error: error.message, loading: false });
    }
  };

  if (events.loading) return "Loading...";

  const liveEvents = events.data.filter((event) => {
    const date = moment(event.dateTime);
    const dateDiff = date.diff(moment(), "days");
    return !dateDiff ;
  });
  const pastEvents = events.data.filter((event) => {
    const date = moment(event.dateTime);
    const dateDiff = date.diff(moment(), "days");
    return dateDiff ;
  });

  return (
    <div className="events">
      <HeadingText text="Live Events" />
      <Cards cardsList={liveEvents} />
      <HeadingText text="Past Events" />
      <Cards cardsList={pastEvents} />
    </div>
  );
}

export default Events;
