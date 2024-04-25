import styled from "styled-components";
import buttonData from "../data/Buttons.json";
import { Buttons } from "./Buttons";
import { HeroCard } from "./HeroCard";

const StyledHero = styled.section`
  font-family: "AvenirMedium", sans-serif;

  margin-top: 173px;

  .launch-section {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-image: url("/heading.png");
    background-size: cover;
    background-position: center 50%;
    background-repeat: no-repeat;
  }
  .web-title {
    position: relative;
  }

  .web-title-logo {
    position: absolute;
    top: 36%;
    left: 6%;
  }

  h1 {
    margin-top: 100px;
    font-family: "Calistoga", serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 75px;
    letter-spacing: 7.2px;
  }

  h2 {
    color: #000;

    font-family: "AvenirMedium", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .title-extra-info {
    margin: 160px auto 8rem;
    padding: 0 2rem;
    text-align: center;
  }

  .slogan-keyword {
    margin-top: 10rem;
    color: #000;
    font-family: "AvenirBlack", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  .start-btn {
    margin-top: 15vw;
    margin-bottom: 1rem;
  }

  .small-screen-btn {
    display: none;
  }

  .customer-comments {
    width: 100%;
    background-color: #e4dbd2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 8rem;
  }

  .customer-comments li {
    margin-right: 7vw;
  }

  #last-comment {
    margin-right: 0;
  }

  li {
    list-style-type: none;
    margin: 0 auto;
  }

  .comment-keyword {
    color: #000;
    font-family: "AvenirBlack", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .comment-break {
    display: block;
  }

  @media (max-width: 1200px) {
    margin-top: 169px;
  }

  @media (max-width: 985px) {
    margin-top: 155px;
    .line-break {
      display: block;
    }
  }

  @media (max-width: 744px) {
    margin-top: 79px;
    .sub-title {
      font-size: 30px;
    }
    .title-extra-info,
    .slogan-keyword {
      font-size: 24px;
    }

    .customer-comments {
      margin: 0 auto;
      padding: 2rem 26vw;
      text-align: center;
    }

    .customer-comments li {
      margin-right: 0;
      transform: translateX(20px);
    }

    .comment-break {
      display: inline;
    }

    .not-first-comment {
      display: none;
    }

    .big-screen-btn {
      display: none;
    }
    .small-screen-btn {
      display: block;
    }
  }

  @media (max-width: 428px) {
  }
`;

const heroStart = buttonData[0];

export const Hero = () => {
  return (
    <StyledHero className="hero-section">
      <div className="launch-section">
        <div className="web-title">
          <img
            className="web-title-logo"
            src="./curve.png"
            alt="web-title-logo"
          />
          <h1>Curve Pilates</h1>
        </div>
        <h2 className="sub-title">Wellness and Movement</h2>
        <h2 className="title-extra-info">
          Helping <span className="slogan-keyword">everybody</span> to
          <span className="line-break"> strengthen, heal & recharge</span>
        </h2>
        <div className="big-screen-btn">
          <Buttons buttonText={heroStart.buttonText} fontSize={24} />
        </div>
        <div className="small-screen-btn">
          <Buttons buttonText={heroStart.buttonText} fontSize={18} />
        </div>
      </div>
      <ul className="customer-comments">
        <li className="comment">
          “I always feels <span className="comment-keyword">so good</span> after
          a session, I saw improvements after a few weeks”
          <span className="comment-break">- Charlotte</span>
        </li>
        <li className="comment not-first-comment">
          “The teachers are <span className="comment-keyword">fantastic </span>
          and the classes are so fun!”
          <span className="comment-break">- Ben</span>
        </li>
        <li className="comment not-first-comment" id="last-comment">
          “Pilates is the only exercise that has worked for me,
          <span className="comment-keyword"> no more back pain</span>”
          <span className="comment-break">- Jesse</span>
        </li>
      </ul>
      <HeroCard />
    </StyledHero>
  );
};
