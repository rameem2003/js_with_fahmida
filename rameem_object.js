const mySelf = {
    myName : "Mahmood Hassan Rameem",
    age : 19,
    currentAddress : "Mirpur 10, Dhaka",
    parmanentAddress : "Madaripur, Dhaka",
    profession : "Stydent",
    currentInstitute : "Institute of Science Trade & Technology, Dhaka",
    study : "Diploma Engineering in Computer Technology",
    maritalStatus : "Single",

    myFamily : {
        father : {
            name : "ANM Mudassir Hossain",
            age : 60,
            msg : "Rameem taratari jao 😒. (but kothay jabo seta bole na.) Rameem hocche na (But ki hocche na seta bole na)",
            myMsg : "Jamu na amar morji 😒",
        },

        mother : {
            name : "Nijhum Akter",
            age : 45,
            msg : "Ki re saridin ki koris",
            myMsg : "Saradin kam kori",
        },

        youngerBrother : {
            name : "Meherab Hossain Taneem",
            age : 14,
            msg : "A vao val lage na. (tarpor hothat bolbe 'Utha le re baba')",
            myMsg : "Shil maira dimu 🤣",
        },

        grandMother : {
            name : "Mosreba Khatun",
            age : 85,
            msg : "Amar lathi",
            myMsg : "Tumi nije nije phone chalano shikhba kobe?",
        },

        fupi : {
            name : "Afroza Sultana",
            age : 55,
            msg : "Rameem sob thik ache to",
            myMsg : "😅",
        }
    },


    my_legend_friends : {
        fahmida : {
            name : "Fahmida Yeasmin",
            age : 22,
            attitude : "Queen",
            about : [
                "My best friend",
                "My best sister ( apu ) in my life ❤",
                "Coffee lover",
                "So much dedicated",
            ],

            alwaysSay : "Don't worry Rameem. I always with you. Love you so much choto vai ❤ 🥰",
        },

        mahabul : {
            name : "Mahabul Alam",
            age : 19,
            attitude : "Innocent",
            about : [
                "My best friend",
                "Mad for Erin",
                "majhe moddhe matha kharap hoye jay. pani dhala lage",
            ],

            alwaysSay : "ami kintu single. ami kichu komu na sorom kore 🙈",
        },

        resel : {
            name : "Jahedul Islam Rasel",
            age : 19,
            attitude : "Don't Care",
            about : [
                "My best friend",
                "Nice personality",
                "Banana lover",
                "Expart in khandana 🤪",
            ],

            alwaysSay : "khida lagche vai😥Fahmida cholo Baten re  chuna die😂",
        },

        baten : {
            name : "Abdul Baten",
            age : 19,
            attitude : "ami kichu bujhi na (like taheri)",
            about : [
                "My best friend",
                "GF er kothay uthe bose",
                "khali chuna khay legend er theke 🤪",
            ],

            alwaysSay : "taka nai (egula daha gujob 😆)",
        },

        pathan : {
            name : "Pabel Pathan",
            age : 20,
            attitude : "Gang Star",
            about : [
                "My best friend",
                "Best photographer in republic of legends",
                "Vary Stylish",
                "Sometime aggressive in bargaining ✌"
            ],

            alwaysSay : "Ato pora lage naki ? Amni e A+✌️",
        },

        maysha : {
            name : "Maysha Siddiqi",
            age : 19,
            attitude : "Cuty",
            about : [
                "My best friend",
                "So much emotional",
            ],

            alwaysSay : "Dost help koris",
        }
    },


    my_personal_life : {
        favouriteFood : "Muri",
        wakeUp : "7.30 am",
        sleep : "12.20 pm",
        specialPerson : false,
        myDailyDriver : {
            device1 : "Rameem-Home (Desktop Computer meanwhile my virtual GF)",
            device2 : "Macbook (Laptop Computer meanwhile my 2nd virtual GF)",
            device3 : "Redmi 8 (My smartphone)",
        },
        myBestPartner : "Fahmida Yeasmin",
        msgForMyBelovedFriends : "My close friends are my strength and also my weakness. I love my friend's lot. Specially fahmida, she is an important part of my life. When I fall into depression then she gives me lots of hope and happiness. Also, all my friends give me power. Always with you guys. Valobasha Obiram."
    }
}

console.log(mySelf.my_personal_life.msgForMyBelovedFriends);
document.getElementById("msg").innerHTML = mySelf.my_personal_life.msgForMyBelovedFriends;