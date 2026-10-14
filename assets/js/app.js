
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('pre').forEach(pre=>{
  const btn=document.createElement('button');btn.className='copy-btn';btn.textContent='Copiar';
  btn.onclick=async()=>{const c=pre.cloneNode(true);const b=c.querySelector('.copy-btn');if(b)b.remove();await navigator.clipboard.writeText(c.innerText.trim());btn.textContent='Copiado!';setTimeout(()=>btn.textContent='Copiar',1200)};pre.appendChild(btn)
 });
 const key='curso-python-progress';const checks=[...document.querySelectorAll('[data-progress]')];const saved=JSON.parse(localStorage.getItem(key)||'{}');
 checks.forEach(c=>{c.checked=!!saved[c.dataset.progress];c.onchange=()=>{saved[c.dataset.progress]=c.checked;localStorage.setItem(key,JSON.stringify(saved));update()}});
 function update(){const n=checks.filter(c=>c.checked).length;document.querySelectorAll('.progress').forEach(el=>el.style.width=(n/Math.max(parseInt(el.dataset.total||checks.length||1),1)*100)+'%')}update()
});function printPage(){window.print()}
