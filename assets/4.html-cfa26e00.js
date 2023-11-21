const n=JSON.parse(`{"key":"v-18bc822e","path":"/javascript/4.html","title":"将一维数组按指定长度转为二维数组","lang":"zh-CN","frontmatter":{"icon":"article","category":["JavaScript文章"],"tag":["JS"],"editLink":false,"description":"将一维数组按指定长度转为二维数组 将一维数组按指定长度转为二维数组 function pages(arr, len) { const pages = [] arr.forEach((item, index) =&gt; { const page = Math.floor(index / len) if (!pages[page]) { pages[page] = [] } pages[page].push(item) }) return pages } // 使用 const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9] console.log(pages(arr, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8, 9]] console.log(pages(arr, 8)) // [[1, 2, 3, 4, 5, 6, 7, 8], [9]]","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/javascript/4.html"}],["meta",{"property":"og:site_name","content":"wang's blog"}],["meta",{"property":"og:title","content":"将一维数组按指定长度转为二维数组"}],["meta",{"property":"og:description","content":"将一维数组按指定长度转为二维数组 将一维数组按指定长度转为二维数组 function pages(arr, len) { const pages = [] arr.forEach((item, index) =&gt; { const page = Math.floor(index / len) if (!pages[page]) { pages[page] = [] } pages[page].push(item) }) return pages } // 使用 const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9] console.log(pages(arr, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8, 9]] console.log(pages(arr, 8)) // [[1, 2, 3, 4, 5, 6, 7, 8], [9]]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-21T03:32:28.000Z"}],["meta",{"property":"article:author","content":"身如古树不惊"}],["meta",{"property":"article:tag","content":"JS"}],["meta",{"property":"article:modified_time","content":"2023-11-21T03:32:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"将一维数组按指定长度转为二维数组\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-21T03:32:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"身如古树不惊\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"应用场景示例","slug":"应用场景示例","link":"#应用场景示例","children":[]}],"git":{"createdTime":1700480388000,"updatedTime":1700537548000,"contributors":[{"name":"wk","email":"1424257169@qq.com","commits":2}]},"readingTime":{"minutes":0.94,"words":283},"filePathRelative":"javascript/4.md","localizedDate":"2023年11月20日","excerpt":"<h1> 将一维数组按指定长度转为二维数组</h1>\\n<p>将一维数组按指定长度转为二维数组</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">pages</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">arr<span class=\\"token punctuation\\">,</span> len</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">const</span> pages <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n    arr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">item<span class=\\"token punctuation\\">,</span> index</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">const</span> page <span class=\\"token operator\\">=</span> Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">floor</span><span class=\\"token punctuation\\">(</span>index <span class=\\"token operator\\">/</span> len<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>pages<span class=\\"token punctuation\\">[</span>page<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            pages<span class=\\"token punctuation\\">[</span>page<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        pages<span class=\\"token punctuation\\">[</span>page<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>item<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">return</span> pages\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 使用</span>\\n<span class=\\"token keyword\\">const</span> arr <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">7</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">8</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">9</span><span class=\\"token punctuation\\">]</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">pages</span><span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">pages</span><span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">8</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// [[1, 2, 3, 4, 5, 6, 7, 8], [9]]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
