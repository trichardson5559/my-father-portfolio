import React from 'react';
import './About.scss';
import AboutImage from '../assets/keith_ucf.jpg'; // Replace with the actual image path

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-text">
          <h1>Biography</h1>
          <p>
          Hi, I’m Keith Richardson—a proud father, professor, CPA, real estate agent, and lifelong learner. I’ve been fortunate to live a life full of blessings and achievements, but what brings me the most pride is being a dad to six amazing kids: Nysa, Kysa, Trevon, Tyrell, Kyre, and Tyrese. Five of them are currently in college, with my youngest, Tyrese, navigating the adventures of high school. My daughter Nysa recently made me a proud grandfather to my first grandchild, Camryn. Becoming "Grandpa Keith" is a title I cherish deeply.
          
          </p>
          
          <p>
          I’m a first-generation college student who worked hard to establish a successful life—not just financially, but in all aspects of fulfillment. Education has always been important to me, and I’m a proud graduate of the University of Central Florida (Go Knights!). I love everything about UCF, from the memories I made there to the sports teams I cheer for to this day. Just recently, I graduated with a PhD from Liberty University, and I couldn’t be more excited to use my knowledge and experience to continue growing in my career.
          
          </p>

          <p>
          In my professional life, I wear many hats. I’m a professor, helping students find their potential, a CPA helping individuals and businesses thrive, and a real estate agent navigating the complexities of the market. I also own two wonderful dogs who make life a bit more lively in our San Antonio home.
          
          </p>

          <p>
          In my free time, you’ll find me enjoying the little things that make life rich. I love playing basketball, tending to my garden, and expressing myself on the piano. Barbecuing for my family is one of my favorite pastimes, especially when gummy bears are involved—yes, they’re a personal favorite! And let’s not forget one of my most defining traits: I truly believe I’m the most handsome man in the world, which my family knows well thanks to my frequent selfie spam in our group chat. (If I don’t remind them, who will?)
          
          </p>

          <p>
          And speaking of my family, I have to give a special shoutout to my favorite child, Tyrell. Not only is he the gigachad of the Richardson clan, but he’s also the creative mastermind behind this very website. If you’re enjoying it, you have Tyrell to thank!
          
          </p>

          <p>
          While I’ve achieved a lot in life, I have many more goals I want to reach. I believe life is about constant growth, whether it’s in your career, your relationships, or the new skills you pick up along the way. I’m incredibly proud of the journey so far, and I’m excited for what’s still to come. Thanks for stopping by to learn a little more about me.
          
          </p>
        </div>
        <div className="about-image">
          <img src={AboutImage} alt="About" />
        </div>
      </div>
    </section>
  );
};

export default About;
