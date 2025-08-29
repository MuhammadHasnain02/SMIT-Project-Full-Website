// -----------------<<< Main Slider Code >>>-----------------
$('.single-item').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,

    // responsive: [
    //     { breakpoint: 1024, settings: { slidesToShow: 3 } },
    //     { breakpoint: 768,  settings: { slidesToShow: 2 } },
    //     { breakpoint: 480,  settings: { slidesToShow: 1 } }
    // ]
});

// -----------------<<< Featured Products Slider Code >>>-----------------
$('.FPSlider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,

    // responsive: [
    //     { breakpoint: 1024, settings: { slidesToShow: 3 } },
    //     { breakpoint: 768,  settings: { slidesToShow: 2 } },
    //     { breakpoint: 480,  settings: { slidesToShow: 1 } }
    // ]
});

// -----------------<<< Featured Products Data >>>-----------------

let FPCardsDiv = document.getElementById("FPCardsDiv")

let featuredProducts = [
    
    {
        id: 1,
        image: "Featured Products Images/1.png",
        title: "Burger 1",
        description:
        "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
        price: 100,
        category: "Burger",
        rating: 5,
    },
    {
        id: 2,
        image: "Featured Products Images/2.png",
        title: "Shawarma1",
        description:
        "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
        price: 200,
        category: "Shawarma",
        rating: 4,
    },
    {
        id: 3,
        image: "Featured Products Images/3.jpg",
        title: "Pizza 1",
        description: "Crispy zinger with crispy rolled into paratha",
        price: 300,
        category: "Pizza",
        rating: 3,
    },
    {
        id: 4,
        image: "Featured Products Images/4.jpg",
        title: "Burger 2",
        description: "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
        price: 400,
        category: "Burger",
        rating: 2,
    },
    {
        id: 5,
        image: "Featured Products Images/5.jpg",
        title: "Shawarma 2",
        description: "Aromatic arabian rice with 6 pacs of hot shots with KFC famous vietnamese sauce",
        price: 500,
        category: "Shawarma",
        rating: 1,
    },
    {
        id: 6,
        image: "Featured Products Images/6.png",
        title: "Pizza 2",
        description: "Crispy zinger with crispy rolled into paratha",
        price: 600,
        category: "Pizza",
        rating: 5,
    },
    {
        id: 7,
        image: "Featured Products Images/7.png",
        title: "Burger 3",
        description: "Enjoy the crispy chiken fillet in a soft bun with spicy mayo and our signature sauce",
        price: 700,
        category: "Burger",
        rating: 4,
    }
  
];

featuredProducts.forEach(prod => {
    FPCardsDiv.innerHTML +=
    `
    <div class="FPprodDiv border bg-white border-gray-300 rounded-2xl hover:cursor-pointer">

      <div class="prodMainImg">
        <img src="${prod.image}" class="object-cover rounded-t-2xl z-[1] opacity-90 hover:opacity-100 transition-opacity w-full h-[250px]">
      </div>
      <div class="cardAllTxtDiv bg-[#fff] text-black px-3 py-3 rounded-b-2xl">
        <p class="prodMainTxt font-semibold text-[22px] font-[Montserrat]">${prod.title}</p>
        <p class="prodRat text-yellow-400 text-[32px] h-9 flex flex-row gap-2 items-center">
          ${
            Array(5).fill().map((_, i) => 
              `<i class="fa-solid fa-star text-[14px] ${i < prod.rating ? "text-yellow-400" : "text-gray-300"}"></i>`
            ).join("")
          }
          <span class="prodRatTxt text-black text-[15px] flex items-center mt-1">(${prod.rating})</span>
        </p>
        <p class="prodDescrp pb-2 max-h-24 overflow-auto">${prod.description}</p>
        <div class="prodPriCartDiv flex justify-between items-center">
          <p class="prodPric text-[20px] hover:text-gray-400">$${prod.price}</p>
          <p><i class="prodCartIcon fa-solid fa-cart-shopping text-[18px] text-black hover:text-gray-400"></i></p>
        </div>
      </div>

    </div>
    `
  })