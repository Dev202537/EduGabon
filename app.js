// Simple client-side demo app (no real backend calls in this prototype)
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const dashboard = document.getElementById('dashboard');
const loginSection = document.querySelector('.card');
const gradesList = document.getElementById('gradesList');
const attList = document.getElementById('attList');
const msgList = document.getElementById('msgList');
const loginMsg = document.getElementById('loginMsg');

const demoGrades = [
  {subject:'Maths', score:14.5, term:'Trimestre 1'},
  {subject:'Français', score:12, term:'Trimestre 1'},
  {subject:'Science', score:15, term:'Trimestre 1'}
];
const demoAtt = [
  {date:'2025-11-10', status:'present'},
  {date:'2025-11-11', status:'absent'}
];
const demoMsg = [
  {title:'Réunion parents', body:'Réunion prévue le 20 Décembre à 08h.'},
  {title:'Vacances', body:'Les vacances débutent le 23 Déc.'}
];

function showDashboard(){
  loginSection.classList.add('hidden');
  dashboard.classList.remove('hidden');
  gradesList.innerHTML = demoGrades.map(g=>`<li>\${g.subject}: \${g.score} (\${g.term})</li>`).join('');
  attList.innerHTML = demoAtt.map(a=>`<li>\${a.date} — \${a.status}</li>`).join('');
  msgList.innerHTML = demoMsg.map(m=>`<li><strong>\${m.title}</strong><br/>\${m.body}</li>`).join('');
}

loginBtn.addEventListener('click', ()=>{
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  if(email === 'admin@edugabon.test' && password === 'admin123'){
    localStorage.setItem('edugabon_user', email);
    showDashboard();
  } else {
    alert('Identifiants incorrects pour cette démo.');
  }
});

logoutBtn && logoutBtn.addEventListener('click', ()=>{
  localStorage.removeItem('edugabon_user');
  location.reload();
});

// PWA install prompt
let deferredPrompt;
const btnAdd = document.getElementById('btnAdd');
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  btnAdd.hidden = false;
});
btnAdd.addEventListener('click', async () => {
  btnAdd.hidden = true;
  deferredPrompt && deferredPrompt.prompt();
  deferredPrompt = null;
});
