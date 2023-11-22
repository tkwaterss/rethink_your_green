import React from 'react'
import classes from './SuccessStoryCard.module.css';
import clover from '../../images/verticle_clover_field.jpg';

//TODO Card content will be supplied from database eventually

const SuccessStoryCard = () => {
  return (
    <div className={classes.successStoryCard}>
      <div src={clover} alt="clover lawn" className={classes.storyImage}/>
      <div className={classes.storyDescription}>
        <h4>Huge Success</h4>
        <p>This project went great, Lawn looks amazing now. We encountered some difficulties but persivered and delivered another amazing product. Another line about the project to make the text overflow.</p>
      </div>
    </div>
  )
}

export default SuccessStoryCard