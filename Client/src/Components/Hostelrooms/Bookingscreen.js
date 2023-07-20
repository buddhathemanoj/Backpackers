

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Bookroom.css'
import { Loader } from './Loader';
import { Error } from '@mui/icons-material';
import moment from 'moment';



export const Bookingscreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState(null); 
  const { roomid } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fromdate = queryParams.get('fromdate');
  const todate = queryParams.get('todate');

 
 
  const date1 = moment(fromdate, 'DD-MM-YYYY');
  const date2 = moment(todate, 'DD-MM-YYYY');
  const totaldays = date2.diff(date1, 'days');
  console.log(totaldays)
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const response = await axios.post("http://localhost:5001/api/rooms/getroombyid", { roomid: roomid });
        setRoom(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchRoom(); //  to fetch the data
  }, [roomid]); // e roomid in the array to fetch data when it changes

  return (
    <div style={{padding:'0 10%'}} className='m-5'>
      
      {loading ? (
        <Loader/>
      ) : error ? (
        <Error/>
      ) : (
        <div>
         
          {room && (
            <div  className='row justify-content-center mt-5 boxshaows '>

            <div style={{paddingRight:'30px'}} className='col-md-6' >
              <h1>{room.name}</h1>
              <img className='bigimgcaro' src={room.imageurls[0]}  />
              </div>

              <div className='col-md-6 Deatails ' >
                <div  >
<br/>

              <h1>Bokking Summary</h1>
              <hr/>
              <b>
              <p>Name: Manoj Prabhakar</p>
              <p>From Date : {fromdate} </p>
              <p>To Date :{todate}</p>
              <p> Max Count : {room.maxcount}</p>

             </b> 
</div>
<div >
    <h1>  Checkout Price</h1>
    <hr/>
 <p>Total Days: {totaldays}</p>
 <p>Rent per Day:{room.rentperday}</p>
 <p>Total Amount</p>
    </div>
    <div  >
        <button className='btn-primary'>Pay Now</button>
    </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
