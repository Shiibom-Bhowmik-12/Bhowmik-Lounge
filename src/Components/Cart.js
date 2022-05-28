import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 340,
  height:570,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4.75,
  borderRadius: '13px',
};


function Cart() {
  const [food,setFood]=useState([]);
  const [cost,setCost]=useState(0);
  const [plate,setPlate]=useState(0);
  const [code,setCode]=useState('');
  const [date,setDate]=useState('');

  const [open, setOpen] = React.useState(false);
  const handleOpen = () =>{
    setOpen(true);
    gen();
  } 
  const handleClose = () => {
    setOpen(false);
    localStorage.clear();
  }

  useEffect(() =>{
      let olddata=JSON.parse(localStorage.getItem("Shibom12") || "[]"); 
      let tempdata=[...olddata]; 
      setFood(tempdata);
      let price=0;
      let plat=0;
      for(let i=0; i<tempdata.length; i++){
        let cobj=tempdata[i];
        let np=cobj["new_price"].substr(1);
        np=np*1;
        price+=np;
        plat+=cobj["qty"];
      }
      setCost(price);
      setPlate(plat);
  },[food]);

  const handleRemove = (item) => {
    let olddata=JSON.parse(localStorage.getItem("Shibom12") || "[]"); 
    let tempdata=[...olddata]; 
    let newdata=[];
    for(let i=0;i<tempdata.length;i++){
      if(tempdata[i]["id"]!=item["id"]){
        newdata.push(tempdata[i]);
      }
    }
    localStorage.setItem("Shibom12",JSON.stringify(newdata));
    setFood(newdata);
  }

  const gen = () =>{
    let res=Math.random().toString(36).slice(2);
    setCode(res);
    let dt=new Date().toLocaleString();
    setDate(dt);
  }

  const history = useHistory();
  const gotoHome = () =>{
    history.push('/');
  }

  const gotoMenu = () => {
    history.push('/menu');
  }

  return (
    <>

     <nav class="d-flex navbar navbar-expand-lg navbar-light bg-warning sticky-top">
           <img className="home" src="home.png" width="52" height="30" alt="hommie" onClick={()=>gotoHome()} />

           <div className="navbar-brand bttn1">
              <img className="cartt" src="menu.png" width="35" height="35" alt="cart" onClick={()=>gotoMenu()}/>
                    {/* <img src="profile.png" width="28" height="28" alt="profile"/> */}
            </div>
      </nav>  
     
       <h2 style={{"font-family":"Josefin Sans,san-serif"}} className="mt-3 text-center main-heading"><u>Your Dining Table</u> <img src="pngegg.png" alt="chef" className="din-table-img"/></h2> 
        <hr/>
        {
          food.length==0 ?
              
              <div className="tab">
                  <h2 style={{fontFamily:"cursive"}}>Oops! Your Table has no food</h2>
                   <br/>
                  <img className="hung" src="hungry.png" alt="hung"/>
                  <br/>
                  <h4 style={{fontFamily:"cursive",padding:"22px"}}>Let's cook something delicious for you &#128523; , because you deserve it <span style={{color:"red"}}>&#10084;</span></h4>
                  {/* <h4 style={{fontFamily:"cursive"}}>If you have already ordered then please wait, your dish will be on your table soon...</h4> */}
                  <br/>
                  <br/>
                  <footer className="foot">
                    <p style={{fontFamily:"cursive",fontSize:"20px"}}>Dont worry! if you have already ordered then please wait, your dish will be on your table soon...</p>
                </footer>
               </div>
            :
                <table class="table">
                  <thead>
                    <tr>
                    {/* <th/> */}
                      <th scope="col-3">Dish</th>
                      <th scope="col-3">Name</th>
                      <th scope="col-3">Plates</th>
                      <th scope="col-3">Price</th>
                      <th/>
                    </tr>
                  </thead>

                  <tbody>
                  {
                    food.map((item,index)=>(
                      <tr>
                      <th scope="row"><img src={item["img"]} style={{height:"90px"}}></img></th>
                        <td>{item["name"]}</td>
                        <td>{item["qty"]}</td>
                        <td>{item["new_price"]}</td>
                      <td><button type="button" className="bttn2 btn-danger" onClick={()=>handleRemove(item)}>Remove</button></td>
                      </tr>
                    ))
                  }


                    <tr>
                      <td/>
                      <td><h4>Total </h4></td>
                      <td>{plate}</td>
                      
                      <td>
                      ₹{cost}
                      </td>

                      <td>
                        <button type="button" className="bttnorder btn-success" onClick={handleOpen}>Order</button>
                          <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                  Your order has been placed successfully!
                    
                                  <img style={{width:"30px",height:"24px",paddingLeft:"10px",paddingBottom:"4px"}}src="tick1.png" alt=""/>
                                  <br/>
                                  <br/>
                                </Typography>
                                <img style={{width:"195px",height:"250px",paddingLeft:"65px"}} src="maharaj.png" alt=""/>
                                <Typography sx={{ mt: 3 }}>
                                  <b>Order id : {code}</b>
                                  <br/>
                                  <b>Time : {date}</b>
                                  <br/>
                                  <br/>
                                  <p style={{paddingLeft:"24px"}}><b>Thank you! for dining with us.</b></p>
                                  <h5 style={{paddingLeft:"54px"}}>Bhowmik Lounge</h5>
                                </Typography>
                              </Box>
                            </Modal>
                      </td>
                    </tr>
                 </tbody>



                 
              </table>
           }
    </>
  )
}

export default Cart



// // useEffect(()=>{
// //   const data=localStorage.getItem('cart');
// //   if(data!="[]"){
// //     setItems(JSON.parse(data));
// //     setisEmpty(false);
// //     getTotalCost();
// //   }
// //   else if(data=="[]")
// //   {
// //       setisEmpty(true);
// //   }
// // },[handleRemove]);
// // const handleRemove=(item)=>{
// //     let data=JSON.parse(localStorage.getItem("cart") || "[]");
// //     let tempdata=[...data];
// //     let new_data=tempdata.filter((d)=>(d["id"]!=item["id"]));
// //     setItems([...new_data]);
// //     localStorage.setItem("cart",JSON.stringify(new_data));
// // }