import PropTypes from 'prop-types'
import React from 'react'
import philosophie from '../images/philosophy.jpg'
import scrum from '../images/scrum.gif'
import blogue from '../images/blogue.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Philosophy</h2>

          <a
            href="https://archipel.uqam.ca/5229/"
            alt="url pointing to my master thesis"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="image main">
              <img src={philosophie} alt="screenshot of my master's thesis in french" />
            </span>
          </a>
          <p>
            Loving thick and complex books, from an early age I had discovered the joys of abstract thinking.
            I've developped a taste to formal logic, philosophy of science and analytical philosophy being an undergrad student at Laval University.
            Coming from Arts and Humanities background, I've dedicated more efforts into logic and science to polish the rational side of my mind.
          </p>
          <p>
            Aiming at becoming a Philosophy teacher, I went into grad school in Montreal. I've completed a thesis about the concept of sophism thru the lense dialectics, linguistics and pragmatics.
            I have been a teacher for a short while and chose to pivot into technology.
          </p>
          <p>
            Since then philosophy had become a hobby to me. Between being an exercise of abstract thinking and an art of living.
            I've rediscovered the fundamentals : Plato and the philosophers of the Antiquity.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Career</h2>

          <a
            href="https://www.linkedin.com/in/boninmaxime/?locale=en_US"
            alt="url toward my LinkedIn profile"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="image main">
              <img src={scrum} alt="drawing of a stand-up meeting" />
            </span>
          </a>
          <p>
           After a short stint as a teacher, I've taken the challenge of a professional retraining.
           I wanted to be part of this technological revolution of the 21st century. Putting my critical thinking skills to work and developping concrete projects.
           Becoming a software developer !
          </p>
          <p>
            Out of college, I've worked with the R & D department of a small software company.
            First maintaining their medical office solution. Then dedicating all my time developping a mobile app and
            a restful web service.
          </p>
          <p>
            I'm currently working as a consultant for a large governmental agency. I'm part of a team that takes care of several systems used throughout the agency.
            I like to think this role enables me to improve my leadership qualities as well as my technical chops. 
            Solving problems and developing new features using an array of technologies : web apps, web apis, sql scripting, batch processes, etc.
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
