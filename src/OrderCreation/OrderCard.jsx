import { React, useState, useEffect } from 'react';
import * as Icon from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import OrderCreation from '../CssFiles/OrderCreation.css';

export default function OrderCard(props) {

  
    return (
        <div className='col'>
                         <br/>
                    <p style={{ margin: 0, fontSize:'30px', color:'black' }} >  <Icon.FiInfo /> הזמנה מספר {props.order}</p>
                    <p style={{ margin: 0,fontSize:'22px', fontWeight: 'bold', color:'black' }} > <Icon.FiUser/>  <u>עבור:</u> {props.cName}</p>
                    <p style={{ margin: 0, fontSize:'22px',fontWeight: 'bold', color:'black' }} ><Icon.FiCalendar/>  <u>תאריך:</u> {props.date}</p>
                    <p style={{ margin: 0, fontSize:'22px', fontWeight: 'bold', color:'black' }} > <Icon.FiNavigation/>  <u>סוג הנסיעה:</u> {props.type}</p>
                    <p style={{ margin: 0, fontSize:'22px', fontWeight: 'bold', color:'black' }}> <Icon.FiPhone/>  <u>מספר איש קשר:</u> {props.cNumber}</p>
                    <p style={{ margin: 0, fontSize:'22px', fontWeight: 'bold', color:'black' }} > <Icon.FiUsers/>   <u>מספר נוסעים:</u> {props.passengers}</p>
                    <p style={{ margin: 0, fontSize:'22px', fontWeight: 'bold', color:'black' }} > <Icon.FiFlag/>  <u>מספר נקודות עצירה:</u> {props.length}</p>
                    
        </div>
    )
}
