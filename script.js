// Typewriter
const titles=["IT Support Specialist","Aspiring Web Developer","Problem Solver"];
let ti=0,ci=0,del=false;
const el=document.getElementById('typed');
(function type(){
  const cur=titles[ti];
  el.textContent=cur.substring(0,ci);
  if(!del && ci===cur.length){del=true;setTimeout(type,2000);return;}
  if(del && ci===0){del=false;ti=(ti+1)%titles.length;setTimeout(type,300);return;}
  ci += del ? -1 : 1;
  setTimeout(type,del?40:70);
})();

// Reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.1});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

// Close nav on click (mobile)
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));

// Form validation
function submitForm(e){
  e.preventDefault();
  const fields=[['name',v=>v.trim().length>1],['email',v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)],['subject',v=>v.trim().length>2],['msg',v=>v.trim().length>5]];
  let ok=true;
  fields.forEach(([k,test])=>{
    const v=document.getElementById('f-'+k).value;
    const err=document.getElementById('e-'+k);
    if(!test(v)){err.classList.add('show');ok=false;}else{err.classList.remove('show');}
  });
  if(ok){
    document.getElementById('ok').classList.add('show');
    e.target.reset();
    setTimeout(()=>document.getElementById('ok').classList.remove('show'),3000);
  }
  return false;
}
