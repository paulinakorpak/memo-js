var C=e=>{for(let r=e.length-1;r>0;r--){let t=Math.floor(Math.random()*(r+1));[e[r],e[t]]=[e[t],e[r]]}return e};var b=(e,r)=>{let t="";for(let o=0;o<e;o++){t=`${t} <tr class="row">`;for(let s=0;s<r;s++){let n=o*r+s;t=`${t} <td class="col" data-key="${n}"></td>`}t=`${t} </tr>`}return t};var f=["apple","cherry","coco","fig","gooseberry","grapefruit","grapes","kiwi","lemon","peach","pear","pineapple","plum","pomagranate","watermelon"];var h=(e,r)=>`
  <img
    src="img/cards/${r}.png"
    alt="${r}"
    ${e?"":'class="d-none"'}
  />`;var y=(e,r)=>{let t={visibility:!1},o=()=>{s()},s=()=>e.innerHTML=h(t.visibility,r);return{init:o,show:()=>{t.visibility=!0,s()},hide:()=>{t.visibility=!1,s()},getType:()=>r,isVisible:()=>t.visibility}};var x=(e,r)=>{let t=o=>o>9?o:`0${o}`;return`
    <div>
      Timer: ${t(e)}:${t(r)}
    </div>
  `};var T=e=>{let r={time:0},t,o=()=>{s(0,0),n()},s=(a,d)=>{e.innerHTML=x(a,d)},n=()=>{t=setInterval(()=>{r.time++;let a=r.time%60,d=Math.floor(r.time/60);s(d,a)},1e3)};return{init:o,stop:()=>{clearInterval(t)}}};var g=e=>`
    <div>
      Counter: ${e}
    </div>
  `;var j=e=>{let r={count:0},t=()=>{o()},o=()=>{e.innerHTML=g(r.count)};return{init:t,increment:()=>{r.count++,o()}}};var v=(e,r)=>{let t={firstCard:null,secondCard:null},o=[],s=null,n=null,p=(i,l)=>{let c=e.querySelector(".timer");s=T(c),s.init();let m=e.querySelector(".counter");n=j(m),n.init(),d(i,l),o=$(a())},a=()=>C([...f,...f]),d=(i,l)=>{let c=e.querySelector("table");c.innerHTML=b(i,l)},$=i=>(o=Array.from(e.querySelectorAll("td")).map((c,m)=>{let u=y(c,i[m],m);return u.init(),c.addEventListener("click",q),u}),o),q=async i=>{let{key:l}=i.currentTarget.dataset,c=o[l],m=c.isVisible(),u=t.firstCard!==null&&t.secondCard!==null;m||u||(c.show(),n.increment(),S(),t.firstCard===null?t.firstCard=c:(t.secondCard=c,t.firstCard.getType()!==t.secondCard.getType()&&(await new Promise(L=>setTimeout(L,1e3)),t.firstCard.hide(),t.secondCard.hide()),t.firstCard=null,t.secondCard=null))},S=()=>{let i=!0;o.map(l=>i=i&&l.isVisible()),i&&(s.stop(),r())};return{init:p}};var w=e=>{let r=(s,n)=>{let p=e.querySelector(".board");v(p,t).init(s,n),e.querySelector(".result button").addEventListener("click",o)},t=()=>{let s=e.querySelector(".result");e.querySelector(".table").classList.add("d-none"),s.classList.remove("d-none")},o=()=>{window.location.reload(!0)};return{init:r}};var E=6,M=5,V=document.querySelector(".app");w(V).init(E,M);
//# sourceMappingURL=//dist//index.js.map
