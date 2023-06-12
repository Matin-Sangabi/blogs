import React from "react";

const Prose = ({text}) => {
  const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });
  return (
    <article className="prose mt-8 max-w-screen-xl px-2 prose-2xl prose-p:indent-8 prose-h1:text-4xl prose-img:rounded-lg prose-img:shadow-md ">
      {renderHTML(text)}
    </article>
  );
};

export default Prose;
