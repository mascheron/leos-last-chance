const fs=require('fs');
const d=[...require('./src/data/er.js'),...require('./src/data/k.js'),...require('./src/data/k_more.js'),...require('./src/data/v.js'),...require('./src/data/v_more.js')];
const ids=new Set();for(const n of d){if(ids.has(n.id))throw n.id;ids.add(n.id);for(const q of n.quiz){if(q.o.length!==4||q.a<0||q.a>3)throw 'bad '+n.id}}
let t=fs.readFileSync('src/template.html','utf8');
t=t.replace('/*DATA*/null',()=>JSON.stringify(d).replace(/</g,'\\u003c'));
fs.mkdirSync('dist',{recursive:true});fs.writeFileSync('dist/index.html',t);
console.log('nuggets',d.length,'quiz',d.reduce((a,n)=>a+n.quiz.length,0),'cards',d.reduce((a,n)=>a+n.cards.length,0),'bytes',t.length);
