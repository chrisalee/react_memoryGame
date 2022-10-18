import React from 'react';

const Card = (props) => {

    const itemClass = props.item.stat ? " active " + props.item.stat : ''

  return (
    <div className={'card' + itemClass} onClick={() => props.handleClick(props.id)}>
        <img src={props.item.img} alt=''/>
    </div>
  )
}

export default Card;