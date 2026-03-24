export interface Recommendation {
  name: string;
  category: string;
  blurb: string;
  mapsUrl: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  recommendations: Recommendation[];
}

export const categories: Category[] = [
  {
    id: "dinner",
    name: "Dinner (Special Occasion)",
    icon: "pasta",
    recommendations: [
      {
        name: "Lazy Bear",
        category: "Dinner",
        blurb: "Tasting menu, book way ahead. Cozy and creative; the wagyu and cioppino are unforgettable.",
        mapsUrl: "https://maps.app.goo.gl/LazyBearSF",
      },
      {
        name: "Angler",
        category: "Dinner",
        blurb: "Upscale hearth-fired seafood on the Embarcadero. The lunch prix fixe is a great value.",
        mapsUrl: "https://maps.app.goo.gl/AnglerSF",
      },
      {
        name: "Kokkari",
        category: "Dinner",
        blurb: "Best Greek in SF. Stunning room, exceptional lamb and branzino.",
        mapsUrl: "https://maps.app.goo.gl/KokkariSF",
      },
      {
        name: "Friends Only",
        category: "Dinner",
        blurb: "Intimate omakase on Nob Hill, focused on dry-aged fish. Champagne included.",
        mapsUrl: "https://maps.app.goo.gl/FriendsOnlySF",
      },
      {
        name: "Rich Table",
        category: "Dinner",
        blurb: "Inventive California cooking. Porcini donuts, sardini chips, uni pasta — don't miss it.",
        mapsUrl: "https://maps.app.goo.gl/RichTableSF",
      },
      {
        name: "Cotogna",
        category: "Dinner",
        blurb: "Rustic Italian in Jackson Square. Exceptional pastas; try to sit at the bar.",
        mapsUrl: "https://maps.app.goo.gl/CotognaSF",
      },
      {
        name: "State Bird Provisions",
        category: "Dinner",
        blurb: "Dim sum-style California food. Super fun. Reserve in advance.",
        mapsUrl: "https://maps.app.goo.gl/StateBirdSF",
      },
      {
        name: "San Ho Won",
        category: "Dinner",
        blurb: "Top-tier Korean BBQ by the chef behind Benu. The galbi is extraordinary.",
        mapsUrl: "https://maps.app.goo.gl/SanHoWonSF",
      },
      {
        name: "The Morris",
        category: "Dinner",
        blurb: "Neighborhood gem with an outstanding duck and killer charcuterie. Get the Chartreuse slushy.",
        mapsUrl: "https://maps.app.goo.gl/TheMorrisSF",
      },
      {
        name: "Del Popolo",
        category: "Dinner",
        blurb: "Wood-fired Neapolitan pizza near the Masonic. Incredible crust, great patio. Reserve ahead.",
        mapsUrl: "https://maps.app.goo.gl/DelPopoloSF",
      },
      {
        name: "Flour + Water",
        category: "Dinner",
        blurb: "The Mission original. Exceptional pasta and pizza in a buzzy room. Book in advance.",
        mapsUrl: "https://maps.app.goo.gl/FlourWaterSF",
      },
    ],
  },
  {
    id: "casual",
    name: "Casual Eats",
    icon: "bowl",
    recommendations: [
      {
        name: "La Taqueria",
        category: "Casual",
        blurb: "The SF burrito. Get the carne asada super, get it toasted (dorado).",
        mapsUrl: "https://maps.app.goo.gl/LaTaqueriaSF",
      },
      {
        name: "House of Nanking",
        category: "Casual",
        blurb: "Chinatown legend. Bold, chef-driven — just let them order for you.",
        mapsUrl: "https://maps.app.goo.gl/HouseOfNankingSF",
      },
      {
        name: "Zuni Café",
        category: "Casual",
        blurb: "SF institution on Market St. The brick-oven roast chicken for two is a must.",
        mapsUrl: "https://maps.app.goo.gl/ZuniCafeSF",
      },
      {
        name: "Original Joe's",
        category: "Casual",
        blurb: "Old-school Italian-American in North Beach. Sit at the counter.",
        mapsUrl: "https://maps.app.goo.gl/OriginalJoesSF",
      },
      {
        name: "Señor Sisig",
        category: "Casual",
        blurb: "Filipino-Mexican fusion. The chimichangas are legendary.",
        mapsUrl: "https://maps.app.goo.gl/SenorSisigSF",
      },
      {
        name: "Flour + Water Pizzeria",
        category: "Casual",
        blurb: "Neapolitan-style pizza in North Beach. Crispy, fresh, great vibe.",
        mapsUrl: "https://maps.app.goo.gl/FlourWaterPizzeriaSF",
      },
      {
        name: "Muracci's",
        category: "Casual",
        blurb: "Counter-service Japanese curry near Union Square. Cheap, generous, delicious.",
        mapsUrl: "https://maps.app.goo.gl/MuraccisSF",
      },
    ],
  },
  {
    id: "coffee",
    name: "Coffee & Bakeries",
    icon: "coffee",
    recommendations: [
      {
        name: "The Coffee Movement",
        category: "Coffee",
        blurb: "Tiny Chinatown stand, best cappuccino in the city. Stand-up only.",
        mapsUrl: "https://maps.app.goo.gl/CoffeeMovementSF",
      },
      {
        name: "Saint Frank",
        category: "Coffee",
        blurb: "Beautiful café near the Embarcadero. Great lattes, gorgeous space.",
        mapsUrl: "https://maps.app.goo.gl/SaintFrankSF",
      },
      {
        name: "Arsicault Bakery",
        category: "Coffee",
        blurb: "Best croissant in SF (some say the US). Also get the kouign-amann.",
        mapsUrl: "https://maps.app.goo.gl/ArsicaultSF",
      },
      {
        name: "Maison Nico",
        category: "Coffee",
        blurb: "French bakery + charcuterie in the Financial District. The pâté en croûte is art.",
        mapsUrl: "https://maps.app.goo.gl/MaisonNicoSF",
      },
      {
        name: "Tartine Manufactory",
        category: "Coffee",
        blurb: "SF's bread mecca. Almond croissant + banana cream pie. Get there early.",
        mapsUrl: "https://maps.app.goo.gl/TartineSF",
      },
    ],
  },
  {
    id: "bars",
    name: "Bars & Wine",
    icon: "wine",
    recommendations: [
      {
        name: "Verjus",
        category: "Bars",
        blurb: "Parisian-soul wine bar. Small plates, natural wine, slow evenings. Get the omelette.",
        mapsUrl: "https://maps.app.goo.gl/VerjusSF",
      },
      {
        name: "Bar Part Time",
        category: "Bars",
        blurb: "Moody natural wine bar with DJs on weekends. Best dressed crowd in the city.",
        mapsUrl: "https://maps.app.goo.gl/BarPartTimeSF",
      },
      {
        name: "Harlan Records",
        category: "Bars",
        blurb: "Hidden cocktail bar off a Union Square alley, decked in vinyl records.",
        mapsUrl: "https://maps.app.goo.gl/HarlanRecordsSF",
      },
      {
        name: "Balboa Cafe",
        category: "Bars",
        blurb: "Cow Hollow classic since 1914. Come for the espresso martinis and the burger.",
        mapsUrl: "https://maps.app.goo.gl/BalboaCafeSF",
      },
      {
        name: "Bodega North Beach",
        category: "Bars",
        blurb: "Cool wine bar in North Beach. Great natural wine, fun snack menu, everything $15.",
        mapsUrl: "https://maps.app.goo.gl/BodegaNorthBeachSF",
      },
    ],
  },
  {
    id: "hotels",
    name: "Hotels",
    icon: "hotel",
    recommendations: [
      {
        name: "Palihotel",
        category: "Hotels",
        blurb: "Charming boutique hotel in Union Square. Beautifully designed rooms, great location.",
        mapsUrl: "https://maps.app.goo.gl/PalihotelSF",
      },
      {
        name: "The Huntington Hotel",
        category: "Hotels",
        blurb: "Legendary Nob Hill classic. Historic, elegant, steps from Grace Cathedral. Check out the Big 4 lounge.",
        mapsUrl: "https://maps.app.goo.gl/HuntingtonSF",
      },
      {
        name: "1 Hotel San Francisco",
        category: "Hotels",
        blurb: "Sustainability-focused luxury hotel right on the Embarcadero. Stunning waterfront location.",
        mapsUrl: "https://maps.app.goo.gl/1HotelSF",
      },
    ],
  },
  {
    id: "worth-a-stop",
    name: "Worth a Stop",
    icon: "star",
    recommendations: [
      {
        name: "Ferry Building",
        category: "Worth a Stop",
        blurb: "SF's best food hall on the waterfront. Hit the Saturday farmers' market.",
        mapsUrl: "https://maps.app.goo.gl/FerryBuildingSF",
      },
      {
        name: "Bernal Cutlery",
        category: "Worth a Stop",
        blurb: "Best knife shop in the city. Beautiful Japanese knives, genuinely helpful staff.",
        mapsUrl: "https://maps.app.goo.gl/BernalCutlerySF",
      },
      {
        name: "Breakfast at Tiffany's",
        category: "Worth a Stop",
        blurb: "Neighborhood breakfast spot in the Excelsior. Huge portions, cozy diner vibe.",
        mapsUrl: "https://maps.app.goo.gl/BreakfastTiffanysSF",
      },
    ],
  },
];
