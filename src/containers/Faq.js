import React from "react";
import "../assets/styles/faq.css";
import QA from "../components/QA";
class Faq extends React.Component {
  render() {
    return (
      <div className="faq-container" id="faq">
        <h3>Maswali/sFAQs</h3>
        <div>
          <QA
            question="KalaFood ni NINI?"
            answer="KalaFood ni mfumo wa kununulia chakula kutoka migahawa iliokaribu nawe popote ulipo"
          />
          <QA
            question="Natumiaje KalaFood?"
            answer="Unapo hitaji chakula cha aina yoyote unaingia kalafood na kuki Search then utaona migahawa ya karibu inayoo pika chakula hicho kisha una agiza na kikiwa tayari unaitwa kukichukua"
          />
        </div>
      </div>
    );
  }
}

export default Faq;
