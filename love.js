// contador relación
const start=new Date("December 11, 2024 00:00:00").getTime();

setInterval(()=>{
    const now=new Date().getTime();
    const diff=now-start;

    const d=Math.floor(diff/(1000*60*60*24));
    const h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const m=Math.floor((diff%(1000*60*60))/(1000*60));

    const el=document.getElementById("counter");
    if(el) el.innerHTML=`We have loved each other for ${d} days ${h} hours ${m} minutes ❤️`;
},1000);


// corazones
function hearts(){
    setInterval(()=>{
        const h=document.createElement("div");
        h.className="heart";
        h.innerHTML="❤";
        h.style.left=Math.random()*100+"%";
        h.style.fontSize=(12+Math.random()*22)+"px";
        document.body.appendChild(h);
        setTimeout(()=>h.remove(),6000);
    },300);
}


// carta secreta
function showSecret(){
    const letter=document.getElementById("letter");
    letter.style.display="block";

    const text=`My love...

Has convertido mi vida en un mar de colores sin fin, mis dias en veranos soleados, mis noches en desvelos iluminados. Definitivamente el destino nos unio, y nos llevo al punto exacto en nuestra vida para colindar y estar juntos en este momento, para formar our own universe y en un futuro tener experiencias, momentos, lecciones, y muchas enseñanzas. Se que no han sido fáciles las cosas, hemos tenido momentos retadores, rachas y dias desgastantes, me da paz saber que estamos aqui, nos hemos acoplado a las circunstancias, a los momentos y hemos sacado adelante nuestro amor. Nuestro primer 14 de febrero lejos, aunque duele, estoy segura que es uno menos, y eso me llena el alma. No queria que fuera un dia mas, y aunque no es demasiado, te pregunto ¿Quieres ser mi san valentin? ¿Hoy mañana y siempre?

Lov u <3

Forever yours ❤️`;

    let i=0;
    const interval=setInterval(()=>{
        letter.innerHTML+=text[i];
        i++;
        if(i>=text.length) clearInterval(interval);
    },40);

    hearts();
}
