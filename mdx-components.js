import CodeBlock from "@/components/blog/CodeBlock";
import Callout from "@/components/blog/Callout";
import ImageBlock from "@/components/blog/ImageBlock";
import LinkBlock from "@/components/blog/LinkBlock";

export function getMDXComponents() {
  return {
    pre: (props) => <CodeBlock {...props} />,
    blockquote: (props) => <Callout type="info" {...props} />,
    img: (props) => <ImageBlock {...props} />,
     a: (props) => <LinkBlock {...props} />,
    Callout,
    CodeBlock,
    ImageBlock,
    LinkBlock
  };
}
