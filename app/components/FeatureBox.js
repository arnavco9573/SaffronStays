import React from 'react'
import "./FeatureBox.css"


const FeatureBox = ({icon:Icon,label}) => {
  return (<>
  
    <div className="feature-box">
      <Icon className="feature-icon" />
      <a className="feature-label">{label}</a>
    </div>
    
    </>
  )
}

export default FeatureBox
