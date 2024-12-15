import{_ as s,c as i,o as a,a6 as l}from"./chunks/framework.DkFL-jqo.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"八股/汇编/数据传送指令.md","filePath":"八股/汇编/数据传送指令.md"}'),n={name:"八股/汇编/数据传送指令.md"},p=l(`<h2 id="数据传送指令" tabindex="-1">数据传送指令 <a class="header-anchor" href="#数据传送指令" aria-label="Permalink to &quot;数据传送指令&quot;">​</a></h2><ol><li>通用传送指令</li><li>堆栈传送指令</li><li>I/O传送指令</li></ol><h2 id="通用传送指令" tabindex="-1">通用传送指令 <a class="header-anchor" href="#通用传送指令" aria-label="Permalink to &quot;通用传送指令&quot;">​</a></h2><h2 id="mov指令" tabindex="-1">MOV指令 <a class="header-anchor" href="#mov指令" aria-label="Permalink to &quot;MOV指令&quot;">​</a></h2><p><code>MOV 目标操作数，源操作数</code></p><p>将源操作数传送入目的地址，源地址内容不变，不影响状态标志。即：(源操作数)→目标</p><h3 id="语法规则" tabindex="-1">语法规则 <a class="header-anchor" href="#语法规则" aria-label="Permalink to &quot;语法规则&quot;">​</a></h3><ul><li><p>立即数不能作为目的操作数</p><ul><li>例： MOV 1234H，AX ；非法指令</li></ul></li><li><p>源、目的操作数不能同时为存储器操作数。</p><ul><li>例： • ADD [DI]，[SI] ；非法指令</li></ul></li><li><p>CS或IP不能作为目的操作数，任何以CS或IP为目标 的传送指令都是非法的</p></li><li><p>源操作数是立即数时，段寄存器不能作为目的操作数。</p></li><li><p>例：MOV DS，1000H ；是非法指令</p></li><li><blockquote><p>为了把立即数的值传送给段寄存器，通常可以借用 一个寄存器/存储器操作数作为过渡。例如： MOV AX，DATA ；DATA为数据段名 ；编译后即为DATA段的段基址、立即数 •MOV DS，AX</p></blockquote></li><li><p>任何一条指令必须明确(例如包含 寄存器或使用PTR)/隐含指定每个操作数的类型(长度)！</p></li><li><p>大多数指令要求源操作数和目的操作数必须等长(即：类型匹配)。传送类指令大多如此</p><blockquote><p>例：MOV [BX]，12H ；错误。源、目的操作数都无法指明数据长 度！！</p><p>双操作数指令中，当源操作数是立即数、 目操作数是寄存器间址类(非变量名)的存储 器操作数时，对目标操作数的存储操作数必 须说明长度类型！！</p><p>可以改为： MOV BYTE PTR [BX]，12H</p><p>或者 MOV WORDPTR[BX]，12H</p><p>或者 MOV DWORDPTR[BX]，12H</p></blockquote></li><li><p>对于变量名方式的存储器操作数</p><ul><li><blockquote><p>例1： • XYZ DB 12H ；定义XYZ为字节型变量</p><p>• MOV XYZ，12H ；操作数为8位 •</p><p>例2： • XYZ DW 12H ；定义XYZ为字型变量 •</p><p>MOV XYZ，12H ；操作数为16位 • ；变量名定义时具有默认的长度属性，无需使用 PTR说明！</p></blockquote></li></ul></li><li><p>如果源、目的操作数类型不匹配，同样需要使用PTR进行说明</p><ul><li><blockquote><p>XYZ DB 12H ；定义XYZ为字节型变量 • MOV AX，XYZ</p><p>错：AX是字操作数，而XYZ是字节变量。</p><p>应该改为： MOV AX，WORD PTR XYZ ;正确</p></blockquote></li></ul></li><li><p>类似地，在单操作数指令中，当目的操作数 是寄存器间址类(非变量名)的存储器操作数 时，同样需要对存储器操作数说明长度类 型！！！</p></li></ul><h3 id="符号扩展传送指令movsx" tabindex="-1">符号扩展传送指令MOVSX <a class="header-anchor" href="#符号扩展传送指令movsx" aria-label="Permalink to &quot;符号扩展传送指令MOVSX&quot;">​</a></h3><p><code>MOVSX DST，SRC</code></p><p>将SRC的符号位向高位扩展，使源操作数与 目标操作数字长相同、但真值不变，再送到DST， 而SRC保持不变。(386以上)</p><ul><li><p>DST为REG16或REG32，SRC为小于等于DST的 立即数或存储器操作数或寄存器操作数。 •</p></li><li><p>对于有符号数才有意义。对于有符号数的补码， 扩展前后的真值保持不变，只有补码的位数不同。</p></li><li><p>对于无符号数无意义</p></li></ul><h4 id="eg" tabindex="-1">eg <a class="header-anchor" href="#eg" aria-label="Permalink to &quot;eg&quot;">​</a></h4><div class="language-assembly vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">assembly</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MOV  CL,56H</span></span>
<span class="line"><span>MOVSX  AX,CL ;0101 0110 B ;0000 0000 0101 0110 B</span></span></code></pre></div><ul><li>AX中得到56H的带符号扩展值0056H</li></ul><div class="language-assembly vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">assembly</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MOV DL,0FEH        ;1111 1110 B </span></span>
<span class="line"><span>MOVSX  AX,DL ;1111 1111 1111 1110 B  ;</span></span></code></pre></div><p>AX中得到88H的带符号扩展值0FFFEH</p><h3 id="零扩展传送指令movzx" tabindex="-1">零扩展传送指令MOVZX <a class="header-anchor" href="#零扩展传送指令movzx" aria-label="Permalink to &quot;零扩展传送指令MOVZX&quot;">​</a></h3><p><code>MOVZX DST，SRC</code></p><p>将SRC的高位用0补充，使其与目标操 作数字长相同，再送到DST，而SRC保持不变。(386以上)</p><ul><li><p>DST为REG16或REG32，SRC为小于等于 DST的立即数或存储器操作数或寄存器操作 数。</p></li><li><p>对于无符号数才有意义，扩展前后无符号数的真值不变。</p><div class="language-assembly vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">assembly</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MOVZX EAX，CX</span></span></code></pre></div></li></ul><h3 id="有效地址送寄存器指令lea" tabindex="-1">有效地址送寄存器指令LEA <a class="header-anchor" href="#有效地址送寄存器指令lea" aria-label="Permalink to &quot;有效地址送寄存器指令LEA&quot;">​</a></h3><p>load effective address, 加载有效地址，可以将有效地址传送到指定的的寄存器。指令形式是从存储器读数据到寄存器, 效果是将存储器的有效地址写入到目的操作数, 简单说, 就是C语言中的”&amp;”.</p><p><code>LEA REG,SRC</code></p><p>源操作数SRC必须是存储器操作数</p><p>REG为16位或32位寄存器(除段寄存器外)。</p><p>等价指令：<code>MOV REG,OFFSET SRC</code></p><p>eg:</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, OFFSET INPUT_MSG</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LEA</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,INPUT_MSG</span></span></code></pre></div><p>会将 INPUT_MSG 的偏移地址（相对于其段基址的地址）加载到 DX 寄存器中。 此时，DX 存储的是 INPUT_MSG 在当前数据段的偏移量，而不是 INPUT_MSG 中的数据。</p><h2 id="堆栈传送指令" tabindex="-1">堆栈传送指令 <a class="header-anchor" href="#堆栈传送指令" aria-label="Permalink to &quot;堆栈传送指令&quot;">​</a></h2><blockquote><p>堆栈操作单位是字(数据字长为16的倍数))</p></blockquote><p>在80X86中，规定：</p><ul><li><p>SS段寄存器：用于指示堆栈段的段基址，即是：堆栈空间(段)中的地址最小的存储单元的地址(段基址)。</p></li><li><p>栈底位置固定不变，即是：堆栈空间中最高地址的存储单元。(该地址由SS规定的段基址和预先定义的堆栈段的大小决定。)</p></li><li><p>SP或ESP(堆栈指针)始终指向栈顶，随着数据出栈、入栈操作而不断变化。</p></li><li><p>SP或ESP寄存器：存储堆栈中最后一个入栈数据(栈顶)所在存储单元的偏移地址。</p></li><li><p>数据进栈后，栈顶指针向低地址端调整；数据出栈后，栈顶指针向高地址端调整。</p></li><li><p>16位或者32位操作数</p><ul><li>入栈规律是：高位字节存入高地址单元，低位字节存入低地址单 元；</li><li>出栈规律是：低地址字节弹到目标操作 数低位，高地址字节弹到目标操作数高位。</li></ul></li></ul><h3 id="进栈指令push" tabindex="-1">进栈指令PUSH <a class="header-anchor" href="#进栈指令push" aria-label="Permalink to &quot;进栈指令PUSH&quot;">​</a></h3><p><code>PUSH SRC</code></p><p>执行时，首先调整堆栈指针，然后把源操作数压栈</p><p>注意：单操作数指令中：存储器操作数，需要用PTR说明操作数长度。该指令中单操作数为源操作数。</p><ul><li><p>eg:</p><ul><li><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PUSH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  WORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PTR [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div></li></ul></li></ul><h3 id="出栈指令pop" tabindex="-1">出栈指令POP <a class="header-anchor" href="#出栈指令pop" aria-label="Permalink to &quot;出栈指令POP&quot;">​</a></h3><p><code>POP DST</code></p><p>先将栈顶弹出2个或4个字节，送目标操作数，然后调整堆栈指针。</p><h2 id="算术运算类指令" tabindex="-1">算术运算类指令 <a class="header-anchor" href="#算术运算类指令" aria-label="Permalink to &quot;算术运算类指令&quot;">​</a></h2><h3 id="add加法指令" tabindex="-1">ADD加法指令 <a class="header-anchor" href="#add加法指令" aria-label="Permalink to &quot;ADD加法指令&quot;">​</a></h3><p><code>ADD 目的操作数，源操作数</code></p><ul><li><p>功能：源操作数+目的操作数→目的操作数</p></li><li><p>影响的标志位：CF，OF，SF，ZF，PF，AF</p></li><li><p>两个操作数不能同时为存储器操作数</p></li><li><p>如果SRC是立即数，DST是存储器操作数， 则DST必须用PTR说明是字节还是字型或是双字型，否则汇编时会出错。</p></li><li><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ADD</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  AL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BL</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ADD</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  CL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ADD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  WORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  PTR [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">56</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ADD</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  EDX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">EAX</span></span></code></pre></div></li></ul><h3 id="adc带进位的加法指令" tabindex="-1">ADC带进位的加法指令 <a class="header-anchor" href="#adc带进位的加法指令" aria-label="Permalink to &quot;ADC带进位的加法指令&quot;">​</a></h3><p><code>ADC 目的操作数，源操作数</code></p><ul><li><p>功能：源操作数+目的操作数+CF→目的操作数。将目的操作数加源操作数再加低位进位, 结果送目的地址。</p></li><li><p>影响的标志位：CF，OF，SF，ZF，PF，AF</p></li><li><p>该指令适用于多字节或多字的加法运 算；CF应是上一条指令执行后产生的C标志</p></li><li><p>两个32位二进制数分别存储在DX、 AX和BX、CX寄存器中。其中DX和BX存放 的是高位字，AX和CX存放的是低位字。请 实现两数的加法操作</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ADD</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CX</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;低位相加</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ADC</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BX</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;高位</span></span></code></pre></div></li></ul><h3 id="inc加1指令" tabindex="-1">INC加1指令 <a class="header-anchor" href="#inc加1指令" aria-label="Permalink to &quot;INC加1指令&quot;">​</a></h3><p><code>INC 目的操作数</code></p><ul><li>目的操作数＋1 →目的操作数。</li><li>INC指令是一个单操作数指令，操作数可以是寄存器或存储器操作数。常用于地址指针或循环次数实 现加1操作。</li><li>INC指令不影响CF标志，但影响其他5个状态标 志(AF，OF，PF，SF，ZF)</li><li>INC指令的操作数不能是立即数</li><li>当INC的操作数是存储器操作数时，必须用PTR 说明其长度属性。</li></ul><h3 id="sub减法" tabindex="-1">SUB减法 <a class="header-anchor" href="#sub减法" aria-label="Permalink to &quot;SUB减法&quot;">​</a></h3><p><code>SUB 目的操作数，源操作数</code></p><ul><li>目的操作数－源操作数→目的操作数， 目的操作数减去源操作数，结果存于目的地 址，源地址内容不变</li><li>影响的标志位：CF，OF，SF，ZF，PF，AF</li></ul><h3 id="sbb带借位减法" tabindex="-1">SBB带借位减法 <a class="header-anchor" href="#sbb带借位减法" aria-label="Permalink to &quot;SBB带借位减法&quot;">​</a></h3><p><code>SBB 目的操作数，源操作数</code></p><ul><li>目的操作数-源操作数-CF→目的操作 数，目的操作数减源操作数、再减低位借位 CF，结果送目的地址。适用于多字节或多字 的减法运算。</li></ul><h3 id="dec减1" tabindex="-1">DEC减1 <a class="header-anchor" href="#dec减1" aria-label="Permalink to &quot;DEC减1&quot;">​</a></h3><p><code>DEC 目的操作数</code></p><ul><li>目的操作数－1→目的操作数。DEC 指令是一个单操作数指令，操作数可以是寄 存器或存储器操作数、不能是立即数。常用 于地址指针或循环次数实现减1操作</li><li>DEC指令不影响CF标志，但影响其他5个 状态标志(AF，OF，PF，SF，ZF)；</li><li>DEC指令的操作数不能是立即数</li><li>当DEC的操作数是存储器操作数时，必须 用PTR说明符说明其属性</li></ul><h3 id="加法、减法指令小结" tabindex="-1">加法、减法指令小结 <a class="header-anchor" href="#加法、减法指令小结" aria-label="Permalink to &quot;加法、减法指令小结&quot;">​</a></h3><ul><li><p>目的操作数不可能为立即数;</p></li><li><p>源、目的操作数必须要等长;</p></li><li><p>源、目的操作数不能同时为存储器操作数;</p></li><li><p>如果源操作数是立即数，目的操作数是存储器操作 数，需要使用PTR进行说明;</p></li><li><p>以上指令中，除INC和DEC以外，都要影响所有6个 标志位。</p></li><li><p>INC和DEC指令：仅有一个操作数，可以 是8/16/32位寄存器操作数或者存储器操作数。这两条指令操作结果均不影响<strong>CF</strong>标。(但其他5个状态标 志位都可能会影响。)</p></li></ul><h3 id="cmp比较指令" tabindex="-1">CMP比较指令 <a class="header-anchor" href="#cmp比较指令" aria-label="Permalink to &quot;CMP比较指令&quot;">​</a></h3><p><code>CMP 目的操作数，源操作数 </code></p><ul><li>功能：目的操作数－源操作数，不保存减法 结果、但正常影响各个状态标志位。</li><li>CMP类似于SUB指令，但不同的是： 该指令不保存相减的结果，因而不改变操作数，仅仅影响状态标志。</li><li>CMP常用于转移指令之前，以形成转移条件， 状态标志包括6个：CF，OF，SF，ZF，PF， AF。</li></ul><h3 id="乘法指令" tabindex="-1">乘法指令 <a class="header-anchor" href="#乘法指令" aria-label="Permalink to &quot;乘法指令&quot;">​</a></h3><ul><li><p>MUL 无符号数乘法指令</p></li><li><p>IMUL 有符号数乘法指令</p></li></ul><h4 id="mul无符号数乘法指令" tabindex="-1">MUL无符号数乘法指令 <a class="header-anchor" href="#mul无符号数乘法指令" aria-label="Permalink to &quot;MUL无符号数乘法指令&quot;">​</a></h4><p><code>MUL SRC ；单操作数格式</code></p><ul><li><p>SRC指明乘数长度(不能是立即数)</p></li><li><p>被乘数和乘数须是等长的无符号二进制数、被乘 数隐含在累加器中(AL/AX/EAX)；</p></li><li><p>乘积为双倍字长</p></li><li><p>执行的操作：</p><ul><li><p>字节操作： (AX) &lt;—(AL) * (SRC)</p></li><li><p>字操作： (DX，AX)&lt;—(AX) * (SRC)</p></li><li><p>双字操作：(EDX，EAX)&lt;—(EAX) * (SRC)</p></li></ul></li><li><p>目的操作数必须是累加器AL、AX、EAX，源操作数是除立即数之外的寻址方式。</p></li><li><p>影响CF、OF标志位，其他不确定</p></li><li><p>eg</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MUL</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  BL</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; (AH)=?  (AL)=? (AX)=？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;(AH)=01H，(AL)=00H ，(AX)=100H</span></span></code></pre></div></li></ul><h4 id="imul有符号数乘法指令" tabindex="-1">IMUL有符号数乘法指令 <a class="header-anchor" href="#imul有符号数乘法指令" aria-label="Permalink to &quot;IMUL有符号数乘法指令&quot;">​</a></h4><p><code>IMUL SRC ;单操作数格式</code></p><ul><li><p>参与运算的被乘数、乘数、乘积均为有符号数，其他与MUL指令相同。</p></li><li><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1111</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1111</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(补码)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">IMUL</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BL</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       ;视为有符号数; (AX)=？0FFFFH</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MUL</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BL</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       ;视为无符号数改为; (AX)=？00FFH</span></span></code></pre></div></li></ul><h3 id="除法运算" tabindex="-1">除法运算 <a class="header-anchor" href="#除法运算" aria-label="Permalink to &quot;除法运算&quot;">​</a></h3><h4 id="div-无符号数的除法指令" tabindex="-1">DIV 无符号数的除法指令 <a class="header-anchor" href="#div-无符号数的除法指令" aria-label="Permalink to &quot;DIV 无符号数的除法指令&quot;">​</a></h4><p><code>DIV SRC ;单操作数格式</code></p><ul><li>SRC必须指明除数长度、不能是立即数；</li><li>被除数必须是除数的双倍字长、隐含存放在寄存器中；</li><li>商和余数与除数等长，分别存于被除数的低、高 半部分。</li><li>执行的操作：字节操作：16 位被除数放在AX中，8 位除数为源操作数。结果的8位商在AL中，8位余数 在AH中。表示为： (AL) &lt;—(AX)/(SRC)的商；(AH) &lt;—(AX)/(SRC)的余数；</li><li>字操作：32 位被除数在DX，AX中，16位除数为源 操作数。结果的16位商在AX中，16位的余数在DX 中。表示为：(AX) &lt;–(DX，AX)/(SRC)的商，(DX) &lt;—(DX，AX)/(SRC)的余数</li><li>执行DIV，运算后对标志位无确定影响， 都没有意义。</li><li>商超过规定的范围，CPU自动执行0型中断服务程序。</li></ul><h5 id="eg1" tabindex="-1">eg1 <a class="header-anchor" href="#eg1" aria-label="Permalink to &quot;eg1&quot;">​</a></h5><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">17</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DIV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  BL</span></span></code></pre></div><ul><li>;AX＝？</li><li>;(AL)=4，(AH)=1</li><li>AX＝14H？×</li><li>AX = 104H √</li></ul><h4 id="idiv有符号数的除法指令" tabindex="-1">IDIV有符号数的除法指令 <a class="header-anchor" href="#idiv有符号数的除法指令" aria-label="Permalink to &quot;IDIV有符号数的除法指令&quot;">​</a></h4><p><code>IDIV SRC</code></p><ul><li>被除数、除数、商值和余数均为有符号补 码数，其他与DIV相同</li><li>SRC必须指明除数长度不能是立即数</li><li>若被除数与除数等长时，必须扩展被除数的长度 <ul><li>机器数的实际数值的正负、大小不变，仅将数的符号位扩展</li></ul></li></ul><h5 id="eg1-1" tabindex="-1">eg1 <a class="header-anchor" href="#eg1-1" aria-label="Permalink to &quot;eg1&quot;">​</a></h5><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">IDIV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  BL</span></span></code></pre></div><ul><li>结果是(AL)=+5，(AH)= -1?</li><li>还是(AL)=+6，(AH)= +2 ?</li><li>AL)=+5，(AH)= -1 √</li><li>规定：相除后余数的符号必须和被除数相同</li></ul><h3 id="eg-算术指令的综合例子" tabindex="-1">eg-算术指令的综合例子 <a class="header-anchor" href="#eg-算术指令的综合例子" aria-label="Permalink to &quot;eg-算术指令的综合例子&quot;">​</a></h3><blockquote><p>计算(V-(X*Y+Z-540))/X其中X、Y、Z、V均为16位带符号数，已经分别装入X、Y、Z、V单元，要求上式的计算结果的商存入AX,余数存入DX寄存器。</p><p>程序设计考虑的问题：</p><ol><li>带符号数的运算的指令。</li><li>参与运算的符号的扩展问题。</li><li>寄存器的占用问题。</li><li>计算结果的进位问题。</li><li>计算的先后顺序问题。</li></ol></blockquote><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;X*Y</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,X</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">IMUL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Y</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AX</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DX</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;+Z</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,Z</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CWD</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;16位Z变32位</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ADD</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AX</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ADC</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DX</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;-540</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SUB</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">540</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SBB</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;V-</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,V</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CWD</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SUB</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CX</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SBB</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BX</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">IDIV</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> X</span></span></code></pre></div><h2 id="长度-类型转换指令" tabindex="-1">(长度)类型转换指令 <a class="header-anchor" href="#长度-类型转换指令" aria-label="Permalink to &quot;(长度)类型转换指令&quot;">​</a></h2><blockquote><ul><li>这类指令实际上是把操作数的最高位进行扩展；</li><li>常用于处理有符号数运算的操作数类型的匹配问题；</li><li>这类指令均不影响标志</li><li>CBW、CWD、CDQ几条指令常常用于配合有符号数除法指令中以实现被除数双倍字长的要求</li><li>对比：在CPU字长允许的情况下，有时可用 MOVSX替代。例如： MOVSX AX , AL ;等价于CBW</li></ul></blockquote><h3 id="cbw字节扩展成字" tabindex="-1">CBW字节扩展成字 <a class="header-anchor" href="#cbw字节扩展成字" aria-label="Permalink to &quot;CBW字节扩展成字&quot;">​</a></h3><p><code>CBW</code></p><ul><li>把AL寄存器中的符号位值扩展到AH 中，真值保持不变。</li></ul><h4 id="eg-1" tabindex="-1">eg <a class="header-anchor" href="#eg-1" aria-label="Permalink to &quot;eg&quot;">​</a></h4><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  AL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CBW</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;(AH)＝0,AL值不变</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  AL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80H</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CBW</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;(AH)＝0FFH,AL值不变</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CBW</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      ;(AX)= -16                </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">IDIV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  BL</span></span></code></pre></div><h3 id="cwd字扩展为双字" tabindex="-1">CWD字扩展为双字 <a class="header-anchor" href="#cwd字扩展为双字" aria-label="Permalink to &quot;CWD字扩展为双字&quot;">​</a></h3><p><code>CWD</code></p><ul><li>把AX寄存器中的符号位扩展到DX中</li></ul><h4 id="eg-2" tabindex="-1">eg <a class="header-anchor" href="#eg-2" aria-label="Permalink to &quot;eg&quot;">​</a></h4><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  AX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CWD</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;(DX:AX)＝00000005H</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  AX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9098H</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CWD</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;(DX:AX)＝0FFFF9098H</span></span></code></pre></div><h3 id="cwde字扩展为双字" tabindex="-1">CWDE字扩展为双字 <a class="header-anchor" href="#cwde字扩展为双字" aria-label="Permalink to &quot;CWDE字扩展为双字&quot;">​</a></h3><p><code>CWDE </code>(386以上)</p><ul><li>把AX寄存器符号位值扩展到EAX的高 16位</li></ul><h4 id="eg-3" tabindex="-1">eg <a class="header-anchor" href="#eg-3" aria-label="Permalink to &quot;eg&quot;">​</a></h4><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  AX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CWDE</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;(EAX)＝0000 0005 H</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  AX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9098H</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CWDE</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;(EAX)＝0FFFF 9098 H</span></span></code></pre></div><h3 id="cdq双字扩展为四字" tabindex="-1">CDQ双字扩展为四字 <a class="header-anchor" href="#cdq双字扩展为四字" aria-label="Permalink to &quot;CDQ双字扩展为四字&quot;">​</a></h3><p><code>CDQ </code>(386以上)</p><ul><li>把EAX寄存器中符号位值扩展到EDX中</li></ul><h4 id="eg-4" tabindex="-1">eg <a class="header-anchor" href="#eg-4" aria-label="Permalink to &quot;eg&quot;">​</a></h4><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  EAX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CDQ</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;(EDX:EAX)＝0000000000000005H</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  EAX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90980000H</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CDQ</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;执行结果为(EDX:EAX)＝0FFFFFFFF90980000H</span></span></code></pre></div><h2 id="bcd码-十进制-调整指令" tabindex="-1">BCD码(十进制)调整指令 <a class="header-anchor" href="#bcd码-十进制-调整指令" aria-label="Permalink to &quot;BCD码(十进制)调整指令&quot;">​</a></h2><blockquote><ul><li>BCD码只能表示无符号数</li><li>如何调整：4位二进制数表示的BCD码十进 制数与实际的4位二进制数所能表示的范围， 模相差为6，所以调整时对6进行处理。</li><li>当BCD码表示的十进制加法运算用二进制进 行时，有两种情况需要进行调整： <ol><li>运算的结果出现非法的BCD码(即4位BCD 码对应的十进制数大于9)；</li><li>运算产生半字节间的进位(即：AF/CF=1， 表示4位二进制数加法产生了大于15的进位)</li></ol></li><li>调整的方法是加6进行修正。</li><li>以上调整的判断和执行过程由CPU调整指令 自动进行!</li></ul></blockquote><h3 id="压缩bcd码调整指令" tabindex="-1">压缩BCD码调整指令 <a class="header-anchor" href="#压缩bcd码调整指令" aria-label="Permalink to &quot;压缩BCD码调整指令&quot;">​</a></h3><h4 id="daa压缩bcd码加法调整指令" tabindex="-1">DAA压缩BCD码加法调整指令 <a class="header-anchor" href="#daa压缩bcd码加法调整指令" aria-label="Permalink to &quot;DAA压缩BCD码加法调整指令&quot;">​</a></h4><p><code>DAA</code></p><ul><li>针对AL中的两个组合BCD码数(按二进制运算)之和进行调整，得到正确结果所对应的BCD码数。</li><li>DAA 执行后影响A，C，P，S，Z标志，对 OF未定义</li></ul><h5 id="指令执行时的调整过程" tabindex="-1">指令执行时的调整过程 <a class="header-anchor" href="#指令执行时的调整过程" aria-label="Permalink to &quot;指令执行时的调整过程&quot;">​</a></h5><ol><li>如果AL的低四位大于9或者AF标志=1， 则AL的寄存器内容加06H且使AF = 1 ；否则不修正，AF不变</li><li>如果AL的高四位大于9或者CF标志=1， 则AL的寄存器内容加60H且使CF = 1；否则 不修正，CF不变。</li></ol><h5 id="eg1-2" tabindex="-1">eg1 <a class="header-anchor" href="#eg1-2" aria-label="Permalink to &quot;eg1&quot;">​</a></h5><p>压缩BCD码的加法运算：计算18+27=?</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MOV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18H</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ADD</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">27H</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;二进制加法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DAA</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;十进制加法调整</span></span></code></pre></div>`,123),h=[p];function e(t,k,d,r,o,c){return a(),i("div",null,h)}const F=s(n,[["render",e]]);export{C as __pageData,F as default};
