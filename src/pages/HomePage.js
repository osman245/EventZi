import React from "react";
import { EventList } from "../components/EventList";
import { useFetch } from "../components/useFetch";

export const HomePage = () => {
  const { error, data, isPending } = useFetch(process.env.REACT_APP_EVENT);

  return (
    <>
      <div className="mx-4 my-4 fluid-container">
        <h1 className=" p-4 ml-title l-spacing text-center text-dark mt-4">
          EVENTVENUE
        </h1>
        <div className="d-flex flex-wrap">
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {data && <EventList mockEvents={data} />}
        </div>
      </div>
    </>
  );
};
