const phrases = ['Web Developer','Full-Stack Engineer','Game Dev Background','Agency Founder','AI Builder'];
let pi=0,ci=0,deleting=false;
const el=document.getElementById('typed-text');
function type(){
  const word=phrases[pi];
  if(!deleting){
    el.textContent=word.slice(0,ci+1);
    ci++;
    if(ci===word.length){deleting=true;setTimeout(type,1800);return}
  }else{
    el.textContent=word.slice(0,ci-1);
    ci--;
    if(ci===0){deleting=false;pi=(pi+1)%phrases.length;setTimeout(type,300);return}
  }
  setTimeout(type,deleting?60:90);
}
setTimeout(type,1000);