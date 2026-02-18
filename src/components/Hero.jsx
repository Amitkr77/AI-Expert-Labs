import "../styles/hero.css";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Learn AI & Future Tech</h1>
        <p>India’s most trusted AI & Data Science learning platform</p>

        <div className="hero-btns">
          <button>Explore Courses</button>
          <button className="outline">Free Demo</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="https://cdn.ourcrowd.com/wp-content/uploads/2021/12/AI_New-Feature-Image.png" alt="AI Technology Illustration" />
      </div>
    </section>
  );
};

export default Hero;
