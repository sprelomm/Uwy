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

You are my safest place,
my favorite coincidence,
and the most beautiful story
life has ever written for me.

I choose you today,
tomorrow,
and in every universe that exists.

Forever yours ❤️`;

    let i=0;
    const interval=setInterval(()=>{
        letter.innerHTML+=text[i];
        i++;
        if(i>=text.length) clearInterval(interval);
    },40);

    hearts();
}
