function rameem(){
    const me = "Mahmood Hassan Rameem";

    const lifeState = "alive";

    return lifeState;
}


function myFriend(){
    const canYouTolerateRameem = true;
    const doYouLikeRameem = true;
    const haveAnyComplaine = false;

    return [canYouTolerateRameem, doYouLikeRameem, haveAnyComplaine];
}


const rameemLifeState = rameem();

// if I alive
if(rameemLifeState == "alive"){
    const [canYouTolerateRameem, doYouLikeRameem, haveAnyComplaine] = myFriend();

    // if my friend like me
    if(canYouTolerateRameem == true && doYouLikeRameem == true && haveAnyComplaine == false){
        let myMsg = "I am so grateful that you can tolerate and like me. Always support me. That's I really want from you. Love you friend";
        console.log(myMsg);
    }

    // if my friends dont like me
    else{
        myMsg = "I don't know but some how I hurt you. But I will never ask you what's my fault. Because I lost that rights over you. Whatever you can ignore me, insult me block me and everything you can. You haven't to see my face anyumore. I promise I will never show any annoyance over you. Because you don't like me but I will like you always. You are my best friend at past, at present you are my best friend and in future you are my best friend for ever. I will never hate my friend";
        console.log(myMsg);
    }
}

// if I not alive.
else{
    const myMsg = "I know that I always give you pain. But look me are no more. You haven't tolerate me anumore. Please forgive me. And delete this idiot boy from you mind. 'AMI CHILAM TOMADERI MAJHE, HESECHILAM EK SATHE, URECHILAM SOPNIL AKASE CHADER DESHE JETE HARIYE'";
    console.log(myMsg);
}