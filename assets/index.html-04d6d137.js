import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-cd801153.js";const t={},o=e(`<h1 id="判断是否为移动端浏览器" tabindex="-1"><a class="header-anchor" href="#判断是否为移动端浏览器" aria-hidden="true">#</a> 判断是否为移动端浏览器</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> flag <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 移动端</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// PC端</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[o];function i(p,l){return s(),a("div",null,c)}const u=n(t,[["render",i],["__file","index.html.vue"]]);export{u as default};