import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Bookroom.css";
import { Roomslist } from "./Roomslist";
import { Loader } from "./Loader";

import moment from 'moment'
import { DatePicker, Space } from 'antd';

import { Error } from "@mui/icons-material";



export const Bookroom = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  
const { RangePicker } = DatePicker;

function filterByDate(dates)
{
console.log(moment(dates[0]).format('DD-MM-YYYY'))
console.log(moment(dates[1]).format('DD-MM-YYYY'))
}

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

      
<div style={{marginLeft:'12%'}} className="col-md-3 ">
   <RangePicker  format='DD-MM-YYYY' onChange={filterByDate}/ >
   </div>
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


