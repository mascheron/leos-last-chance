const fs=require('fs');
const d=[...require('./src/data/er.js'),...require('./src/data/k.js'),...require('./src/data/k_more.js'),...require('./src/data/v.js'),...require('./src/data/v_more.js')];
for(const pf of ['./src/data/patches.js','./src/data/patches2.js']){const P=require(pf);for(const id in P){const n=d.find(x=>x.id===id);if(!n)throw 'patch '+id;const p=P[id];Object.assign(n,p.set||{});for(const f of ['punkte','cards','quiz']){if(p[f])n[f]=p[f];}
 if(p.addPunkte)n.punkte=n.punkte.concat(p.addPunkte);if(p.addCards)n.cards=n.cards.concat(p.addCards);if(p.addQuiz)n.quiz=n.quiz.concat(p.addQuiz)}}
const ids=new Set();for(const n of d){if(ids.has(n.id))throw n.id;ids.add(n.id);for(const q of n.quiz){if(q.o.length!==4||q.a<0||q.a>3)throw 'bad '+n.id}}
let t=fs.readFileSync('src/template.html','utf8');
t=t.replace('/*POL*/null',()=>JSON.stringify(require('./src/data/polrecht.js')));
t=t.replace('/*DATA*/null',()=>JSON.stringify(d).replace(/</g,'\\u003c'));
fs.mkdirSync('dist',{recursive:true});fs.writeFileSync('dist/index.html',t);
console.log('nuggets',d.length,'quiz',d.reduce((a,n)=>a+n.quiz.length,0),'cards',d.reduce((a,n)=>a+n.cards.length,0),'bytes',t.length);
