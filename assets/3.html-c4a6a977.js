const n=JSON.parse(`{"key":"v-1707a98f","path":"/javascript/3.html","title":"多种数组去重性能对比","lang":"zh-CN","frontmatter":{"icon":"article","category":["JavaScript文章"],"tag":["JS"],"editLink":false,"description":"多种数组去重性能对比 测试模板 // 创建一个 1 ~ 10w 的数组，Array.from为ES6语法 let arr1 = Array.from(new Array(1000000), (x, index) =&gt; { return index }) let arr2 = Array.from(new Array(500000), (x, index) =&gt; { return index + index }) let start = new Date().getTime() console.log('开始数组去重') // 数组去重 function distinct(a, b) { let arr = a.concat(b); // 去重方法 } console.log('去重后的长度', distinct(arr1, arr2).length) let end = new Date().getTime() console.log('耗时', end - start + 'ms')","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/javascript/3.html"}],["meta",{"property":"og:site_name","content":"wang's blog"}],["meta",{"property":"og:title","content":"多种数组去重性能对比"}],["meta",{"property":"og:description","content":"多种数组去重性能对比 测试模板 // 创建一个 1 ~ 10w 的数组，Array.from为ES6语法 let arr1 = Array.from(new Array(1000000), (x, index) =&gt; { return index }) let arr2 = Array.from(new Array(500000), (x, index) =&gt; { return index + index }) let start = new Date().getTime() console.log('开始数组去重') // 数组去重 function distinct(a, b) { let arr = a.concat(b); // 去重方法 } console.log('去重后的长度', distinct(arr1, arr2).length) let end = new Date().getTime() console.log('耗时', end - start + 'ms')"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-21T03:32:28.000Z"}],["meta",{"property":"article:author","content":"身如古树不惊"}],["meta",{"property":"article:tag","content":"JS"}],["meta",{"property":"article:modified_time","content":"2023-11-21T03:32:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多种数组去重性能对比\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-21T03:32:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"身如古树不惊\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"测试模板","slug":"测试模板","link":"#测试模板","children":[]},{"level":2,"title":"测试代码","slug":"测试代码","link":"#测试代码","children":[]},{"level":2,"title":"结论","slug":"结论","link":"#结论","children":[]}],"git":{"createdTime":1700480388000,"updatedTime":1700537548000,"contributors":[{"name":"wk","email":"1424257169@qq.com","commits":2}]},"readingTime":{"minutes":2.07,"words":620},"filePathRelative":"javascript/3.md","localizedDate":"2023年11月20日","excerpt":"<h1> 多种数组去重性能对比</h1>\\n<h2> 测试模板</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 创建一个 1 ~ 10w 的数组，Array.from为ES6语法</span>\\n<span class=\\"token keyword\\">let</span> arr1 <span class=\\"token operator\\">=</span> Array<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">from</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Array</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1000000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">x<span class=\\"token punctuation\\">,</span> index</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span> \\n  <span class=\\"token keyword\\">return</span> index\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">let</span> arr2 <span class=\\"token operator\\">=</span> Array<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">from</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Array</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">500000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">x<span class=\\"token punctuation\\">,</span> index</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> index <span class=\\"token operator\\">+</span> index\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">let</span> start <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Date</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getTime</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'开始数组去重'</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// 数组去重</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">distinct</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">a<span class=\\"token punctuation\\">,</span> b</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> arr <span class=\\"token operator\\">=</span> a<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">concat</span><span class=\\"token punctuation\\">(</span>b<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token comment\\">// 去重方法</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n\\n\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'去重后的长度'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">distinct</span><span class=\\"token punctuation\\">(</span>arr1<span class=\\"token punctuation\\">,</span> arr2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">let</span> end <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Date</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getTime</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'耗时'</span><span class=\\"token punctuation\\">,</span> end <span class=\\"token operator\\">-</span> start <span class=\\"token operator\\">+</span> <span class=\\"token string\\">'ms'</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
