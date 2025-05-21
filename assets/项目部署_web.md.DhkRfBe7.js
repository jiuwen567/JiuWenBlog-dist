import{_ as s,c as a,o as n,a6 as i}from"./chunks/framework.DkFL-jqo.js";const F=JSON.parse('{"title":"一、docker 部署django","description":"","frontmatter":{},"headers":[],"relativePath":"项目部署/web.md","filePath":"项目部署/web.md"}'),p={name:"项目部署/web.md"},l=i(`<h1 id="一、docker-部署django" tabindex="-1">一、docker 部署django <a class="header-anchor" href="#一、docker-部署django" aria-label="Permalink to &quot;一、docker 部署django&quot;">​</a></h1><ol><li><p>生成requirements.txt</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> freeze</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span></code></pre></div></li><li><p>编写dockerfile文件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用基础镜像</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python:3.10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">COPY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /SSPBackend</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置工作目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WORKDIR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /SSPBackend</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装项目依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://pypi.tuna.tsinghua.edu.cn/simple</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行数据库迁移</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RUN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /SSPBackend/manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 暴露端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EXPOSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行 Django 项目</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CMD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;python&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/SSPBackend/manage.py&quot;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;runserver&quot;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;0.0.0.0:9000&quot;]</span></span></code></pre></div></li><li><p>创建docker镜像</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sspbackend</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div></li><li><p>创建django服务容器</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sspbackend_01</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p9001:9000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sspbackend</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sspbackend_02</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p9002:9000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sspbackend</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sspbackend_03</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p9003:9000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sspbackend</span></span></code></pre></div></li><li><p>浏览器访问</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http://服务器IP:9001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http://服务器IP:9002</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http://服务器IP:9003</span></span></code></pre></div></li></ol><h2 id="redis是本地的情况" tabindex="-1">redis是本地的情况 <a class="header-anchor" href="#redis是本地的情况" aria-label="Permalink to &quot;redis是本地的情况&quot;">​</a></h2><ul><li><p>创建虚拟网络</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> network</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_network</span></span></code></pre></div></li><li><p>启动一个代理容器</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis-proxy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --network</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_network</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8900:6379</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span></span></code></pre></div></li><li><p>修改DRF容器网络配置，使其加入到同一个Docker 网络中</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dspbackend_demo_01</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p8889:8888</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --network</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_network</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dspbackend_demo</span></span></code></pre></div></li><li><p>项目redis配置</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LOCATION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;redis://redis-proxy:6379/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">EXPIRE_TIME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 过期时间</span></span></code></pre></div></li></ul><h1 id="一、docker-部署vue" tabindex="-1">一、docker 部署vue <a class="header-anchor" href="#一、docker-部署vue" aria-label="Permalink to &quot;一、docker 部署vue&quot;">​</a></h1><ol><li><p>打包项目</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div></li><li><p>编写default.conf去替换默认nginx配置</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    server_name</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  127.0.0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #charset koi8-r;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #access_log  /var/log/nginx/log/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   /usr/share/nginx/html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        try_files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $uri $uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /index.html</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  index.html</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.htm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /api/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        proxy_pass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  http://116.62.230.206:9001/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    error_page</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   500</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 502</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 503</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 504</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /50x.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /50x.html</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #location ~ \\.php$ {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #location ~ \\.php$ {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #    root           html;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #    fastcgi_index  index.php;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #    include        fastcgi_params;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # concurs with nginx&#39;s one</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #location ~ /\\.ht {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #    deny  all;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p>有aps时也需要代理</p></blockquote></li><li><p>编写Dockerfile</p><div class="language-dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用nginx镜像</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除nginx 默认配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rm /etc/nginx/conf.d/default.conf</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加我们自己的配置 default.conf 在下面</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ADD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> default.conf /etc/nginx/conf.d/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 把刚才生成dist文件夹下的文件copy到nginx下面去</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COPY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dist/  /usr/share/nginx/html/</span></span></code></pre></div></li><li><p>创建镜像</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ad1.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div></li><li><p>创建服务容器</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ad1.0.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p5000:80</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ad1.0</span></span></code></pre></div></li></ol><h1 id="二、安装uwsgi以及nginx-部署集群" tabindex="-1">二、安装uwsgi以及nginx ，部署集群 <a class="header-anchor" href="#二、安装uwsgi以及nginx-部署集群" aria-label="Permalink to &quot;二、安装uwsgi以及nginx ，部署集群&quot;">​</a></h1><h3 id="_2-1-安装nginx" tabindex="-1">2.1 安装nginx <a class="header-anchor" href="#_2-1-安装nginx" aria-label="Permalink to &quot;2.1 安装nginx&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>apt-get install nginx -y</span></span></code></pre></div><h3 id="_2-2-安装uwsgi" tabindex="-1">2.2 安装uwsgi <a class="header-anchor" href="#_2-2-安装uwsgi" aria-label="Permalink to &quot;2.2  安装uwsgi&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pip install uwsgi</span></span></code></pre></div><h3 id="_2-3-在项目根目录下创建uwsgi目录文件-并在配置uwsgi-ini-配置文件" tabindex="-1">2.3. 在项目根目录下创建Uwsgi目录文件，并在配置uwsgi.ini 配置文件 <a class="header-anchor" href="#_2-3-在项目根目录下创建uwsgi目录文件-并在配置uwsgi-ini-配置文件" aria-label="Permalink to &quot;2.3. 在项目根目录下创建Uwsgi目录文件，并在配置uwsgi.ini 配置文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[uwsgi]</span></span>
<span class="line"><span>;socket     =0.0.0.0:9000</span></span>
<span class="line"><span>http         = 0.0.0.0:9000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>chdir        = /home/xiao/桌面/drftudy_后台/drfstudy_ht/</span></span>
<span class="line"><span>module       = drfstudy_ht.wsgi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>master       = true</span></span>
<span class="line"><span>processes    = 3</span></span>
<span class="line"><span>vacuum       =true</span></span>
<span class="line"><span>pidfile      = uwsgi.pid</span></span>
<span class="line"><span>daemonize    = uwsgi.log</span></span></code></pre></div><h3 id="_2-4-关闭settings-py文件中的debug-false" tabindex="-1">2.4 关闭settings.py文件中的DEBUG = False <a class="header-anchor" href="#_2-4-关闭settings-py文件中的debug-false" aria-label="Permalink to &quot;2.4 关闭settings.py文件中的DEBUG = False&quot;">​</a></h3><h3 id="_2-5-测试uwsgi-ini配置文件" tabindex="-1">2.5 测试uwsgi.ini配置文件 <a class="header-anchor" href="#_2-5-测试uwsgi-ini配置文件" aria-label="Permalink to &quot;2.5 测试uwsgi.ini配置文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>uwsgi -d --ini uwsgi.ini</span></span></code></pre></div><h3 id="_2-6-浏览器访问服务" tabindex="-1">2.6 浏览器访问服务 <a class="header-anchor" href="#_2-6-浏览器访问服务" aria-label="Permalink to &quot;2.6  浏览器访问服务&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://虚拟机IP:9000</span></span></code></pre></div><p>**注意：**访问成功之后，使用socket</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[uwsgi]</span></span>
<span class="line"><span>socket     =0.0.0.0:9000</span></span>
<span class="line"><span>;http         = 0.0.0.0:9000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>chdir        = /home/xiao/桌面/drftudy_后台/drfstudy_ht/</span></span>
<span class="line"><span>module       = drfstudy_ht.wsgi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>master       = true</span></span>
<span class="line"><span>processes    = 3</span></span>
<span class="line"><span>vacuum       =true</span></span>
<span class="line"><span>pidfile      = uwsgi.pid</span></span>
<span class="line"><span>daemonize    = uwsgi.log</span></span></code></pre></div><h3 id="_2-7-配置nginx服务-在-etc-nginx-conf-d目录下-创建drf25-pro-conf文件" tabindex="-1">2.7 配置nginx服务,在/etc/nginx/conf.d目录下，创建drf25_pro.conf文件 <a class="header-anchor" href="#_2-7-配置nginx服务-在-etc-nginx-conf-d目录下-创建drf25-pro-conf文件" aria-label="Permalink to &quot;2.7 配置nginx服务,在/etc/nginx/conf.d目录下，创建drf25_pro.conf文件&quot;">​</a></h3><p><strong>注意：需要管理员权限</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream drf25{</span></span>
<span class="line"><span>      server 192.168.162.129:9000;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>        listen 80;</span></span>
<span class="line"><span>        server_name 192.168.162.129 127.0.0.1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        root /home/guxuan/桌面/drf25/dist/;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>                alias /home/guxuan/桌面/drf25/dist/;</span></span>
<span class="line"><span>                index index.html index/htm;</span></span>
<span class="line"><span>                try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location ~/api {</span></span>
<span class="line"><span>                rewrite  ^/api/(.*)$ /$1 break;</span></span>
<span class="line"><span>                uwsgi_pass drf25;</span></span>
<span class="line"><span>                include /etc/nginx/uwsgi_params;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	 location ~/aps {</span></span>
<span class="line"><span>            rewrite  ^/aps/(.*)$ /$1 break;</span></span>
<span class="line"><span>            proxy_pass http://192.168.162.129:8888;</span></span>
<span class="line"><span>            proxy_set_header Host $host;</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-8-搭建django服务集群" tabindex="-1">2.8 搭建django服务集群 <a class="header-anchor" href="#_2-8-搭建django服务集群" aria-label="Permalink to &quot;2.8 搭建django服务集群&quot;">​</a></h3><h4 id="_2-8-1-创建dockerfile文件" tabindex="-1">2.8.1 创建dockerfile文件 <a class="header-anchor" href="#_2-8-1-创建dockerfile文件" aria-label="Permalink to &quot;2.8.1 创建dockerfile文件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 使用基础镜像</span></span>
<span class="line"><span>FROM python:3.10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COPY . /drf25</span></span>
<span class="line"><span># 设置工作目录</span></span>
<span class="line"><span>WORKDIR /drf25</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>COPY ./requirements.txt /drf25/requirements.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装项目依赖</span></span>
<span class="line"><span>RUN pip install -r requirements.txt -i https://pypi.douban.com/simple/</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 运行数据库迁移</span></span>
<span class="line"><span>RUN python /drf25/drf25/manage.py migrate</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 暴露端口</span></span>
<span class="line"><span>EXPOSE 9000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 运行 Django 项目</span></span>
<span class="line"><span>#CMD [&quot;python&quot;, &quot;/drf25/drf25/manage.py&quot;, &quot;runserver&quot;, &quot;0.0.0.0:9000&quot;]</span></span>
<span class="line"><span>CMD [&quot;uwsgi&quot;,&quot;--ini&quot;, &quot;/drf25/drf25/Uwsgi/uwsgi.ini&quot;]</span></span></code></pre></div><h3 id="_2-8-2-修改uwsgi配置文件" tabindex="-1">2.8.2 修改uwsgi配置文件 <a class="header-anchor" href="#_2-8-2-修改uwsgi配置文件" aria-label="Permalink to &quot;2.8.2  修改uwsgi配置文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[uwsgi]</span></span>
<span class="line"><span>socket     =0.0.0.0:9000</span></span>
<span class="line"><span>;http         = 0.0.0.0:9000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>chdir        = /home/xiao/桌面/drftudy_后台/drfstudy_ht/</span></span>
<span class="line"><span>module       = drfstudy_ht.wsgi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>master       = true</span></span>
<span class="line"><span>processes    = 3</span></span>
<span class="line"><span>vacuum       =true</span></span>
<span class="line"><span>pidfile      = uwsgi.pid</span></span></code></pre></div><h4 id="_2-8-3-创建docker镜像" tabindex="-1">2.8.3 创建docker镜像 <a class="header-anchor" href="#_2-8-3-创建docker镜像" aria-label="Permalink to &quot;2.8.3 创建docker镜像&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker build -t drf25_uwsgi .</span></span></code></pre></div><h4 id="_2-8-4-创建django服务容器" tabindex="-1">2.8.4 创建django服务容器 <a class="header-anchor" href="#_2-8-4-创建django服务容器" aria-label="Permalink to &quot;2.8.4 创建django服务容器&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -d --name django_demo_01 -p9001:9000 drf25_uwsgi</span></span>
<span class="line"><span>docker run -d --name django_demo_02 -p9002:9000 drf25_uwsgi</span></span>
<span class="line"><span>docker run -d --name django_demo_03 -p9003:9000 drf25_uwsgi</span></span></code></pre></div><h4 id="_2-8-5-nginx配置服务" tabindex="-1">2.8.5 nginx配置服务 <a class="header-anchor" href="#_2-8-5-nginx配置服务" aria-label="Permalink to &quot;2.8.5 nginx配置服务&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>upstream drf25{</span></span>
<span class="line"><span>        server 192.168.162.129:9001;</span></span>
<span class="line"><span>	server 192.168.162.129:9002;</span></span>
<span class="line"><span>	server 192.168.162.129:9003;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>        listen 80;</span></span>
<span class="line"><span>        server_name 192.168.162.129 127.0.0.1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        root /home/guxuan/桌面/drf25/dist/;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>                alias /home/guxuan/桌面/drf25/dist/;</span></span>
<span class="line"><span>                index index.html index/htm;</span></span>
<span class="line"><span>                try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location ~/api {</span></span>
<span class="line"><span>                rewrite  ^/api/(.*)$ /$1 break;</span></span>
<span class="line"><span>                uwsgi_pass drf25;</span></span>
<span class="line"><span>                include /etc/nginx/uwsgi_params;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	 location ~/aps {</span></span>
<span class="line"><span>            rewrite  ^/aps/(.*)$ /$1 break;</span></span>
<span class="line"><span>            proxy_pass http://192.168.162.129:8888;</span></span>
<span class="line"><span>            proxy_set_header Host $host;</span></span>
<span class="line"><span>            proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,34),e=[l];function t(h,k,d,r,c,o){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{F as __pageData,u as default};
