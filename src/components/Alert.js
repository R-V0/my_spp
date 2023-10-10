import React from 'react'

export default function Alert(props) {
    const cepitalice=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
   props.alert&& <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{cepitalice(props.alert.type)}</strong> :{cepitalice(props.alert.mes)}
  </div>
  )
}
