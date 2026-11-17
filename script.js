const seasonalDescription = `Комплексный шиномонтаж включает помощь при установке автомобиля на подъёмник, снятие колёс, зачистку ступиц от коррозии и налёта, зачистку привальной части диска к ступице (для литых и кованых дисков), при необходимости технологическую мойку комплекта колёс, демонтаж шин, зачистку хампа, дефектовку вентилей и замену при необходимости, монтаж сезонных шин, устранение статического и динамического дисбаланса, обработку привалочной части диска медной или алюминиевой смазкой и установку колёс на автомобиль. Для R14 и выше предусмотрена помощь при спуске автомобиля с подъёмника. Используется шиномонтажная паста с ингибиторами для препятствия образованию и распространению коррозии. Дополнительные работы оплачиваются согласно прайс-листу.`;
const complexBalanceDescription = `Помощь при установке автомобиля на подъёмник, снятие колёс, зачистка ступиц от коррозии и налёта, зачистка привальной части диска к ступице (для литых и кованых дисков), при необходимости технологическая мойка комплекта колёс, дефектовка вентилей и замена по согласованию, устранение статического и динамического дисбаланса, обработка привалочной части диска медной или алюминиевой смазкой, установка колёс на автомобиль и помощь при спуске автомобиля с подъёмника. Дополнительные работы оплачиваются согласно прайс-листу.`;
const balanceDescription = `Зачистка привальной части диска к ступице (для литых и кованых дисков), при необходимости технологическая мойка колёс, дефектовка вентилей и замена по согласованию с клиентом, устранение статического и динамического дисбаланса, обработка привалочной части диска медной или алюминиевой смазкой. Дополнительные работы оплачиваются согласно прайс-листу.`;
const rebuildDescription = `Зачистка привальной части диска к ступице, при необходимости технологическая мойка комплекта колёс, демонтаж шины с диска, зачистка хампа, дефектовка вентиля и замена при необходимости, монтаж шины, устранение статического и динамического дисбаланса, обработка привалочной части диска медной или алюминиевой смазкой. Используется шиномонтажная паста с ингибиторами для препятствия образованию и распространению коррозии. Дополнительные работы оплачиваются согласно прайс-листу.`;
const services = [];
function addSeries(category, title, rims, prices, minutes, description) {
  rims.forEach((rim, i) => services.push({category, title: `${title} R${rim}`, rim: String(rim), price: prices[i], minutes: minutes[i] || minutes[0], description}));
}
const rimsSeason=[13,14,15,16,17,18,19,20,21,22,23];
addSeries('season','Комплексный сезонный шиномонтаж',rimsSeason,[2000,2400,2600,2800,3000,3200,3400,3700,4000,4200,4500],Array(11).fill(30),seasonalDescription);
services.push({category:'season',title:'Комплексный шиномонтаж',rim:'',price:5000,minutes:30,description:seasonalDescription});
addSeries('balance-complex','Балансировка (комплексная)',[13,14,15,16,17,18,19,20,21,22,23,24],[1400,1500,1600,1700,1900,2000,2100,2200,2300,2500,2700,3000],[15,15,15,15,15,15,15,15,15,15,35,35],complexBalanceDescription);
addSeries('balance','Балансировка (отдельная)',[13,14,15,16,17,18,19,20,21,22,23,24],[800,1000,1100,1200,1300,1400,1500,1600,1700,2000,2200,2400],[10,10,10,10,10,10,10,10,10,20,25,25],balanceDescription);
addSeries('rebuild','Переборка колёс',[13,14,15,16,17,18,19,20,21,22,23,24],[1500,1800,2000,2100,2300,2500,2700,2800,3000,3300,3400,3500],[15,15,10,10,10,10,10,10,10,10,15,15],rebuildDescription);
[
 ['Замена вентилей',280,5],['Оптимизация',100,5],['Прикипевшие гайки',100,5],['Мойка колёс',70,5],['Пакет для колёс',50,null],['2.0',50,5],['Шины',100,5]
].forEach(([title,price,minutes])=>services.push({category:'extra',title,rim:'',price,minutes,description:'Дополнительная услуга. Стоимость указана за позицию согласно предоставленному прайс-листу.'}));
services.push(
 {category:'other',title:'Проверка балансировки',rim:'',price:null,minutes:30,description:'Комплекс включает снятие одного колеса, зачистку привальной части диска, проверку дисбаланса на специализированном станке, покрытие привальной части алюминиевой смазкой и установку колеса строго на то же место, откуда оно было снято. Акция не действует для коммерческого транспорта: фургоны, микроавтобусы, грузовики и пикапы. Все дополнительные работы оплачиваются согласно прайс-листу.'},
 {category:'other',title:'Установка колёс на автомобиль',rim:'',price:2000,minutes:15,description:'Установка колёс на автомобиль.'},
 {category:'other',title:'Установка колёс на автомобиль от 17 диаметра',rim:'17+',price:2000,minutes:15,description:'Установка колёс на автомобиль от 17 диаметра.'},
 {category:'other',title:'Диагностика датчиков TPMS',rim:'',price:500,minutes:10,description:'Диагностика датчиков системы контроля давления в шинах TPMS.'},
 {category:'other',title:'Замена датчиков TPMS',rim:'',price:4000,minutes:30,description:'Замена датчиков системы контроля давления в шинах TPMS.'},
 {category:'other',title:'Хранение колёс в сборе',rim:'',price:3000,minutes:5,description:'Хранение колёс в сборе.'}
);
const categoryNames={'season':'Сезонный шиномонтаж','balance-complex':'Балансировка — комплексная','balance':'Балансировка — отдельная','rebuild':'Переборка колёс','extra':'Дополнительная услуга','other':'Другие услуги'};
const grid=document.querySelector('#serviceGrid');
const search=document.querySelector('#serviceSearch');
const categoryFilter=document.querySelector('#categoryFilter');
const rimFilter=document.querySelector('#rimFilter');
const empty=document.querySelector('#emptyState');
const fmt=n=>n==null?'Уточняйте':new Intl.NumberFormat('ru-RU').format(n)+' ₽';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
[13,14,15,16,17,18,19,20,21,22,23,24].forEach(r=>rimFilter.add(new Option('R'+r,String(r))));
function render(){
 const q=search.value.trim().toLocaleLowerCase('ru');
 const cat=categoryFilter.value, rim=rimFilter.value;
 const list=services.filter(s=>(cat==='all'||s.category===cat)&&(rim==='all'||s.rim===rim)&&(s.title+' '+s.description+' '+(s.rim||'')).toLocaleLowerCase('ru').includes(q));
 grid.innerHTML=list.map((s)=>{const index=services.indexOf(s);return `<article class="service-card"><div class="service-top"><div><h3>${esc(s.title)}</h3><div class="service-meta">${esc(categoryNames[s.category])}${s.minutes?` · ${s.minutes} мин`:''}</div></div><div class="service-price">${fmt(s.price)}</div></div><p class="service-desc">${esc(s.description.length>150?s.description.slice(0,147)+'…':s.description)}</p><div class="service-actions"><button class="details-btn" data-details="${index}">Подробнее ↓</button><button class="book-card" data-service="${index}">Записаться</button></div></article>`}).join('');
 empty.hidden=list.length>0;
}
render();[search,categoryFilter,rimFilter].forEach(el=>el.addEventListener(el===search?'input':'change',render));
document.querySelectorAll('#categoryTabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('#categoryTabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');categoryFilter.value=btn.dataset.category;render()}));
const dialog=document.querySelector('#bookingDialog'), bookingForm=document.querySelector('#bookingForm'), serviceSelect=document.querySelector('#bookingService'), bookingRim=document.querySelector('#bookingRim'), result=document.querySelector('#formResult');
services.forEach((s,i)=>serviceSelect.add(new Option(`${s.title} — ${fmt(s.price)}`,String(i))));
function syncRims(){const s=services[Number(serviceSelect.value)];bookingRim.innerHTML='<option value="Не указан">Не указан</option>';if(s&&s.rim){bookingRim.add(new Option(s.rim.startsWith('R')?s.rim:'R'+s.rim,s.rim));}else if(s&&['season','balance','balance-complex','rebuild'].includes(s.category)){[13,14,15,16,17,18,19,20,21,22,23,24].forEach(r=>bookingRim.add(new Option('R'+r,'R'+r)));}else bookingRim.disabled=true;bookingRim.disabled=!(s&&(['season','balance','balance-complex','rebuild'].includes(s.category)||s.rim));}
serviceSelect.addEventListener('change',syncRims);
function openBooking(index){if(index!==undefined)serviceSelect.value=String(index);syncRims();result.hidden=true;dialog.showModal();}
document.querySelectorAll('[data-book]').forEach(b=>b.addEventListener('click',()=>openBooking()));
grid.addEventListener('click',e=>{const details=e.target.closest('[data-details]'),book=e.target.closest('[data-service]');if(details){const s=services[Number(details.dataset.details)];details.closest('.service-card').querySelector('.service-desc').textContent=s.description;details.textContent='Свернуть ↑';details.onclick=()=>{render()};}if(book)openBooking(Number(book.dataset.service));});
document.querySelector('#closeDialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
const dateInput=document.querySelector('#bookingDate');const today=new Date();dateInput.min=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);
bookingForm.addEventListener('submit',async e=>{e.preventDefault();const data=new FormData(bookingForm);const service=services[Number(data.get('service'))];const message=[`Заявка — шиномонтаж «Одуванчик»`,`Услуга: ${service.title}`,`Стоимость: ${fmt(service.price)}`,`Диаметр: ${data.get('rim')}`,`Дата: ${data.get('date')||'не указана'}`,`Имя: ${data.get('name')}`,`Телефон: ${data.get('phone')}`,`Комментарий: ${data.get('comment')||'нет'}`].join('\n');
 result.hidden=false;result.innerHTML=`<b>Заявка сформирована.</b><br>Скопируйте текст и отправьте его администратору по телефону 64-33-08.`;const copy=document.createElement('button');copy.type='button';copy.textContent='Скопировать заявку';copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(message);copy.textContent='Скопировано ✓'}catch{const area=document.createElement('textarea');area.value=message;document.body.append(area);area.select();document.execCommand('copy');area.remove();copy.textContent='Скопировано ✓'}});result.append(copy);});
document.querySelector('#year').textContent=new Date().getFullYear();
const toggle=document.querySelector('#menuToggle'),nav=document.querySelector('#mainNav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));
