/* Highlight the About section once its leading edge reaches the reading line.
   Project Team title and first credit form one visual section. */
document.addEventListener('DOMContentLoaded',()=>{
 const blocks=[...document.querySelectorAll('.about-content>.about-block')];
 if(!blocks.length)return;
 let pending=false;
 function update(){
  pending=false;
  const readingLine=window.innerHeight*.47;
  let active=0;
  for(let i=0;i<blocks.length;i++)if(blocks[i].getBoundingClientRect().top<=readingLine)active=i;
  // Project Team label stays in the same shade as the adjacent curator credit.
  blocks.forEach((b,i)=>b.classList.toggle('is-highlighted',i===active || (active===3&&i===2) || (active===2&&i===3)));
 }
 function schedule(){if(!pending){pending=true;requestAnimationFrame(update)}}
 window.addEventListener('scroll',schedule,{passive:true});
 window.addEventListener('resize',schedule);
 update();
});
