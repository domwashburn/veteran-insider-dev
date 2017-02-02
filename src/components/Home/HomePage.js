import React, {Component} from 'react';
import {Link} from 'react-router';
// Import components
import Button from '../common/Button';
import Nav from '../common/Nav';

class HomePage extends Component {
  render() {
    return (
      <div>
        <header className="hero l-row">
          <div className="hero__content">
            <h1 className="copy--light title--md">Veteran Insider</h1>
            <h1 className="copy--light title--lg">Making It Easy to Hire Heros</h1>
            <p className="copy--light copy--md">Veteran Insider was founded by Veterans for Veterans. Our goal is to match Veterans with jobs based on their military skill-sets and any private sector experience they may have.</p>
            <Button>Join Now</Button>
          </div>
        </header>
        <main className="l-row">
          <div className="l-row-content l-row-content-md">
            <p className="copy--md">Whether you’re transitioning into the civilian workforce or you’re a an experienced professional, we’ve got your back.</p>
            <h2 className="title--md">Veterans</h2>
            <p className="copy--md">Sign up to receive career opportunities tailored to your unique skill-set, directly in your inbox.</p>
            <h3 className="title--sm">Build Your Profile</h3>
            <p className="copy--dark copy--sm">We’ll translate your military skill-set and job number into civilian terms, helping you to land the perfect job.</p>
            <h3 className="title--sm">The Right Career</h3>
            <p className="copy--dark copy--sm">Using natural language processing, we’re able to search thousands of open positions and deliver roles that you’re qualified for.</p>
            <Button>Find Jobs</Button>
            <Button>learn more</Button>
            <h2 className="title--md">Employers</h2>
            <p className="copy--md">We’ll translate veteran’s military skill-sets and match the right candidates to your job posting. </p>
            <h3 className="title--sm">Post Jobs</h3>
            <p className="copy--dark copy--sm">Connect your job postings to Veteran Insider and let our system  start the hunt for qualified applicants.</p>
            <h3 className="title--sm">The Right Candidate</h3>
            <p className="copy--dark copy--sm">Veteran Insider uses natural language processing to find the most relevant candidates, then connects them to your job posting.</p>
            <Button>Hire Heros</Button>
            <Button>learn more</Button>
          </div>
        </main>
        <section className="l-row sign-up">
          <form action="">
            <section id="sign-up-step-1">
              <h2 className="title--md">Ready? Let’s get started.</h2>
              <p className="copy--sm">Are you a veteran or an employer?</p>
              <input type="radio" name="user-type" value="veteran" />
              <label>Veteran</label>
              <input type="radio" name="user-type" value="employer" />
              <label>Employer</label>
              <h2 className="copy--sm">Sign up with your linked in account.</h2>
              <h2 className="copy--sm">or create an account with your email address.</h2>
              <div className="input-group">
                <input type="text" name="firstname" placeholder="first name"/>
                <input type="text" name="lastname" placeholder="last name"/>
              </div>
              <input type="email" name="email" placeholder="email"/>
              <input type="text" name="company" placeholder="company"/>
            </section>
            <section id="sign-up-step-2">
              <h2 className="title--md">First things first</h2>
              <label for="create-password" className="input-label">create password</label>
              <input type="password" name="create-password" placeholder="create password"/>
              <label for="confirm-password" className="input-label">confirm password</label>
              <input type="password" name="confirm-password" placeholder="confirm password"/>
            </section>
            <section id="sign-up-step-3">
              <h2 className="title--md">Service Information</h2>
              <h2 className="title--md">Work Experience</h2>
            </section>
            <section id="sign-up-step-4">
              <h2 className="title--md">Education and Certifications</h2>
              <h2 className="title--md">Languages and Skills</h2>
            </section>
            <section id="sign-up-step-4">
              <h2 className="title--md">Where are you looking to work?</h2>
            </section>
          </form>
        </section>
        <div className="progress-tracker">
          <div id="step-1" className="progress-tracker__step"></div>
          <div id="step-2" className="progress-tracker__step"></div>
          <div id="step-3" className="progress-tracker__step"></div>
          <div id="step-4" className="progress-tracker__step"></div>
        </div>
      </div>
    );
  }
}

export default HomePage;
