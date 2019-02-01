import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {

  const { id, name, sprites, type, order  } = pokemon

  return (
    <section className="detail-view">
      <img className='sprite-image' src={sprites} />
      <div className='data-wrapper'>
        <h3 className='data-name'>ID: {id} {name}</h3>
        <h4 className='data-char'>Type: {type}</h4>
        <h4 className='data-char'>Order: {order}</h4>
      </div>
    </section>
  )
}

export default DetailView;
