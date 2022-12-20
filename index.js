var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your Name? ");

var score = 0;
function quiz(ques,ans)
{
    var userAnswer = readlineSync.question(ques+"Your Answer: ");

    if(userAnswer === ans)
    {
        console.log("\nYay !!! Your Answer '"+ userAnswer + "' is CORRECT.");
        score++;
    }
    else
    {
        console.log("\nBetter Luck Next Time !!! Your Answer '"+ userAnswer + "' is WRONG.\n" +
            "Correct Answer is '"+ans+ "' .");
        //score--;
    }
    console.log("Current score : "+score+"\n");
}

var quesList = [
    {
        question: "1. Which one is the first fully supported 64-bit operating system?" +
            "\n\n(A) Windows Vista\n(B) MacOS\n(C) Linux\n(D) Windows XP\n",
        answer: "Linux"
    },
    {
        question: "2. Computer Hard Disk was first introduced in 1954 by :" +
            "\n\n(A) Dell\n(B) Apple\n(C) Microsoft\n(D) IBM\n",
        answer: "IBM"
    },
    {
        question: "3. Which  of the following is not a web browser?" +
            "\n\n(A) MOSAIC\n(B) WWW\n(C) Facebook\n(D) Netscape Navigator\n",
        answer: "Facebook"
    },
    {
        question: "4. In computer world, Trojan refer to :" +
            "\n\n(A) Virus\n(B) Malware\n(C) Worm\n(D) Spyware\n",
        answer: "Malware"
    },
    {
        question: "5. Which one of the following is a programming language?" +
            "\n\n(A) HTTP\n(B) HTML\n(C) HPML\n(D) FTP\n",
        answer: "HTML"
    },

];

console.log("======WELCOME , "+userName+" =======");
console.log("Let's check your knowledge about Computers : \n");
for(var i = 0; i<quesList.length; i++)
{
    quiz(quesList[i].question, quesList[i].answer);
}

console.log("========RESULTS========");
console.log("Final Score : "+score);
console.log("=======================");
