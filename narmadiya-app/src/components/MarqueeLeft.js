import React from 'react'
import Marquee from "react-fast-marquee"
import MarqueeLeftCss from '../Styles/MarqueeLeft.module.css'
function MarqueeLeft(props) {
  return (
    <Marquee gradient={false} className={MarqueeLeftCss.marqueeTagLeft} width={props.width} direction={props.direction}>
        {props.content}
    </Marquee>
  )
}

export default MarqueeLeft