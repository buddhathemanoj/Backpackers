import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Bookroom.css";
import { Roomslist } from "./Roomslist";
import { Loader } from "./Loader";
import { Error } from "@mui/icons-material";
export const Bookroom = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:5001/api/rooms/getallrooms"
        );
        console.log("API Response:", response.data);
        const mainArray = response.data.roooms;
        setRooms(mainArray);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="row  justify-content-center">
        {loading ? (
        <Loader/>
        ) : error ? (
          <Error/>
        ) : (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-5">
                <Roomslist room={room} />
              </div>
            
            );
          })
        )}
      </div>
    </div>
  );
};


