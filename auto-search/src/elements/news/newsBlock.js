import React, { Component, Fragment } from "react";
import "./styles/index.css";
const DATA_LIST = [
  {
    title: "First",
    textArea:
      "Практический опыт показывает, что выбранный нами инновационный путь способствует подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач",
  },
  {
    title: "Second",
    textArea:
      "Повседневная практика показывает, что начало повседневной работы по формированию позиции обеспечивает широкому кругу специалистов участие в формировании экономической целесообразности принимаемых решений",
  },
  {
    title: "Third",
    textArea:
      "Дорогие друзья, дальнейшее развитие различных форм деятельности способствует подготовке и реализации направлений прогрессивного развития",
  },
];

class News extends Component {
  render() {
    return (
      <ul className="newsBlock">
        {DATA_LIST.map((element) => (
          <li>
            <h1>{element.title}</h1>
            <p>{element.textArea}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default News;
