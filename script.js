
// var index = 0;
// var qouteOutPut = [
//   "“Be yourself; everyone else is already taken. ”",
//   "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
//   "“So many books, so little time.”",
//   "“A room without books is like a body without a soul.”",
//   "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
//   `“You've gotta dance like there's nobody watching,
//   Love like you'll never be hurt,
//   Sing like there's nobody listening,
//   And live like it's heaven on earth.”`,
// ];

// var authorOutPut = [
//   "― Oscar Wilde",
//   "― Marilyn Monroe",
//   "― Frank Zappa",
//   "― Marcus Tullius Cicero",
//   "― Bernard M. Baruch",
//   "― William W. Purkey",
// ];


// function generateQoute(){
//   index++
//     if (index>=qouteOutPut.length)
//     {
//         index=0 
//     }                                                   
//     document.getElementById("qouteOutPut").innerHTML= qouteOutPut[index]
//     document.getElementById("authorOutPut").innerHTML= authorOutPut[index]

// }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var outPut = document.getElementById("outPut")
// var qoutes=["“Be yourself; everyone else is already taken.”― Oscar Wilde" , "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”― Marilyn Monroe" , "“So many books, so little time.”― Frank appa","“A room without books is like a body without a soul.”― Marcus Tullius Cicero","“You only live once, but if you do it right, once is enough.”― Mae West]"]

// function generateQoute()
// {
//   var randomQoute = qoutes[Math.floor(Math.random()* qoutes.length)];

//   outPut.innerHTML= randomQoute;
// }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





var qouteOutPut = [
  { quoteName: "“Be yourself; everyone else is already taken.”",
   letters: "― Oscar Wilde" },

  {
    quoteName: "A room without books is like a body without a soul",
    letters: "― Marcus Tullius Cicero”"
  },
  {
    quoteName: "So many books, so little time.",
    letters: "― Frank appa”"
  },
  {
    quoteName: "“You only live once, but if you do it right, once is enough.”",
    letters: "― Mae West"
  }
];


function generateQoute() {

var index = Math.floor(Math.random() * qouteOutPut.length)
  document.getElementById('qouteOutPut').innerHTML = qouteOutPut[index].quoteName;
  document.getElementById('nameOutPut').innerHTML = qouteOutPut[index].letters;

}




