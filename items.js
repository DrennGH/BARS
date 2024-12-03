const product = [
  {
    id: 0,
    image: "images/items/mBot_KIT.jpg",
    title: "mBot Kit",
    quantity: 5,
  },
  {
    id: 1,
    image: "images/items/AA_Battery.jpg",
    title: "AA Battery",
    quantity: 40,
  },
  {
    id: 2,
    image: "images/items/Line_Following_Platform.jpg",
    title: "Line Following Platform",
    quantity: 3,
  },
  {
    id: 3,
    image: "images/items/Sumobot_Ring.jpg",
    title: "Sumobot Ring",
    quantity: 4,
  },
  {
    id: 4,
    image: "images/items/3D_Printer.jpg",
    title: "3D Printer",
    quantity: 1,
  },
  {
    id: 5,
    image: "images/items/PLA_Filament.jpg",
    title: "PLA Filament",
    quantity: 3,
  },
  {
    id: 6,
    image: "images/items/Erovoutika_Sumobot.png",
    title: "Erovoutika Sumobot",
    quantity: 10,
  },
  {
    id: 7,
    image: "images/items/Erovoutika_Line_Follower.jpg",
    title: "Erovoutika Line Follower",
    quantity: 10,
  },
  {
    id: 8,
    image: "images/items/Erovoutika_Pick-and-Place.jpg",
    title: "Erovoutika Pick-and-Place",
    quantity: 6,
  },
  {
    id: 9,
    image: "images/items/Erovoutika_Electronics_Kit.png",
    title: "Erovoutika Electronics Kit",
    quantity: 4,
  },
  {
    id: 10,
    image: "images/items/Erovoutika_ZMRobo.jpg",
    title: "Erovoutika ZMRobo",
    quantity: 2,
  },
  {
    id: 11,
    image: "images/items/Arduino_R3.jpg",
    title: "Arduino R3",
    quantity: 6,
  },
  {
    id: 12,
    image: "images/items/3.75v_Battery.png",
    title: "3.75v Battery",
    quantity: 20,
  },
  {
    id: 13,
    image: "images/items/DuPont_Male_to_Male.jpg",
    title: "DuPont Male to Male",
    quantity: 20,
  },
  {
    id: 14,
    image: "images/items/DuPont_Male_to_Female.png",
    title: "DuPont Male to Female",
    quantity: 20,
  },
  {
    id: 15,
    image: "images/items/DuPont_Female_to_Female.jpg",
    title: "DuPont Female to Female",
    quantity: 20,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, quantity } = item;
    return (
      `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Available: ${quantity}</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add</button>" +
      `</div>
        </div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  if (cart.length < 2) {
    cart.push({ ...categories[a] });
    localStorage.setItem("cart", JSON.stringify(cart));
    displaycart();
  } else {
    alert("You can only add up to 2 items.");
  }
}

function delElement(a) {
  cart.splice(a, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displaycart();
}

function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Select your item(s)";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        return (
          `<div class='cart-item'>
                  <div class='row-img'>
                      <img class='rowimg' src=${image}>
                  </div>
                  <p style='font-size:12px;'>${title}</p>   ` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}

document.querySelector(".submit").addEventListener("click", (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    alert("You have not selected any items!");
  } else {
    window.location.href = "confirm.html";
    alert("Item(s) submitted!");
  }
});
