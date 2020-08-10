import React from "react";

const renderedItems = (items) =>
  items.map((item) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

const Accordion = ({ items }) => (
  <div className="ui styled accordion">{renderedItems(items)}</div>
);

export default Accordion;
