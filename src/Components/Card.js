import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({item}) {
  const [quantity,setQuantity]=useState(0);

  function increasebyOne() 
  { 
      let olddata=JSON.parse(localStorage.getItem("Shibom12") || "[]"); 
      let tempdata=[...olddata]; 
      if(tempdata.length==0) 
      { 
        let cqty=item["qty"]; 
        cqty=cqty+1; 
        item["qty"]=cqty; 
        item["new_price"]=item["base_price"]; 
        tempdata.push(item); 
        setQuantity(1); 
        localStorage.setItem("Shibom12",JSON.stringify(tempdata)); 
      } 
      else 
      { 
        let isPresent=false; 

        for(let i=0;i<tempdata.length;i++) 
        { 
          let obj=tempdata[i]; 
          if(obj["id"]==item["id"]) 
          { 
            isPresent=true; 
            let cqty=obj["qty"]; 
            cqty=cqty+1; 
            obj["qty"]=cqty; 
            let np=obj["base_price"].substr(1); 
            np=np*cqty; 
            obj["new_price"]="₹"+np; 
            tempdata[i]=obj; 
          } 
        } 

        if(isPresent==false) 
        { 
          let cqty=item["qty"]; 
          cqty=cqty+1; 
          item["qty"]=cqty; 
          item["new_price"]=item["base_price"]; 
          tempdata.push(item); 
           
          setQuantity(1); 
          localStorage.setItem("Shibom12",JSON.stringify(tempdata)); 
        } 
        else 
        { 
          setQuantity(prev=>prev+1); 
          localStorage.setItem("Shibom12",JSON.stringify(tempdata)); 
        } 
      } 
  }
  
  function decreasebyOne() 
  { 
      if(quantity-1<0) 
      return; 
      setQuantity(prev=>prev-1); 
      if(quantity-1==0) 
      { 
        let olddata=JSON.parse(localStorage.getItem("Shibom12") || "[]"); 
        let tempdata=[...olddata]; 
        let index=tempdata.filter(obj=>obj["id"]!=item["id"]) ; 
        tempdata=[...index]; 
        localStorage.setItem("Shibom12",JSON.stringify(tempdata)); 
      } 

      let olddata=JSON.parse(localStorage.getItem("Shibom12") || "[]"); 
      let tempdata=[...olddata]; 

      for(let i=0;i<tempdata.length;i++) 
      { 
        let cobj=tempdata[i]; 
        if(cobj["id"]==item["id"]) 
        { 
          let cqty=cobj["qty"]; 
          cqty=cqty-1; 
          cobj["qty"]=cqty; 
          let np=cobj["new_price"].substr(1); 
          let bp=cobj["base_price"].substr(1); 
          np=np-bp; 
          cobj["new_price"]="₹"+np; 
          tempdata[i]=cobj; 
        } 
      } 
      localStorage.setItem("Shibom12",JSON.stringify(tempdata)); 
  }


  const isPresent = () => {
    let olddata=JSON.parse(localStorage.getItem("Shibom12") || "[]");
    let tempdata=[...olddata];
    if(tempdata.length==0){
      return false;
    }
    
    let present = false;
    for(let i=0; i<tempdata.length; i++){
      if(tempdata[i]["id"]==item["id"]){
        present=true;
        break;
      }
    }

    return present;
  }

  useEffect(()=>{
    if(isPresent()){
      let olddata=JSON.parse(localStorage.getItem("Shibom12") || "[]");
      let tempdata=[...olddata];
      for(let i=0; i<tempdata.length;i++){
        if(tempdata[i]["id"]==item["id"]){
          setQuantity(tempdata[i]["qty"]);
        }
      }
    }
  },[])




  return (
     <div className="product-card">
        <div className="badge">Must Try</div>
        <div className="product-tumb">
          <img src={item.img} alt="" />
        </div>
        <div className="product-details">
          <span className="product-catagory">{item.cat}</span>
          <h4><a href>{item.name}</a></h4>
          <p className="des">{item.desc}</p>
          <div className="product-bottom-details">
            <div className="product-price">{item.base_price}</div>
            <div>
              {
                quantity==0? 
                 <button type="button" class="btn" onClick={increasebyOne}>SET ON TABLE</button> :
                 <div>
                    <button type="button" class="btn btn-light" onClick={increasebyOne}>+</button>
                     <input type="text" className="inp" value={quantity} readOnly/>
                    <button type="button" class="btn btn-light" onClick={decreasebyOne}>-</button>
                 </div>
              }
             
            </div>
             <div className="product-links">
              <a href><i className="fa fa-heart" /></a>
              <a href><i className="fa fa-shopping-cart" /></a>
            </div>
            {/* <div className="nav-bar">
              <button type="button" class="btn btn-danger">Set on table</button>
           </div> */}
          </div>
        </div>



    </div>
  );
}
