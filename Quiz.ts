#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,5000);
    })
}

class Question {
    question!:string;
    answer!:string;
    constructor(question:string,answer:string) {
        this.question=question;
        this.answer=answer;
    }
}

class Quiz {
    marks=0;
    Q!:Question[];
    constructor(question:Question[]) {
        this.Q=question;
    }
    //dsiplay q,check q,result
    checkans(Q_no:Question,ans:string){
        if(Q_no.answer===ans){
            this.marks++;
            return true;
        }
        else{
            return false;
        }
    }

}

let Q1=new Question("The first computers were programmed using?","A) Machine Language");
let Q2=new Question("Which is considered to be the computers short-term memory?","A) RAM");
let Q3=new Question("What is the brain of the computer?","C) CPU");
let Q4=new Question("What allows multiple programs to run on a computer?","D) OS");
let Q5=new Question("Everything physical in a computer is attached to the...","B) MotherBoard");
let Q6=new Question("Information that is broken down into small chunks before it is sent to another computer are called...","B) Packets");
let Q7=new Question("An electronic tool that allows information to be input, processed, and output is called...","D) Computer");
let Q8=new Question("_____________ is a worldwide network of computers.","C) Internet");
let Q9=new Question("Part of a computer that allows a user to put information into the computer is called ______________.","C) Input Device");
let Q10=new Question("Another name for computer programs is _____________.","A) Software");""


async function QuizStart() {
    
let animate=chalkAnimation.neon("Quiz starting now!");
await sleep();
animate.stop();

let Qs=await inquirer.prompt([
    {
        message:"The first computers were programmed using?",
        type:"list",
        name:"ans1",
        choices:["A) Machine Language","B) Assembly Language","C) High Level Language","D) Programming Language"]
    },
    {
        message:"Which is considered to be the computers short-term memory?",
        type:"list",
        name:"ans2",
        choices:["A) RAM","B) REM","C) ROM","D) RIM"]
    },
    {
        message:"What is the brain of the computer?",
        type:"list",
        name:"ans3",
        choices:["A) MotherBoard","B) Memory","C) CPU","D) NIC"]
    },
    {
        message:"What allows multiple programs to run on a computer?",
        type:"list",
        name:"ans4",
        choices:["A) NIC","B) GUI","C) API","D) OS"]
    },
    {
        message:"Everything physical in a computer is attached to the...",
        type:"list",
        name:"ans5",
        choices:["A) HardDrive","B) MotherBoard","C) CPU","D) Memory"]
    },
    {
        message:"Information that is broken down into small chunks before it is sent to another computer are called...",
        type:"list",
        name:"ans6",
        choices:["A) Letters","B) Packets","C) Messages","D) Packages"]
    },
    {
        message:"An electronic tool that allows information to be input, processed, and output is called...",
        type:"list",
        name:"ans7",
        choices:["A) OS","B) MotherBoard","C) CPU","D) Computer"]
    },
    {
        message:"_____________ is a worldwide network of computers.",
        type:"list",
        name:"ans8",
        choices:["A) CPU","B) RAM","C) Internet","D) Network"]
    },
    {
        message:"Part of a computer that allows a user to put information into the computer is called ______________.",
        type:"list",
        name:"ans9",
        choices:["A) Output Devices","B) Software","C) Input Device","D) OS"]
    },
    {
        message:"Another name for computer programs is _____________.",
        type:"list",
        name:"ans10",
        choices:["A) Software","B) RAM","C) Input Devices","D) Hardware"]
    }
])

    let All_Qs=[Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10];
    let User_ans=[Qs.ans1,Qs.ans2,Qs.ans3,Qs.ans4,Qs.ans5,Qs.ans6,Qs.ans7,Qs.ans8,Qs.ans9,Qs.ans10];
    let i=0;
    let check=new Quiz(All_Qs);
    do {
        let result=check.checkans(All_Qs[i],User_ans[i]);
        if (result) {
            console.log(chalk.green.bold(`Q${i+1}'s answer is correct`));
        } else {
            console.log(chalk.red.bold(`Q${i+1}'s answer is incorrect.`));
            console.log(chalk.blue.italic(`The correct answer is ${All_Qs[i].answer}`));
        }
        i++;
    } while (All_Qs[i]!=null);    
    console.log(chalk.yellow.underline(`Your Total score out of 10 is:${check.marks}`));
}

QuizStart();
/*

*/