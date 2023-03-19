// Create an array of tarot cards
let tarotCards = [
    "The Fool",
    "The Magician",
    "The High Priestess",
    "The Empress",
    "The Emperor",
    "The Hierophant",
    "The Lovers",
    "The Chariot",
    "Strength",
    "The Hermit",
    "Wheel of Fortune",
    "Justice",
    "The Hanged Man",
    "Death",
    "Temperance",
    "The Devil",
    "The Tower",
    "The Star",
    "The Moon",
    "The Sun",
    "Judgment",
    "The World"
  ];
  
  // Ask the user to pick a card
  console.log("欢迎来到情绪安抚喵!");
  let question = prompt("Think of a question in your mind and click OK to pick a card...");
  
  // Pick a random card from the array
  let selectedCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
  
  // Display the selected card to the user
  console.log(`The card you picked is: ${selectedCard}`);
  
  // Provide the meaning of the card to the user
  switch (selectedCard) {
    case "The Fool":
      console.log("0号牌愚人：新开始，乐观，taking risks。注意看下脚下是不是悬崖。");
      break;
    case "The Magician":
      console.log("1号牌魔术师： 显化，创意，想各种办法being resourceful，也要小心身边有大忽悠");
      break;
    case "The High Priestess":
      console.log("2号牌女祭司。直觉，智慧，有些保守和被动");
      break;
    case "The Empress":
      console.log("3号牌皇后。丰收，热情，有魅力，有点懒。小心变胖或怀孕");
      break;
    case "The Emperor":
        console.log("4号牌皇帝。责任，权威，果断，或者过于专断、才不配位");
        break;
    case "The Hierophant":
      console.log("5号牌教皇。教育，信仰，遵守制度。可能有些心胸狭隘，容不下其他观点");
      break;
     case "The Lovers":
      console.log("6号牌恋人。结盟，沟通，价值观合拍，和睦。");
      break;
    case "The Chariot":
        console.log("7号战车牌。卷起来！奋斗！勇往直前！努力奋斗ing的一般都是这个牌。");
        break;
 case "Strength":
        console.log("8号勇气。和老板或者外界大力量周旋。以柔克刚，要温柔坚定啊。");
        break;
case "The Hermit":
    console.log("9号牌隐士。独立，反省，自闭，或者刻薄、浮躁、神经质。");
    break;
case "The Wheel":
    console.log("10号牌命运之轮。该发生的都会发生，转变，转折点。或者拒绝改变，运气不好。");
    break;
    default:
      console.log("Sorry, we couldn't find the meaning of the selected card.");
      break;
  }
  document.getElementById("result").textContent += "\n" + meaning;
