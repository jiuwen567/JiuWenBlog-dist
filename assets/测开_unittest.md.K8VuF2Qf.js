import{_ as s,c as n,o as a,a6 as p}from"./chunks/framework.DkFL-jqo.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"测开/unittest.md","filePath":"测开/unittest.md"}'),e={name:"测开/unittest.md"},t=p(`<h2 id="unittest框架" tabindex="-1">Unittest框架 <a class="header-anchor" href="#unittest框架" aria-label="Permalink to &quot;Unittest框架&quot;">​</a></h2><p>Unittest框架是一个单元测试框架，最初是由JUnit启发而设计的模块，而开发的一款Python语言的单元测试框架。</p><p><a href="https://docs.python.org/3.6/library/unittest.html" target="_blank" rel="noreferrer">https://docs.python.org/3.6/library/unittest.html</a></p><p>作用：</p><ul><li>管理测试用例</li><li>断言</li><li>生成测试报告</li></ul><h3 id="unittest框架的组成部分" tabindex="-1">Unittest框架的组成部分 <a class="header-anchor" href="#unittest框架的组成部分" aria-label="Permalink to &quot;Unittest框架的组成部分&quot;">​</a></h3><p>Unittest框架主要由4个部分组成：test fixture、test case、test suite、test runner</p><table tabindex="0"><thead><tr><th>Unittest组成部分</th><th>描述</th></tr></thead><tbody><tr><td>test fixture</td><td>测试固定组件，unittest框架中，一些有固定用法的组件</td></tr><tr><td>test case</td><td>测试用例，被执行测试的最小单元</td></tr><tr><td>test suite</td><td>测试套件，它是一个用例集，用来汇总应该一起执行的测试用例。</td></tr><tr><td>test runner</td><td>测试运行器，它是一个设计测试执行方式的元件，主要对用户提供了输出结果的展现方式。它可以用图标、文本、html等方式来展现测试结果</td></tr></tbody></table><p>各个组成部分的运行逻辑关系：</p><p><img src="https://typora5672.oss-cn-chengdu.aliyuncs.com/temp/1618295049537.png" alt="1618295049537"></p><p>注意：TestFixture是融合在代码中运行的，主要是体现在TestCase当中。TestResult是指测试结果</p><h3 id="unittest框架入门案例" tabindex="-1">Unittest框架入门案例 <a class="header-anchor" href="#unittest框架入门案例" aria-label="Permalink to &quot;Unittest框架入门案例&quot;">​</a></h3><p>unittest在python3中，已经改为python内置模块，无需安装就能使用</p><h4 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h4><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> unittest  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 导包</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UnittestDemo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unittest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TestCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;执行测试用例1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test02</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;执行测试用例2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;__main__&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    unittest.main()</span></span></code></pre></div><h3 id="testcase" tabindex="-1">TestCase <a class="header-anchor" href="#testcase" aria-label="Permalink to &quot;TestCase&quot;">​</a></h3><p>TestCase就是Unittest框架执行的测试用例。</p><p>主要用法是，把测试用例编写在继承了TestCase的类中，通过unittest.main()来自动加载测试用例运行</p><h4 id="示例代码-1" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码-1" aria-label="Permalink to &quot;示例代码&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import unittest  # 导包</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class UnittestDemo(unittest.TestCase):</span></span>
<span class="line"><span>    def test01(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例1&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test02(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例2&quot;)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    def test03(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例3&quot;)    </span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    unittest.main()</span></span></code></pre></div><p>两种执行方式：</p><ul><li>Pycharm内置的unittest模式运行，可在此处选择使用哪种测试框架。</li></ul><p><img src="https://typora5672.oss-cn-chengdu.aliyuncs.com/temp/image-20241119092217733.png" alt="image-20241119092217733"></p><ul><li><p>unittest.main()运行</p><p>需要配置，才能进行</p></li></ul><p>无论哪种方式，本质上都是运行unittest.main()中的代码</p><ul><li>unittest.main() 使用unittest框架运行测试用例</li><li>运行的是main.py的代码，其中自动将编写的测试用例加载到TestSuite、TestRunner和自动运行编写的test01和test02用例</li></ul><p>注意事项：</p><ul><li><p>每个测试用例默认都以test开头，非test开头的测试用例不会自动被执行</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>def test01(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例1&quot;)</span></span></code></pre></div></li><li><p>测试用例的执行顺序是按照ASCII码的顺序运行，ASCII值越小，越优先执行</p><p><img src="https://typora5672.oss-cn-chengdu.aliyuncs.com/temp/image-20241119092549942.png" alt="image-20241119092549942"></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    def test01(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例1&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test02(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例2&quot;)</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>     # 先运行test01，再运行test02</span></span></code></pre></div></li><li><p>只有继承了unittest.TestCase的类，才会被unttest.main()运行</p></li></ul><h4 id="跳过要执行的测试用例" tabindex="-1">跳过要执行的测试用例 <a class="header-anchor" href="#跳过要执行的测试用例" aria-label="Permalink to &quot;跳过要执行的测试用例&quot;">​</a></h4><p>当我们希望跳过一些测试测试用例，不执行时，我们可以使用装饰器@unitest.skip(&quot;备注&quot;)来完成</p><p>示例代码：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import unittest  # 导包</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class XXX(unittest.TestCase):</span></span>
<span class="line"><span>    def test01(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例1&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @unittest.skip(&quot;demonstrating skipping&quot;)</span></span>
<span class="line"><span>    def test02(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例2&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test03(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例3&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    unittest.main()</span></span></code></pre></div><p><img src="https://typora5672.oss-cn-chengdu.aliyuncs.com/temp/image-20241119092754400.png" alt="image-20241119092754400"></p><h3 id="引入testfixture" tabindex="-1">引入TestFixture <a class="header-anchor" href="#引入testfixture" aria-label="Permalink to &quot;引入TestFixture&quot;">​</a></h3><p>TestFixture一般都是写在运行的测试用例的类中，作用该类的类方法或者实例方法而存在</p><h4 id="testfixture介绍" tabindex="-1">TestFixture介绍 <a class="header-anchor" href="#testfixture介绍" aria-label="Permalink to &quot;TestFixture介绍&quot;">​</a></h4><p>TestFixture一般使用4个常见方法：setUp()、tearDown()、setUpClass()、tearDownClass()</p><p>需要注意的是，在代码中，大小写严格区分。</p><p>代码编写方法：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class TestFixtureDemo(unittest.TestCase):</span></span>
<span class="line"><span>    def setUp(self):</span></span>
<span class="line"><span>        pass</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def setUpClass(self):</span></span>
<span class="line"><span>        pass</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    def tearDown(self):</span></span>
<span class="line"><span>        pass</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def tearDownClass(self):</span></span>
<span class="line"><span>        pass</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def testXX(self):</span></span>
<span class="line"><span>        pass</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    # 注意，这些方法都是重写的TestCase中的方法</span></span></code></pre></div><h4 id="运行规则和应用场景" tabindex="-1">运行规则和应用场景 <a class="header-anchor" href="#运行规则和应用场景" aria-label="Permalink to &quot;运行规则和应用场景&quot;">​</a></h4><ul><li><p>setUp()</p><p>每运行一个测试用例之前，先运行的函数；主要用于设置一些配置信息，静态属性等等</p></li><li><p>setUpClass()</p><p>它是类方法，必须和@classmethod装饰器结合使用（unittest设计如此）</p><p>实例化类后，会自动运行的方法，主要用于实例化类、设置某些环境配置如数据库连接配置等等。</p></li><li><p>tearDown()</p><p>每运行完一个测试用例之后，后运行的函数；主要用于销毁每个测试用例之间的数据，释放资源，还原数据</p></li><li><p>tearDownClass()</p><p>类中的代码全部运行完成后，会自动运行的方法，主要用于销毁类级别的资源，还原数据。</p></li></ul><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>类方法：被@classmethod装饰的方法被称为类方法。</span></span>
<span class="line"><span>类方法不需要实例化就能使用。</span></span>
<span class="line"><span>例如：</span></span>
<span class="line"><span>class A:</span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def add(x,y):</span></span>
<span class="line"><span>        print(x+y)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    def add22(x, y):</span></span>
<span class="line"><span>        print(x + y)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A.add(1,2) #返回3</span></span>
<span class="line"><span>A.add22(1,2) # 报错</span></span>
<span class="line"><span>A().add22(1,2) # 返回3</span></span></code></pre></div><h4 id="testfixture使用案例" tabindex="-1">TestFixture使用案例 <a class="header-anchor" href="#testfixture使用案例" aria-label="Permalink to &quot;TestFixture使用案例&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MathDemo:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def plus(self, x, y):</span></span>
<span class="line"><span>        return x + y</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TestFixtureDemo(unittest.TestCase):</span></span>
<span class="line"><span>    add = None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def setUp(self):</span></span>
<span class="line"><span>        self.x = 1</span></span>
<span class="line"><span>        self.y = 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def setUpClass(cls):</span></span>
<span class="line"><span>        cls.add = MathDemo()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def tearDown(self):</span></span>
<span class="line"><span>        del self.x</span></span>
<span class="line"><span>        del self.y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @classmethod</span></span>
<span class="line"><span>    def tearDownClass(cls):</span></span>
<span class="line"><span>        del cls.add</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test01(self):</span></span>
<span class="line"><span>        result = self.add.plus(1, 2)</span></span>
<span class="line"><span>        print(result)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test02(self):</span></span>
<span class="line"><span>        result = self.add.plus(3, 5)</span></span>
<span class="line"><span>        print(result)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    unittest.main()</span></span></code></pre></div><h3 id="unittest的断言" tabindex="-1">Unittest的断言 <a class="header-anchor" href="#unittest的断言" aria-label="Permalink to &quot;Unittest的断言&quot;">​</a></h3><p>断言是让程序帮助人来判断，实际结果与预期结果的一种方法。</p><p>进行自动化测试中，只能通过断言来判断执行结果是否正确。所以，掌握断言技术是进行自动化测试的前提条件。</p><p>Python语言自带断言，但是应用时，会有许多不方便理解的地方。为了让我们能更方便的断言数据，Unittest对Python的断言进行了多层封装，使断言更丰富，更容易使用。</p><h4 id="unittest常见断言方法和作用" tabindex="-1">Unittest常见断言方法和作用 <a class="header-anchor" href="#unittest常见断言方法和作用" aria-label="Permalink to &quot;Unittest常见断言方法和作用&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Unittest断言方法</th><th>作用</th></tr></thead><tbody><tr><td>assertEqual(a,b)</td><td>检查 a和b是否相等</td></tr><tr><td>assertTrue(x)</td><td>检查x是不是一个True</td></tr><tr><td>assertIs(a,b)</td><td>检查a和b是不是完全一样</td></tr><tr><td>assertIsNone(x)</td><td>检查x是不是一个None</td></tr><tr><td>assertIn(a,b)</td><td>检查a是不是b的子集</td></tr><tr><td>assertIsInstance(a,b)</td><td>检查a、b两个对象，实例类型是否相同</td></tr><tr><td></td><td></td></tr></tbody></table><h4 id="案例演示" tabindex="-1">案例演示 <a class="header-anchor" href="#案例演示" aria-label="Permalink to &quot;案例演示&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TestAssertDemo(unittest.TestCase):</span></span>
<span class="line"><span>    def setUp(self):</span></span>
<span class="line"><span>        self.l1, self.l2 = [1, 2], [1, 2]</span></span>
<span class="line"><span>        self.a, self.b = 1, 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test01_assertEqual(self):</span></span>
<span class="line"><span>        self.assertEqual(self.a, self.b) # a和b相等</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test02_assertIs(self):</span></span>
<span class="line"><span>        self.assertIs(self.l1, self.l2) # l1和l2不相同</span></span>
<span class="line"><span>        self.assertIs(self.a, self.b) # a和b相同</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test03_assertTrue(self):</span></span>
<span class="line"><span>        self.assertTrue(self.a) # 1 是true</span></span>
<span class="line"><span>        self.assertTrue(0) # 0 是false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test04_assertIsNone(self):</span></span>
<span class="line"><span>        self.assertIsNone(self.b) # 1 不是 None</span></span>
<span class="line"><span>        self.assertIsNone(None)  # None 是 None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test05_assertIn(self):</span></span>
<span class="line"><span>        self.assertIn(self.l1, self.l2) # l1  不是l2的子集</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test06_assertIsInstance(self):</span></span>
<span class="line"><span>        self.assertIsInstance(self.a, int) # a是int整型</span></span>
<span class="line"><span>        self.assertIsInstance(self.l1, list) # l1是list列表型</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    unittest.main()</span></span></code></pre></div><h3 id="testsuite和testrunner" tabindex="-1">TestSuite和TestRunner <a class="header-anchor" href="#testsuite和testrunner" aria-label="Permalink to &quot;TestSuite和TestRunner&quot;">​</a></h3><p>Unittest中，主要使用TestSuite来管理测试用例，使用TestRunner运行测试用例，并生成测试报告</p><p>此前，运行unittest框架中的代码中，我们使用的都是默认的方式，自动加载用例然后运行得到结果</p><p>有没有一种方法，让我们可以自定义运行呢？当然有！</p><p>我们可以使用TestSuite添加测试用例到测试套件，然后用TestRunner来运行</p><h4 id="testsuite和testrunner基本用法" tabindex="-1">TestSuite和TestRunner基本用法 <a class="header-anchor" href="#testsuite和testrunner基本用法" aria-label="Permalink to &quot;TestSuite和TestRunner基本用法&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 导包</span></span>
<span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建测试用例的类</span></span>
<span class="line"><span>class TestSuiteDemo1(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test01(self):</span></span>
<span class="line"><span>        print(&quot;测试用例：aaaa&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test02(self):</span></span>
<span class="line"><span>        print(&quot;测试用例：bbbb&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TestSuiteDemo2(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test01(self):</span></span>
<span class="line"><span>        print(&quot;测试用例：奥特曼&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test02(self):</span></span>
<span class="line"><span>        print(&quot;测试用例：光头强&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    # 实例化测试套件</span></span>
<span class="line"><span>    suite = unittest.TestSuite()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 添加测试用例到测试套件当中</span></span>
<span class="line"><span>    suite.addTest(TestSuiteDemo1(&#39;test01&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 实例化test_runner</span></span>
<span class="line"><span>    runner = unittest.TextTestRunner()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 使用runner运行测试套件</span></span>
<span class="line"><span>    runner.run(suite)</span></span></code></pre></div><h4 id="testsuite添加测试用例的3种方式" tabindex="-1">TestSuite添加测试用例的3种方式 <a class="header-anchor" href="#testsuite添加测试用例的3种方式" aria-label="Permalink to &quot;TestSuite添加测试用例的3种方式&quot;">​</a></h4><p>添加测试用例到测试套件时，我们可以使用</p><p>suite.addTest、suite.addTests、TestLoader来添加</p><ul><li><p>suite.addTest</p><p>添加单个测试用例，一般添加以test开头的函数</p></li><li><p>suite.addTests，添加多个测试用例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def testXX(aa):</span></span>
<span class="line"><span>    print(&quot;编外的测试用例&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TestSuiteDemo1(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test01(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例aaaa&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test02(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例bbbb&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TestSuiteDemo2(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test01(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例xxxx&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test02(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例yyyy&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    suite = unittest.TestSuite()  # 实例化测试套件</span></span>
<span class="line"><span>    suite.addTest(TestSuiteDemo1(&#39;test01&#39;))  # 添加测试用例</span></span>
<span class="line"><span>    suite.addTests([ TestSuiteDemo2(&#39;test01&#39;), TestSuiteDemo2(&#39;test02&#39;)])</span></span>
<span class="line"><span>    runner = unittest.runner.TextTestRunner()  # 实例化runner</span></span>
<span class="line"><span>    runner.run(suite)  # 使用runner执行测试套件</span></span></code></pre></div></li></ul><h4 id="testloader加载测试用例" tabindex="-1">TestLoader加载测试用例 <a class="header-anchor" href="#testloader加载测试用例" aria-label="Permalink to &quot;TestLoader加载测试用例&quot;">​</a></h4><p>TestLoader添加测试用例的方法有很多种，这里我们主要介绍两种</p><p>第一种：TestLoader().discover((&quot;./&quot;, &quot;*.py&quot;)</p><p>根据执行的路径来寻找指定的py文件中的测试用例，加载到测试套件当中。</p><p>第二种：TestLoader().loadTestsFromTestCase(测试用例类名)</p><p>根据测试用例的类名来加载测试用例</p><p>示例代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import unittest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def testXX(aa):</span></span>
<span class="line"><span>    print(&quot;编外的测试用例&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TestSuiteDemo1(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test01(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例aaaa&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test02(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例bbbb&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TestSuiteDemo2(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test01(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例xxxx&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test02(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例yyyy&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TestSuiteDemo3(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test01(self):</span></span>
<span class="line"><span>        print(&quot;执行接口测试&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test02(self):</span></span>
<span class="line"><span>        print(&quot;执行单元测试&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test03(self):</span></span>
<span class="line"><span>        print(&quot;执行安全测试&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    t1 = unittest.TestLoader()</span></span>
<span class="line"><span>    suite = t1.discover(&quot;./&quot;, &quot;*.py&quot;) # 使用discover来寻找测试用例</span></span>
<span class="line"><span>    # suite = t1.loadTestsFromTestCase(TestSuiteDemo3)</span></span>
<span class="line"><span>    runner = unittest.runner.TextTestRunner() # 实例化runner</span></span>
<span class="line"><span>    runner.run(suite) # 使用runner执行测试套件</span></span></code></pre></div><h3 id="测试报告testresult" tabindex="-1">测试报告TestResult <a class="header-anchor" href="#测试报告testresult" aria-label="Permalink to &quot;测试报告TestResult&quot;">​</a></h3><p>使用unittest运行测试用例之后，最后会生成测试报告，我们可以把测试报告保存到文件中</p><h4 id="texttestrunner生成的报告" tabindex="-1">TextTestRunner生成的报告 <a class="header-anchor" href="#texttestrunner生成的报告" aria-label="Permalink to &quot;TextTestRunner生成的报告&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import unittest</span></span>
<span class="line"><span>class TestSuiteDemo1(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test01(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例aaaa&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test02(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例bbbb&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TestSuiteDemo2(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test01(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例xxxx&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test02(self):</span></span>
<span class="line"><span>        print(&quot;执行测试用例yyyy&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TestSuiteDemo3(unittest.TestCase):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test01(self):</span></span>
<span class="line"><span>        print(&quot;执行接口测试&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test02(self):</span></span>
<span class="line"><span>        print(&quot;执行单元测试&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def test03(self):</span></span>
<span class="line"><span>        print(&quot;执行安全测试&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    t1 = unittest.TestLoader()</span></span>
<span class="line"><span>    # suite = t1.discover(&quot;./&quot;, &quot;demo_testloader.py&quot;) # 使用discover来寻找测试用例</span></span>
<span class="line"><span>    suite = t1.loadTestsFromTestCase(TestSuiteDemo3)</span></span>
<span class="line"><span>    with open(file=&quot;./test_result.txt&quot;, mode=&#39;w&#39;) as f:</span></span>
<span class="line"><span>        runner = unittest.runner.TextTestRunner(f,descriptions=True, verbosity=2) # 实例化runner</span></span>
<span class="line"><span>        result = runner.run(suite) # 使用runner执行测试套件</span></span>
<span class="line"><span>    print(result)</span></span></code></pre></div><h4 id="htmltestrunner-py3生成的报告" tabindex="-1">HTMLTestRunner_PY3生成的报告 <a class="header-anchor" href="#htmltestrunner-py3生成的报告" aria-label="Permalink to &quot;HTMLTestRunner_PY3生成的报告&quot;">​</a></h4><p>HTMLTestRunner_PY3是一个能生成HTML格式的，显示更友好的测试报告。</p><p>它不仅能够显示出测试用例的执行结果，还能跟踪测试用例执行失败的原因。</p><p><strong>安装HTMLTestRunner_PY</strong></p><p>使用HTMLTestRunner_PY3</p><h2 id="多线程执行测试用例实战" tabindex="-1">多线程执行测试用例实战 <a class="header-anchor" href="#多线程执行测试用例实战" aria-label="Permalink to &quot;多线程执行测试用例实战&quot;">​</a></h2><h3 id="案例" tabindex="-1">案例 <a class="header-anchor" href="#案例" aria-label="Permalink to &quot;案例&quot;">​</a></h3><p>场景：现在假设有六百六十六个测试用例，每个用例至少需要执行1秒，如果是单线程执行，则需要花费666秒。</p><p>需求：使用十个线程执行六百六十六个用例</p><p>实现分析：我们可以使用线程池来完成。</p><p>代码：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import unittest</span></span>
<span class="line"><span>from threadpool import ThreadPool, makeRequests</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def get_testcase():</span></span>
<span class="line"><span>    return unittest.defaultTestLoader.discover(&quot;./&quot;, &quot;test*.py&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def action(suite):</span></span>
<span class="line"><span>    t1 = unittest.runner.TextTestRunner()</span></span>
<span class="line"><span>    t1.run(suite)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    pool = ThreadPool(10)  # 启动10个线程运行</span></span>
<span class="line"><span>    test_case = get_testcase() # 获取测试用例</span></span>
<span class="line"><span>    requests = makeRequests(action, test_case, callback=None) # 初始化要执行的任务</span></span>
<span class="line"><span>    for req in requests:</span></span>
<span class="line"><span>        print(req)</span></span>
<span class="line"><span>        pool.putRequest(req)</span></span>
<span class="line"><span>    pool.wait() # 等待任务完成</span></span></code></pre></div><h3 id="多线程运行测试用例的注意事项" tabindex="-1">多线程运行测试用例的注意事项 <a class="header-anchor" href="#多线程运行测试用例的注意事项" aria-label="Permalink to &quot;多线程运行测试用例的注意事项&quot;">​</a></h3><p>使用多线程运行测试用例时，并不是所有的测试用例都能用多线程场景运行。</p><p>只有数据不冲突的场景，才能使用多线程技术运行测试用例。</p><p>例如：</p><ol><li><p>如果使用多线程同时使用相同用户名测试登陆和退出登陆，那么肯定会导致测试结果不准确。</p></li><li><p>多线程测试修改同一行数据时，也会出现问题，导致测试结果不准确</p></li><li><p>多线程测试删除同一个数据时，容易出现问题，导致结果不准确</p></li></ol>`,93),l=[t];function i(c,r,u,o,d,h){return a(),n("div",null,l)}const k=s(e,[["render",i]]);export{m as __pageData,k as default};
