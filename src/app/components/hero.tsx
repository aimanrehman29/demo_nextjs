import Video from "./video2";
import React from "react";
import AuctionGrid from "./actiongrid";
import Table from "./table";
import YouTubeVideo from "./video";
import Coment from "./coment";
import CarDetails from "./description";
import CarAuctionHeader from "./info";

const Frame2 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6">
      <div className="lg:col-span-4 px-4">
        <div>
          <Table />
          <Coment />
          <YouTubeVideo />
          <CarAuctionHeader />
          <CarDetails />
          <Video />
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-2 p-6">
        <AuctionGrid />
      </div>
    </div>
  );
};

export default Frame2;
