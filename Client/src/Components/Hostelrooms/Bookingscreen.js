

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Bookroom.css'
import { Loader } from './Loader';
import { Error } from '@mui/icons-material';
export const Bookingscreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState(null); 
  const { roomid } = useParams();

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
    <div>
      
      {loading ? (
        <Loader/>
      ) : error ? (
        <Error/>
      ) : (
        <div>
         
          {room && (
            <div  className='row justify-content-center'>

            <div style={{paddingRight:'30px'}} className='col-md-5' >
              <h1>{room.name}</h1>
              <img className='bigimgcaro' src={room.imageurls[0]}  />
              </div>

              <div className='col-md-4 Deatails ' >
                <div  >
<br/>

              <h1>Bokking Summary</h1>
              <hr/>
              <b>
              <p>Name: Manoj Prabhakar</p>
              <p>From Date : </p>
              <p>To Date :</p>
              <p> Max Count : {room.maxcount}</p>

             </b> 
</div>
<div >
    <h1>  Checkout Price</h1>
    <hr/>
 <p>Total Days:</p>
 <p>Rent per Day:</p>
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
