import React from 'react'
import Card from '../Card/Card'

interface Props  {}

const CardList: React.FC<Props> = (props: Props):JSX.Element => {
  return (
    <div>
        <Card companyName="Apple" ticker="AAPL" price={226}></Card>
        <Card companyName="Microsoft" ticker="MSFT" price={416}></Card>
        <Card companyName='Tesla' ticker='TSLA' price={220}></Card>
    </div>
  )
}

export default CardList