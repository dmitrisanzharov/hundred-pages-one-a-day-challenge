import React from 'react';
import Page1MarketPlaceCard from '../components/Page1MarketPlaceCard'

const temp = () => {
  return <div className='tempWrapper d-flex justify-content-center align-items-center p-0 m-0'>
    <div>
    <Page1MarketPlaceCard obj={{
        image: 'https://s3.eu-west-1.amazonaws.com/flender.avatar/uploads/campaign/avatar/5727/ea5e673d-0eff-4e45-ae46-61f3d818c40b.png',
        ribbonImage: 'https://flender.ie/assets/funded-b47ebd154ec920ff1963d5e99dffee5b436edbfffb6e466fa7acb8bfcc12cfed.png',
        mainName: 'Bear Sporting Events Ltd P...',
        subName: 'Bear Sporting Events Limited',
        interestOffered: 8.85,
        loanGrade: 'B',
        totalAmount: 53500,
        durationInMonths: 18
    }}/>
    </div>
  </div>;
};

export default temp;
