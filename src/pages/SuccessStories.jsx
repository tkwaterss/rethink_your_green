import React from 'react'
import ExpandedSuccessStoryCard from '../components/UI/ExpandedSuccessStoryCard'
import classes from './SuccessStories.module.css';

const SuccessStories = () => {
  return (
    <section className={classes.successStoriesPage}>
      <h2>Success Stories</h2>
      <div className={classes.storyCards}>
        <ExpandedSuccessStoryCard />
        <ExpandedSuccessStoryCard />
        <ExpandedSuccessStoryCard />
        <ExpandedSuccessStoryCard />
      </div>
    </section>
  )
}

export default SuccessStories