const e=JSON.parse(`{"key":"v-7da8961a","path":"/posts/essays/babel.html","title":"Babel工具","lang":"zh-CN","frontmatter":{"icon":"article","category":["前端技术随笔"],"tag":["JS","Babel"],"editLink":false,"description":"Babel工具 引言 Babel是一个工具链，主要用于将采用ECMAScript 2015+语法编写的代码转换为向后兼容的 JavaScript语法，以便能够运行在当前和旧版本的浏览器或其他环境中。 结构 // babel.config.js module.exports = { ..., envName: \\"development\\", plugins: [], presets: [], passPerPreset: false, targets: {}, browserslistConfigFile: true, browserslistEnv: undefined, inputSourceMap: true ... }","head":[["meta",{"property":"og:url","content":"https://sucessk.github.io/posts/essays/babel.html"}],["meta",{"property":"og:site_name","content":"wang's blog"}],["meta",{"property":"og:title","content":"Babel工具"}],["meta",{"property":"og:description","content":"Babel工具 引言 Babel是一个工具链，主要用于将采用ECMAScript 2015+语法编写的代码转换为向后兼容的 JavaScript语法，以便能够运行在当前和旧版本的浏览器或其他环境中。 结构 // babel.config.js module.exports = { ..., envName: \\"development\\", plugins: [], presets: [], passPerPreset: false, targets: {}, browserslistConfigFile: true, browserslistEnv: undefined, inputSourceMap: true ... }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-23T09:02:02.000Z"}],["meta",{"property":"article:author","content":"身如古树不惊"}],["meta",{"property":"article:tag","content":"JS"}],["meta",{"property":"article:tag","content":"Babel"}],["meta",{"property":"article:modified_time","content":"2024-02-23T09:02:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Babel工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-23T09:02:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"身如古树不惊\\",\\"url\\":\\"https://sucessk.github.io\\"}]}"]]},"headers":[{"level":2,"title":"结构","slug":"结构","link":"#结构","children":[]},{"level":2,"title":"功能","slug":"功能","link":"#功能","children":[]},{"level":2,"title":"@babel/core","slug":"babel-core","link":"#babel-core","children":[]},{"level":2,"title":"@babel/cli","slug":"babel-cli","link":"#babel-cli","children":[]},{"level":2,"title":"@babel/preset-env","slug":"babel-preset-env","link":"#babel-preset-env","children":[{"level":3,"title":"preset","slug":"preset","link":"#preset","children":[]},{"level":3,"title":"env","slug":"env","link":"#env","children":[]}]},{"level":2,"title":"polyfill","slug":"polyfill","link":"#polyfill","children":[{"level":3,"title":"功能","slug":"功能-1","link":"#功能-1","children":[]}]},{"level":2,"title":"@babel/polyfill","slug":"babel-polyfill","link":"#babel-polyfill","children":[]},{"level":2,"title":"core-js","slug":"core-js","link":"#core-js","children":[]},{"level":2,"title":"@babel/runtime","slug":"babel-runtime","link":"#babel-runtime","children":[]},{"level":2,"title":"@babel/plugin-transform-runtime","slug":"babel-plugin-transform-runtime","link":"#babel-plugin-transform-runtime","children":[]}],"git":{"createdTime":1708678922000,"updatedTime":1708678922000,"contributors":[{"name":"wk","email":"1424257169@qq.com","commits":1}]},"readingTime":{"minutes":6.52,"words":1956},"filePathRelative":"posts/essays/babel.md","localizedDate":"2024年2月23日","excerpt":"<h1> Babel工具</h1>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">引言</p>\\n<p>Babel是一个工具链，主要用于将采用ECMAScript 2015+语法编写的代码转换为向后兼容的 JavaScript语法，以便能够运行在当前和旧版本的浏览器或其他环境中。</p>\\n</div>\\n<h2> 结构</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// babel.config.js</span>\\nmodule<span class=\\"token punctuation\\">.</span>exports <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">envName</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"development\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">plugins</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">presets</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">passPerPreset</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">targets</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">browserslistConfigFile</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">browserslistEnv</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">undefined</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">inputSourceMap</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span>\\n    <span class=\\"token operator\\">...</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};