import React,{useState,useEffect} from 'react';
import axios from 'axios';
// import { getFormControlUnstyledUtilityClasses } from '@mui/base';
import Card from './Card';
import Footer from './Footer';
import {useHistory} from 'react-router-dom';

function Menu() {
  const [food,setFood]=useState([]);
  const [dumfood,setDumfood]=useState([]);

  useEffect(() =>{
     (async function getFood(){
      try{
        const url=`https://foodie-50c29-default-rtdb.firebaseio.com/items.json`;
        const resp=await axios.get(url);
        setFood(resp.data);
        // console.log(resp.data);
      }
      catch(error){
        console.log(error);
      }
    })()
  },[]);

  // const display = () => {
  //   console.log(food);
  // }


  const history = useHistory();
  const gotoCart = () => {
    history.push('/cart');
  } 
  

  const gotoHome = () => {
    history.push('/');
  } 


  return (
    <>
      <nav class="d-flex navbar navbar-expand-lg navbar-light bg-warning sticky-top">
           <img className="home" src="home.png" width="50" height="26" alt="hommie" onClick={()=>gotoHome()} />
      
            <div className="navbar-brand bttn1">
                  <img className="cartt" src="cart.png" width="36" height="35" alt="cart" onClick={()=>gotoCart()}/>
                    {/* <img src="profile.png" width="28" height="28" alt="profile"/> */}
            </div>
                 {/* <div className="navbar-brand bttn">
                    <img className="prof" src="profile.png" width="28" height="28" alt="profile" onClick={()=>gotoProfile()}/>
                  </div> */}
      </nav> 

       <h2 style={{"font-family":"Josefin Sans,san-serif"}} className="mt-1 text-center main-heading"><img src="chef1.png" alt="chef" className="chef"/>Order Your Favourite Dish</h2> 
       {/* <hr/> */}
       <div className="cate">
            <span className="cate-in">Today's Menu</span>
          </div>

      <div className="main-body">
        {
          dumfood.length > 0 ?
          dumfood.map((obj,ind)=>(
            <Card item={obj}/>))
            :
          food.map((obj,ind)=>(
            <Card item={obj}/>
          ))
        }
      </div>

      <br/>
      <Footer/>
    </>
  )
}

export default Menu;