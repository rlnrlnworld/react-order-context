import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../context/OrderContext'

const CompletePage = ({ setStep }) => {
  const [orderData] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    orderCompleted(orderData);
  },[orderData])

  const orderCompleted = async (orderData) => {
    try {
      let response = await axios.post(
        "http://localhost:4000/order",
        orderData
      )
      setOrderHistory(response.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  }
  if(loading) {
    return <div>...loading</div>
  } else {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>주문이 완료되었습니다.</h2>
        <h3>주문 상세 확인</h3>
        <br />
        <button onClick={() => setStep(0)}>홈 화면으로</button>
      </div>
    )
  }
}

export default CompletePage
