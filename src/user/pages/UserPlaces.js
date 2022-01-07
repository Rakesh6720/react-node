import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../../places/components/PlaceList";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "some bullshit",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W. 34th Street, New York, NY 10001",
    location: {
      lat: 40.7,
      long: -73.9,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "some bullshit",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W. 34th Street, New York, NY 10001",
    location: {
      lat: 40.7,
      long: -73.9,
    },
    creator: "u2",
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;