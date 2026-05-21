import { CardRow, CardStack } from './CardRow';

export function OpenSource() {
  return (
    <section className="block" id="open-source">
      <div className="section-head">
        <h2>Open Source</h2>
        <span className="kicker">CONTRIBUTIONS</span>
      </div>
      <CardStack>
        <CardRow
          name="Apache TVM"
          badge="contributor"
          meta="C++ / Python · upstream"
          desc="Upstreamed Vulkan texture memory support for the Adreno GPU backend, optimizing data access patterns and reducing inference time."
          links={[
            { href: 'https://github.com/apache/tvm/pull/18672', label: 'PR #18672', external: true },
          ]}
        />
        <CardRow
          name="llama.cpp"
          badge="contributor"
          meta="C/C++ · upstream"
          desc="Implemented Matrix ALU support via cooperative matrix extensions in the Vulkan backend. Enabled Q4 quantized inference and integrated CLML acceleration for Adreno GPUs."
          links={[
            { href: 'https://github.com/ggml-org/llama.cpp', label: 'repo', external: true },
          ]}
        />
      </CardStack>
    </section>
  );
}
