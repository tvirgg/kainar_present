import Image from "next/image";
import "./landing_hero.scss";

const Landing_hero = () => (
  <section className="landing__intro">
    <div className="landing__intro-content">
      <h1 className="landing__intro-title">
        <span>pешения в области</span> <span>химии —</span>
        <br />
        <span>от лабораторных</span>
        <br />
        <span>до промышленных</span>
      </h1>
      <p className="landing__intro-description">производство и поставка химреактивов</p>
    </div>
    <div className="landing__intro-images_main">
        <Image className="landing__intro-image__main" src="/images/heroImage.png" alt="logo" width={300} height={200} />
        <Image className="landing__intro-image--blur_main" src="/images/heroImage.png" alt="logo" width={300} height={200} />
    </div>
  </section>
);

export default Landing_hero;
