import React from "react";
import TopicLayout from "../components/layout/TopicLayout";
import Theory from "../components/topics/UseState/Theory";
import CodeSnippet from "../components/topics/UseState/CodeSnippet";
import Example from "../components/topics/UseState/Example";

function UseStatePage() {
  return (
    <TopicLayout
      title="useState Hook"
      theory={<Theory />}
      code={<CodeSnippet />}
      example={<Example />}
    />
  );
}

export default UseStatePage;
