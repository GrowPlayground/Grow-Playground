// SCRIPT TO LOAD AVATAR IN SIDEBAR (MIGRATE TO VUE)



$(document).ready(function() {

var health = 10,
	maxHealth = 50,
    healthPercentage = health / maxHealth * 100,
    level = 1,           
  	experienceOne = 30,
    experienceOneNeeded = 50,
    experienceTwo = 18,
    experienceTwoNeeded = 50,
    health = 40,
    maxHealth = 50,
    gold = 3,
    questSet = ["socialI", "experienceI", "knowledgeI", "skillsI", "healthI"],
    questColors = ["red", "orange", "blue", "brown", "green", "yellow"],
    statName = ["social", "experience", "knowledge", "skills", "health", "other"],
    visible = "interface",
    skillsEquipped = [0, 1], // skills
    skillPoints = 10,
    skillPointsMax = 10,
    skillPointsIncrement = setInterval(skillPointsIncrement, 3500),
    currentOpponent = 1,
    negativeRecency = 0,
    petEquipped = "3",
    avatarLocation = "sideBar";

  
// MARKET VARIABLES
var itemOfInterest = 0,
  buyOrder = [0,1,2,3,3,3],
  buyApproval = false,
  itemsOwned = {
  "usables": {
  "healthPotion": 3,
  "treasureChest": 10,
  "keys": 30,
  "petWhiteFood": 2,
  },
  "equipment": [3,4,5,6,7,8,9,10,11,12,13,14,15],
  "pets": [0,1,2,3],
  "customization": [],
  "backgrounds": [0,1],
  "town": [],
  },
  itemsEquipped = [],
  avatar = {
  equipped: {
    shield: "",
    weapon: {
    number: 14,
    name: "apprentice staff",
    layer: 4,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1498582495/apprentice_staff_j6u0ot.png",
    category: "weapon",
    coordinates: [105, 96],
    size: [65,56],
  },
    armor: {
    number: 15,
    name: "hitchhikers suits",
    layer: 1,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1499957110/pageArmor_xt3cww.png",
    category: "armor",
    coordinates: [108, 125],
    size: [60, 65],
	gold: 25,
  },
    helmet: "",
    shoes: ""
  },
  stats: {
    social: 5,
    experience: 1,
    knowledge: 20,
    skills: 7,
    health: 10
  }
};
  

// Arya, remove over time? 

var Arya = {
  gold: {
    "1": "http://res.cloudinary.com/gionisos/image/upload/v1489961245/coin1_lta9kt.png",
    "2": "http://res.cloudinary.com/gionisos/image/upload/v1489961252/coin2_x1upvg.png",
    "3": "http://res.cloudinary.com/gionisos/image/upload/v1489961254/coin3_yxot5a.png",
    "4": "http://res.cloudinary.com/gionisos/image/upload/v1489961256/coin4_zcpgxc.png",
    "5": "http://res.cloudinary.com/gionisos/image/upload/v1489961258/coin5_nv73vv.png"
  },
};


// VARIABLES
var itemPlayGround = [
  {
    number: 0,
	name: "chainsaw",
	layer: 4,
	source: "http://res.cloudinary.com/gionisos/image/upload/a_29/v1497786925/chainsaw_klqmdz.png",
	category: "weapon",
	coordinates: [100, 98],
	descriptionShop: "RHMMMM RHMMMM!",
	descriptionSideBar: "It's so shiny!",
    size: [55, 50],
	gold: 50,
  },
  {
    number: 1,
    name: "fancy party robes",
    layer: 1,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497446465/partyRobes_ej2rzu_tg5bps.png",
    category: "armor",
	descriptionShop: "Fancy Schmancy and a little bit of garlic",
	descriptionSideBar: "Is it going to fit?!",
    coordinates: [132, 125],
    size: [60, 32],
	gold: 10,
  },
  {
    number: 2,
    name: "weird costume",
    layer: 1,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497446755/weirdRobes_vgy0ru_quwuye.png",
    category: "armor",
	descriptionShop: "You will never get dirty with these ones!",
    coordinates: [126, 123], // y , x for whatever reasons, le me!
    size: [60, 36],
	gold: 15
  },
  {
    number: 3,
    name: "basic sword",
    layer: 4,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497211196/55_9_f43pm3.png",
    category: "weapon",
    coordinates: [112, 117],
    size: [35, 35],
  },
  {
    number: 4,
    name: "fancy sword",
    layer: 4,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497211188/55_10_uuuedo.png",
    category: "weapon",
    coordinates: [109, 115],
    size: [35, 35],
  },
  {
    number: 5,
    name: "rusty hat",
    layer: 2,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497210647/55_22_apqpad.png",
    category: "helmet",
    coordinates: [80, 123],
    size: [64, 44],
  },
  {
    number: 6,
    name: "viking hat",
    layer: 2,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497211123/55_23_hcoanh.png",
    category: "helmet",
    coordinates: [78, 123],
    size: [65, 45],
  },
  {
    number: 7,
    name: "Axe",
    layer: 4,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497211178/55_11_jgeinf.png",
    category: "weapon",
    coordinates:  [92, 102],
    size: [50, 50],
	
  },
  {
    number: 8,
    name: "warrior armor",
    layer: 2,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497211148/55_18_j0wdw1.png",
    category: "armor",
    coordinates: [128, 125],
    size: [60, 37],
  },
  {
    number: 9,
    name: "Welcome to the Club",
    layer: 4,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497211169/55_12_hlq2hd.png",
    category: "weapon",
	descriptionShop: "Who does not like <br> a little bit of clubbing <br> once in a while?",
    coordinates: [92, 103],
    size: [50, 50],
  },
  {
    number: 10,
    name: "fiery sword",
    layer: 4,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497211160/55_14_brpmlx.png",
    category: "weapon",
	descriptionShop: "A burning piece of steel",
    coordinates: [105, 112]	,
    size: [40, 40],	
  },
  {
    number: 11,
    name: "golden shield",
    layer: 4,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497212849/latest_19_gnx49k.png",
    category: "shield",
    coordinates: [125, 150],
    size: [40, 40],	
  },
  {
    number: 12,
    name: "apprentice robe",
    layer: 1,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1498582495/apprentice_robe_xzmad0.png",
    category: "armor",
    coordinates: [116, 130],
    size: [50, 60],
	gold: 25,
  },
  {
    number: 13,
    name: "apprentice hat",
    layer: 2,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1498582495/apprentice_hat_azxwzy.png",
    category: "helmet",
    coordinates: [78, 123],
    size: [65, 45],
	gold: 20,
  },
  {
    number: 14,
    name: "apprentice staff",
    layer: 4,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1498582495/apprentice_staff_j6u0ot.png",
    category: "weapon",
    coordinates: [105, 96],
    size: [65,56],
	gold: 15,
  },
  {
    number: 15,
    name: "hitchhikers suits",
    layer: 1,
    source: "http://res.cloudinary.com/gionisos/image/upload/v1499957110/pageArmor_xt3cww.png",
    category: "armor",
    coordinates: [108, 125],
    size: [60, 65],
	gold: 25,
  },
];

// AVATAR BACKGROUND VARIABLES
var avatarBackground = [
  {
    number: 0,
    name: "background-red",
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497443338/BackgroundRed_nzpixc.png",
    category: "background",
    size: [100, 100],
  },{
    number: 1,
    name: "background-yellow",
    source: "http://res.cloudinary.com/gionisos/image/upload/v1497785371/BackgroundYellow_nzpixc_gcbil8.png",
    category: "background",
    size: [100, 100],
  }],
  backgroundsOwned = [];


// PET VARIABLES
var pet = [{  
    name: "Dressed-up water melon",
	number: 0,
	source: "http://res.cloudinary.com/gionisos/image/upload/v1497446465/verkleidete_Wassermelone_fgucfh_qswtyf.png",
    layer: 5,
    coordinates: [138, 80],
    size: [52, 45],
	equipped: false,
  },{
    name: "white fox",
	number: 1,
	source: "http://res.cloudinary.com/gionisos/image/upload/v1497446465/whitefox_hfsbft_j0iojq.png",
	layer: 5,
    coordinates: [138, 80],
    size: [54, 45],
	equipped: false,
  }, {  
    name: "blue fox",
	number: 2,
	source: "http://res.cloudinary.com/gionisos/image/upload/v1498285418/foxBlue_juyx95.png",
    layer: 5,
    coordinates: [138, 80],
    size: [40, 34],
	equipped: false,
  },{
    name: "golden fox",
	number: 3,
	source: "http://res.cloudinary.com/gionisos/image/upload/v1498285418/foxGold_lyva5x.png	",
	layer: 5,
    coordinates: [138, 80],
    size: [54, 45],
	equipped: true,
  }, {  
    name: "black bear",
	number: 4,
	source: "http://res.cloudinary.com/gionisos/image/upload/v1498285418/BearBlack_kar4to.png",
    layer: 5,
    coordinates: [138, 80],
    size: [52, 45],
	equipped: false,
  }, {  
    name: "blue flying pig",
	number: 5,
	source: "http://res.cloudinary.com/gionisos/image/upload/v1498285418/PigBlue_tnm2uy.png",
    layer: 5,
    coordinates: [138, 80],
    size: [85, 85],
	equipped: false,
  },{
    name: "green flying pig",
	number: 6,
	source: "http://res.cloudinary.com/gionisos/image/upload/v1498285418/PigGreen_dskhns.png",
	layer: 5,
    coordinates: [138, 80],
    size: [54, 45],
	equipped: false,
  },      
];


// UPDATE FUNCTION

function update() {
	

// EXPERIENCE FUNCTIONS

  // CHECK FOR LEVEL UP
  if (
    experienceOne >= experienceOneNeeded &&
    experienceTwo >= experienceTwoNeeded
  ) {
    level++;
    levelUpEvent();
    health = maxHealth;
    experienceOne -= experienceOneNeeded;
    experienceTwo -= experienceTwoNeeded;
  }

  // LOAD LEVEL
  $(".level").html(level);

  // LOAD EXPERIENCE BARS
  // 1
  let experienceOnePercentage = experienceOne / experienceOneNeeded * 100;
  $(".experienceSpanOne").css("width", +experienceOnePercentage + "%");
  $(".experienceSpanOne").css("background-color", "#FF851B");



// HEALTH FUNCTIONS

// LOADING HEALTH BACKGROUND
  healthPercentage = health / maxHealth * 100;

  let colorMinus = 255 - healthPercentage * 2;

  $(".avatarContainer").css({
    "background-image": "radial-gradient(ellipse farthest-corner at 50% 50%, rgba(" +
      colorMinus +
      ", 0, 0, 0.2) 10%, rgba(0," +
      Math.floor(healthPercentage * 2.5)+
      ",0, 0.8) 90%)"
  });

// SIMPLE DYING FUNCTIONS
if (health <= 0) {
    alert("You just died!");
    health = maxHealth;
  }


// SIMPLE MAX HEALTH FUNCTION
if (health > maxHealth) {
alert("max health!");
health = maxHealth;
}



 // LOAD GOLD
  if (Arya.gold[gold] !== undefined) {
    $(".goldContainer").html(
      "<img src='" + Arya.gold[gold] + "'" + "class='goldImage'>"
    );
  } else {
    $(".goldContainer").text("Gold: " + Math.floor(gold));
  }

  // MARKET - ITEM OF INTEREST
  $(".marketImageContainer").html(
    "<img src='" +
      itemPlayGround[buyOrder[itemOfInterest]].source +
      "'" +
      "class='marketImage' alt='"+ itemPlayGround[buyOrder[itemOfInterest]].name +"'><span class='marketImageText'>Gold: " +
      itemPlayGround[buyOrder[itemOfInterest]].gold +
      "</span>"
  );


};

update();










// MARKET FUNCTIONS

















// LOADING AVATAR!


// LOAD AVATAR INTO RIGHT POSITION 
function avatarImageLoad(avatarPosition) {
let itemCategory = ["armor","shield","weapon","helmet","shoes"];


if (avatarPosition === "sideBar") {

avatarLocation = "sideBar";
// REMOVE OTHER VERSIONS OF YOU!
$(".itemPreview").children().remove();

// AvatarImageFloatingIsland 
$(".avatarContainer").append('<div class="avatarContainerBackgroundDiv"><img class="avatarContainerBackground" src="http://res.cloudinary.com/gionisos/image/upload/v1497889280/avatarImageBackground_fye7om_a3z0mi.png"></img></div>');
$(".avatarContainerBackgroundDiv").hide().fadeIn(800);
$(".avatarContainer").append('<img class="avatarImage" src="http://res.cloudinary.com/gionisos/image/upload/v1497443267/avatarWithoutBackground_oal8a6.png"></img>'); 


if (petEquipped !== ""){
$(".avatarContainer").append('<img class="sideBarPet" style="width:'+ pet[petEquipped].size[0] +'px; height:'+ pet[petEquipped].size[1]+'px" src="'+ pet[petEquipped].source +'"></img>');

for (i=0; i<4;i++){

 if (avatar.equipped[itemCategory[i]].length !== 0) {
 $(".avatarContainer").append(
      "<img src='" +
        avatar.equipped[itemCategory[i]].source +
        "' alt='" + avatar.equipped[itemCategory[i]].name + 
        "' value='" +
        itemCategory[i] + "Equipped" +  "' style=' width:" + avatar.equipped[itemCategory[i]].size[0] + "px; height:" + avatar.equipped[itemCategory[i]].size[1] +  
        "px; position:absolute;top:" + (avatar.equipped[itemCategory[i]].coordinates[0] - 53) + "px;left:" + (avatar.equipped[itemCategory[i]].coordinates[1] -11) + "px; z-index:"+ avatar.equipped[itemCategory[i]].layer + "'>");
}
} // end for loop

} else {

for (i=0; i<4;i++){

// shift avatar into middle
$(".avatarImage").css({
"top":"3px",
"left":"60px",
});

 if (avatar.equipped[itemCategory[i]].length !== 0) {
 $(".avatarContainer").append(
      "<img src='" +
        avatar.equipped[itemCategory[i]].source +
        "' alt='" + avatar.equipped[itemCategory[i]].name + 
        "' value='" +
        itemCategory[i] + "Equipped" +  "' style=' width:" + avatar.equipped[itemCategory[i]].size[0] + "px; height:" + avatar.equipped[itemCategory[i]].size[1] +  
        "px; position:absolute;top:" + (avatar.equipped[itemCategory[i]].coordinates[0]-45) + "px;left:" + (avatar.equipped[itemCategory[i]].coordinates[1]-22) + "px; z-index:"+ avatar.equipped[itemCategory[i]].layer + "'>");
}
} // end for loop
}

$(".avatarContainer > img").hide().fadeIn(800);



} else if (avatarPosition === "shop") {


avatarLocation = "shop"; 

$(".avatarContainer").children().remove();




//there is a pet, load avatar into right position
if (petEquipped !== ""){
$(".itemPreview").children().remove();
$(".itemPreview").append('<img class="avatarShop" src="http://res.cloudinary.com/gionisos/image/upload/v1497443267/avatarWithoutBackground_oal8a6.png"></img><img class="shopPet" alt ="shopPet" style="width:'+ pet[petEquipped].size[0] +'px; height:'+ pet[petEquipped].size[1]+'px" src="'+ pet[petEquipped].source +'"></img>');
$(".avatarShop").css({
"left":"130px",
});


for (i=0; i<4;i++){
 if (avatar.equipped[itemCategory[i]].length !== 0) {
 $(".itemPreview").append(
      "<img src='" +
        avatar.equipped[itemCategory[i]].source +
        "' alt='" +
        avatar.equipped[itemCategory[i]].name + 
        "' value='" + itemCategory[i] + "Equipped" +  "' style=' width:" + avatar.equipped[itemCategory[i]].size[0] + "px; height:" + avatar.equipped[itemCategory[i]].size[1] +  
        "px; position:absolute;top:" + avatar.equipped[itemCategory[i]].coordinates[0] + "px;left:" + avatar.equipped[itemCategory[i]].coordinates[1] + "px; z-index:"+ avatar.equipped[itemCategory[i]].layer + "'>");

}
}
} else {
// pet is currently unequipped
$(".itemPreview").children().remove();
$(".itemPreview").append('<img class="avatarShop" src="http://res.cloudinary.com/gionisos/image/upload/v1497443267/avatarWithoutBackground_oal8a6.png"></img>');
$(".avatarShop").css({
"left":"100px",
});

for (i=0; i<4;i++){
 if (avatar.equipped[itemCategory[i]].length !== 0) {
 $(".itemPreview").append(
      "<img src='" +
        avatar.equipped[itemCategory[i]].source +
        "' alt='" +
        avatar.equipped[itemCategory[i]].name + 
        "' value='" + itemCategory[i] + "Equipped" +  "' style=' width:" + avatar.equipped[itemCategory[i]].size[0] + "px; height:" + avatar.equipped[itemCategory[i]].size[1] +  
        "px; position:absolute;top:" + avatar.equipped[itemCategory[i]].coordinates[0] + "px;left:" + (avatar.equipped[itemCategory[i]].coordinates[1]-30) + "px; z-index:"+ avatar.equipped[itemCategory[i]].layer + "'>");

}
}
} // end pet if else statement

$(".itemPreview > img").hide().fadeIn(800);
}
}

avatarImageLoad("sideBar");





// avatar animation

$(document).on("click",".itemPreview > img", function(){

alert("You just touched me! At least go and wash your hands beforehand!");

});




});

