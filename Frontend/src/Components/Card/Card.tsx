import React from 'react'
import "./Card.css";
interface Props  {
  companyName: string;
  ticker: string;
  price:number;
}

const Card:React.FC<Props> = ({companyName, ticker, price}: Props): JSX.Element => {
  return (
     <div className='card'>
         <img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg">
         </img>
         <div className='details'>
            <h2>{companyName} {ticker}</h2>
            <p>${price}</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sapiente quae eligendi autem id, provident architecto voluptatibus blanditiis dicta quam ab doloremque officiis tempora perspiciatis accusamus delectus in libero ducimus?</p>

    </div>
   
  )
};

export default Card

