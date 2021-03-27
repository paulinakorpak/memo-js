var C=e=>{for(let r=e.length-1;r>0;r--){let t=Math.floor(Math.random()*(r+1));[e[r],e[t]]=[e[t],e[r]]}return e};var h=(e,r)=>{let t="";for(let o=0;o<e;o++){t=`${t} <tr class="row">`;for(let s=0;s<r;s++){let l=o*r+s;t=`${t} <td class="col" data-key="${l}"></td>`}t=`${t} </tr>`}return t};var f=["apple","cherry","coco","fig","gooseberry","grapefruit","grapes","kiwi","lemon","peach","pear","pineapple","plum","pomagranate","watermelon"];var b=(e,r)=>`
  <img
    src="img/cards/${r}.png"
    alt="${r}"
    ${e?"":'class="d-none"'}
  />`;var y=(e,r)=>{let t={visibility:!1},o=()=>{s()},s=()=>e.innerHTML=b(t.visibility,r);return{init:o,show:()=>{t.visibility=!0,s()},hide:()=>{t.visibility=!1,s()},getType:()=>r,isVisible:()=>t.visibility}};var x=(e,r)=>{let t=o=>o>9?o:`0${o}`;return`
    <div>
      Timer: ${t(e)}:${t(r)}
    </div>
  `};var T=e=>{let r={time:0},t,o=()=>{s(0,0),l()},s=(a,d)=>{e.innerHTML=x(a,d)},l=()=>{t=setInterval(()=>{r.time++;let a=r.time%60,d=Math.floor(r.time/60);s(d,a)},1e3)};return{init:o,stop:()=>{clearInterval(t)}}};var g=e=>`
    <div>
      Counter: ${e}
    </div>
  `;var j=e=>{let r={count:0},t=()=>{o()},o=()=>{e.innerHTML=g(r.count)};return{init:t,increment:()=>{r.count++,o()}}};var v=(e,r)=>{let t={firstCard:null,secondCard:null},o=[],s=null,l=null,u=(n,c)=>{let i=e.querySelector(".timer");s=T(i),s.init();let m=e.querySelector(".counter");l=j(m),l.init(),d(n,c),o=$(a())},a=()=>C([...f,...f]),d=(n,c)=>{let i=e.querySelector("table");i.innerHTML=h(n,c)},$=n=>(o=Array.from(e.querySelectorAll("td")).map((i,m)=>{let p=y(i,n[m],m);return p.init(),i.addEventListener("click",q),p}),o),q=async n=>{let{key:c}=n.currentTarget.dataset,i=o[c],m=i.isVisible(),p=t.firstCard!==null&&t.secondCard!==null;m||p||(i.show(),l.increment(),S(),t.firstCard===null?t.firstCard=i:(t.secondCard=i,t.firstCard.getType()!==t.secondCard.getType()&&(await new Promise(L=>setTimeout(L,1e3)),t.firstCard.hide(),t.secondCard.hide()),t.firstCard=null,t.secondCard=null))},S=()=>{let n=!0;o.map(c=>n=n&&c.isVisible()),n&&(s.stop(),r())};return{init:u}};var w=e=>{let r=(o,s)=>{let l=e.querySelector(".board");v(l,t).init(o,s)},t=()=>{let o=e.querySelector(".result");e.querySelector(".table").classList.add("d-none"),o.classList.remove("d-none")};return{init:r}};var M=6,V=5,E=document.querySelector(".app");w(E).init(M,V);
//# sourceMappingURL=//dist//index.js.map
