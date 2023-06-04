import{s as d,u as f,r as o,j as r}from"./index-d71dc70b.js";import{g as h,S as g,a as m,b as u}from"./Section-4a4e8ff8.js";const l=d.p`
  font-size: ${e=>e.theme.fontSizes.xl};
  font-weight: ${e=>e.theme.fontWeights.bold};
  text-align: center;
`,x=()=>{const e=f(h),[t,c]=o.useState([]),[a,i]=o.useState([]);return o.useEffect(()=>{(async()=>{try{const{data:s}=await m({url:u,method:"GET"});c(s.users)}catch(s){console.error(s.message)}})()},[e]),o.useEffect(()=>{t.map(n=>{e.includes(n._id)&&i(s=>[...s,n._id])})},[e,t]),r.jsxs(g,{children:[r.jsxs(l,{children:["We have ",t.length," users! "]}),r.jsxs(l,{children:["Followed ",a.length," users!"]}),r.jsxs(l,{children:["Users for follow ",t.length-a.length,"!"]})]})},j=x;export{j as default};
