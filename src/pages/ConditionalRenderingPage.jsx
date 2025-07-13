import React from "react";
import TopicLayout from "../components/layout/TopicLayout";
import Theory from "../components/topics/ConditionalRendering/Theory";
import CodeSnippet from "../components/topics/ConditionalRendering/CodeSnippet";
import Example from "../components/topics/ConditionalRendering/Example";

function UseStatePage() {
  return (
    <TopicLayout
      title="Conditional Rendering"
      theory={<Theory />}
      code={<CodeSnippet />}
      example={<Example />}
    />
  );
}

export default UseStatePage;