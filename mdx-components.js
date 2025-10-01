// import CodeBlock from "@/components/blog/CodeBlock";
// import Callout from "@/components/blog/Callout";

// // Rename the function to remove the "use" prefix
// export function getMDXComponents() {
//   const components = {
//     pre: (props) => <CodeBlock {...props} />,
//     blockquote: (props) => <Callout type="info" {...props} />,
//   };
//   return components;
// }

import CodeBlock from "@/components/blog/CodeBlock";
import Callout from "@/components/blog/Callout";

export function getMDXComponents() {
  return {
    pre: (props) => <CodeBlock {...props} />,
    blockquote: (props) => <Callout type="info" {...props} />,
    Callout,   // ✅ allow using <Callout> directly in MDX
    CodeBlock, // ✅ allow using <CodeBlock> directly in MDX
  };
}
