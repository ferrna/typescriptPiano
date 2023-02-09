import { FC } from 'react'
import zyro from '../images/zyro-image.png'
import './Title.css'

const Title: FC = () => {

  return (
    <div className="Title">
        <img src={zyro} style={{height: "6rem", paddingBottom: "1rem"}}></img><span>tu piano armonico para meditar..</span>
    </div>
  )
}

export default Title

//import zyro from '../images/zyro-image.png'
//<img src={zyro} style={{height: "14rem"}}></img>