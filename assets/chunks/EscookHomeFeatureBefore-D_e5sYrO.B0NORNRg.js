import{d as u,y as d}from"./framework.DkFL-jqo.js";const l=u({setup(){return d(()=>{const r=["#f00","#0f0","#f0f","#0ff","#FE7300","#008EFF","red","red","red","red","red"],e=document.querySelector(".VPHomeFeatures");document.querySelectorAll(".VPHomeFeatures .VPFeature").forEach((t,s)=>{t.style.setProperty("--color",r[s]),t.addEventListener("mousemove",function(o){const f=o.pageX-this.offsetLeft,n=o.pageY-((e==null?void 0:e.offsetTop)||0)-this.offsetTop;this.style.setProperty("--x",f+"px"),this.style.setProperty("--y",n+"px")})})}),()=>null}});export{l as default};
