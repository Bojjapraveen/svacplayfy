import React from 'react'
import './trendingcard.css'
import { TrendingCardData } from '../../config/confige'


const Trendingcard = ({setCurrentPage, setCurrentEle}) => {

  return (
    <>
        <div className='trendingCardMainCointainer'>
          {
          TrendingCardData.map((ele, id) => {
              return (
              <>
                <div ket={id} onClick= {() =>{
                  setCurrentPage("musicSpecificPage")
                  setCurrentEle(ele)
                }} className='CardMainCointainer'>
                  <img src={ele.imgSrc} alt=""/>
                  <h2>{ele.heading} </h2>
                  <p>{ele.subHeading}</p>
                </div>
              </>
              )
            })
          }

        </div>
    </>
   
  )
}

export default Trendingcard