
import TableOfContents from '@/components/blog/TableOfContents';
import CodeBlock from '@/components/blog/CodeBlock';
import Callout from '@/components/blog/Callout';
import ShareSection from '@/components/blog/ShareSection';
import styles from '@/styles/components/blog/BlogContent.module.css';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const components = {
  pre: (props) => <CodeBlock {...props} />, // custom code block
  blockquote: (props) => <Callout type="info" {...props} />, // map blockquote to Callout
};

const BlogContent = async ({ content }) => {

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });
  
  return (
    <main className={styles.blogContent}>
      <TableOfContents />
      <MDXRemote {...mdxSource} components={components} />

      <p>
        The web development landscape is evolving at an unprecedented pace. As we move through 2025, 
        several key trends are reshaping how we build, deploy, and maintain web applications. 
        In this comprehensive guide, we'll explore the most significant developments that every developer should be aware of.
      </p>

      <h2 id="ai-integration">🤖 AI-Powered Development</h2>
      
      <p>
        Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development process. 
        From code generation to automated testing, AI is revolutionizing how we approach software development.
      </p>

      <Callout type="info" title="💡 Key Insight">
        <p>GitHub Copilot and similar AI coding assistants are now used by over 70% of professional developers, significantly increasing productivity and code quality.</p>
      </Callout>

      <h3>AI Code Generation</h3>
      
      <p>
        Modern AI tools can generate entire components, functions, and even complete applications based on natural language descriptions. 
        Here's an example of how AI might generate a React component:
      </p>

      <CodeBlock 
        language="JavaScript (React)"
        code={`// AI-generated React component for user profile
import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="user-profile">
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserProfile;`}
      />

      <h2 id="serverless">☁️ Serverless Architecture Evolution</h2>
      
      <p>
        Serverless computing continues to gain momentum, with edge computing bringing unprecedented performance improvements. 
        The combination of serverless functions with edge deployment is creating new possibilities for global applications.
      </p>

      <blockquote className={styles.blockquote}>
        "Serverless is not about eliminating servers, it's about eliminating server management complexity while maximizing scalability and cost efficiency."
      </blockquote>

      <h3>Edge Functions</h3>
      
      <p>
        Edge functions run closer to users, reducing latency and improving performance. Popular platforms like Vercel Edge Functions, 
        Cloudflare Workers, and AWS Lambda@Edge are making this technology accessible to developers of all levels.
      </p>

      <Callout type="success" title="✅ Performance Boost">
        <p>Edge functions can reduce response times by up to 80% compared to traditional server deployments by running code closer to end users.</p>
      </Callout>

      <h2 id="frameworks">⚛️ Next-Gen JavaScript Frameworks</h2>
      
      <p>
        The JavaScript ecosystem continues to evolve with new frameworks and meta-frameworks that prioritize performance, 
        developer experience, and maintainability.
      </p>

      <h3>Key Players in 2025</h3>
      
      <ul>
        <li><strong>Remix</strong> - Full-stack web framework focused on web standards</li>
        <li><strong>SvelteKit</strong> - The all-in-one web framework with incredible performance</li>
        <li><strong>Solid.js</strong> - Fine-grained reactivity without Virtual DOM</li>
        <li><strong>Qwik</strong> - Resumable framework for instant loading</li>
      </ul>

      <CodeBlock
        language="JavaScript (Solid.js)"
        code={`// Solid.js component with fine-grained reactivity
import { createSignal, createEffect } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);
  const [doubled, setDoubled] = createSignal(0);

  createEffect(() => {
    setDoubled(count() * 2);
  });

  return (
    <div>
      <button onClick={() => setCount(count() + 1)}>
        Count: {count()}
      </button>
      <p>Doubled: {doubled()}</p>
    </div>
  );
}`}
      />

      <h2 id="performance">⚡ Performance-First Approach</h2>
      
      <p>
        Web performance is no longer an afterthought—it's a fundamental requirement. Core Web Vitals, 
        bundle optimization, and progressive enhancement are becoming standard practices.
      </p>

      <h3>Key Performance Metrics</h3>
      
      <ol>
        <li><strong>Largest Contentful Paint (LCP)</strong> - Should occur within 2.5 seconds</li>
        <li><strong>First Input Delay (FID)</strong> - Should be less than 100 milliseconds</li>
        <li><strong>Cumulative Layout Shift (CLS)</strong> - Should be less than 0.1</li>
      </ol>

      <Callout type="warning" title="⚠️ Important Note">
        <p>Google's Page Experience update makes Core Web Vitals a ranking factor, making performance optimization crucial for SEO success.</p>
      </Callout>

      <h2 id="accessibility">♿ Accessibility as Standard</h2>
      
      <p>
        Accessibility is shifting from "nice to have" to "must have." Modern development tools are integrating 
        accessibility checks directly into the development workflow, making it easier to build inclusive applications.
      </p>

      <h3>Automated Accessibility Testing</h3>
      
      <p>
        Tools like axe-core, eslint-plugin-jsx-a11y, and Lighthouse accessibility audits are becoming 
        standard parts of CI/CD pipelines.
      </p>

      <CodeBlock
        language="JavaScript (Jest + axe)"
        code={`// Automated accessibility testing with Jest and axe
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import MyComponent from './MyComponent';

expect.extend(toHaveNoViolations);

test('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});`}
      />

      <h2 id="conclusion">🔮 Looking Ahead</h2>
      
      <p>
        The future of web development is exciting and full of possibilities. As we continue through 2025, 
        we can expect to see even more innovations in areas like WebAssembly, progressive web apps, 
        and immersive web experiences with WebXR.
      </p>

      <p>
        The key to staying relevant in this rapidly evolving landscape is continuous learning and experimentation. 
        Don't be afraid to try new technologies, but also remember that fundamentals matter. 
        A solid understanding of web standards, performance principles, and user experience will serve you well 
        regardless of which specific technologies come and go.
      </p>

      <Callout type="info" title="🚀 Action Items">
        <p>
          Start experimenting with one new technology mentioned in this post. Whether it's trying out Solid.js, 
          setting up edge functions, or implementing automated accessibility testing—pick one and dive in!
        </p>
      </Callout>

      <p>
        What trends are you most excited about? Have you already started implementing any of these technologies 
        in your projects? I'd love to hear your thoughts and experiences in the comments below.
      </p>
      <ShareSection />
    </main>
  );
};

export default BlogContent;