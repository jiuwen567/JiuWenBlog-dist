import{_ as t,c as s,o as a,a6 as i}from"./chunks/framework.DkFL-jqo.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"爬虫/抓包.md","filePath":"爬虫/抓包.md"}'),e={name:"爬虫/抓包.md"},p=i(`<h2 id="抓包" tabindex="-1">抓包 <a class="header-anchor" href="#抓包" aria-label="Permalink to &quot;抓包&quot;">​</a></h2><h2 id="_1-f12打开的开发者工具介绍" tabindex="-1">1. F12打开的开发者工具介绍 <a class="header-anchor" href="#_1-f12打开的开发者工具介绍" aria-label="Permalink to &quot;1. F12打开的开发者工具介绍&quot;">​</a></h2><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230105123906217.png" alt="image-20230105123906217"></p><p><strong>重点关注</strong></p><ul><li><p>网站首页一般为域名为名字的包</p></li><li><p>请求标头</p><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230105180041488.png" alt="image-20230105180041488"></p></li></ul><h2 id="_2-get请求和post请求的比较分析" tabindex="-1">2. GET请求和POST请求的比较分析 <a class="header-anchor" href="#_2-get请求和post请求的比较分析" aria-label="Permalink to &quot;2. GET请求和POST请求的比较分析&quot;">​</a></h2><h3 id="_2-1-get请求" tabindex="-1">2.1 GET请求 <a class="header-anchor" href="#_2-1-get请求" aria-label="Permalink to &quot;2.1 GET请求&quot;">​</a></h3><ol><li>请求行分析</li></ol><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230112202943066.png" alt="image-20230112202943066"></p><ol start="2"><li><p>请求头分析</p><ul><li><p>用户代理 user-agent</p><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230112203011298.png" alt="image-20230112203011298"></p></li><li><p>refer</p><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230112203107609.png" alt="image-20230112203107609"></p></li><li><p>cookie</p><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230112203149009.png" alt="image-20230112203149009"></p></li><li><p>payload</p><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230112203728979.png" alt="image-20230112203728979"></p></li><li><p><code>请求头不需要设置 Content-Type 字段</code>，设置了也不会去使用</p></li></ul></li><li><p>响应头分析</p></li></ol><blockquote><ul><li><p>content-type</p></li><li><p>set-cookie 服务器要求浏览器设置的cookie，cookie是身份令牌（登录的时候）</p></li></ul><p>（保持登录的状态，我们需要cookie）</p></blockquote><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230112203916425.png" alt="image-20230112203916425"></p><h3 id="_2-2-post请求" tabindex="-1">2.2 POST请求 <a class="header-anchor" href="#_2-2-post请求" aria-label="Permalink to &quot;2.2 POST请求&quot;">​</a></h3><ol><li>请求行分析</li></ol><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230112205817616.png" alt="image-20230112205817616"></p><ol start="2"><li>请求头分析</li></ol><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1 用户代理</span></span></code></pre></div><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230112205911260.png" alt="image-20230112205911260"></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2 referer</span></span></code></pre></div><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230112205928497.png" alt="image-20230112205928497"></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3 coookie</span></span></code></pre></div><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230112205941694.png" alt="image-20230112205941694"></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4 content-type(form表单类型提交)</span></span></code></pre></div><ol start="3"><li>响应头分析</li></ol><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1 content-type</span></span></code></pre></div><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230112210335093.png" alt="image-20230112210335093"></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2 set-cookie</span></span></code></pre></div><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230112210305764.png" alt="image-20230112210305764"></p><p><img src="https://typora567.oss-cn-chengdu.aliyuncs.com/temp_picture/image-20230112210445787.png" alt="image-20230112210445787"></p><h3 id="_2-3-get请求和post请求的比较结果" tabindex="-1">2.3 GET请求和POST请求的比较结果 <a class="header-anchor" href="#_2-3-get请求和post请求的比较结果" aria-label="Permalink to &quot;2.3 GET请求和POST请求的比较结果&quot;">​</a></h3><ol><li>请求行比较分析</li></ol><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1 请求类型不同</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2 网址构成不同</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3 ip不同</span></span></code></pre></div><table tabindex="0"><thead><tr><th>请求内容\\请求方式</th><th>get</th><th>post</th></tr></thead><tbody><tr><td>请求行</td><td>get，协议+域名，ip不同</td><td>post，协议+域名+资源路径+搜索字符串，ip不同</td></tr><tr><td>请求头</td><td>没有content-type</td><td>有content-type</td></tr><tr><td>响应头</td><td>没有set-cookie</td><td>set-cookie</td></tr></tbody></table><ol start="2"><li>请求头比较分析</li></ol><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># get请求不存在content-type,post请求相反</span></span></code></pre></div><ol start="3"><li>响应头比较分析</li></ol><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">get请求没有发现set</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cookie，post请求存在set</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cookie</span></span></code></pre></div>`,37),n=[p];function l(o,c,h,d,g,r){return a(),s("div",null,n)}const k=t(e,[["render",l]]);export{m as __pageData,k as default};
