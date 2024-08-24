import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Kahvaltı', '#8b00ff'),
  new Category('c2', 'Güneydoğu', '#f5428d'),
  //new Category('c3', 'Atıştırmalık', '#f54242'),
  new Category('c4', 'Ege', '#f5a442'),
  new Category('c5', 'Karadeniz', '#f5d142'),
  new Category('c6', 'Marmara', '#368dff'),
  new Category('c7', 'İç Anadolu', '#41d95d'),
  new Category('c8', 'Doğu Anadolu', '#9eecff'),
  new Category('c9', 'Akdeniz', '#b9ffb0'),
  new Category('c10', 'Tatlılar', '#47fced'),
  new Category('c11', 'İçecekler', '#ffc7ff'),
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'Türk Kahvaltısı',
    'EKONOMİK',
    'BASİT',
    'https://www.flypgs.com/blog/wp-content/uploads/2023/04/turk-kahvaltisi.jpg',
    20,
    [
      'çeşitli peynirler',
      'zeytinler',
      'yumurta',
      'domates',
      'salatalık',
      'reçel',
      'bal',
      'tereyağı',
      'börek(isteğe bağlı)',
      'hamurişi'
    ],
    [
      'Yumurta 5-10 dakika haşlanır.',
      'Domates, salatalık zar şeklinde doğranır.',
      'Malzemeler tabağa konulur.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Katmer',
    'EKONOMİK',
    'ORTA',
    'https://www.cdnaws.com/i/hancigida/QvGYHLqi2qQZW3D2QvGYHPsSdwLYQ1DrZW3D2ZW3D2/images/blog/katmer-70.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c2'],
    'Beyran',
    'pricey',
    'simple',
    'https://www.hakkariobjektifhaber.com/d/other/4-012.png',
    45,
    [
      '300g Cattle Hack',
      '1 Tomato',
      '1 Cucumber',
      '1 Onion',
      'Ketchup',
      '2 Burger Buns'
    ],
    [
      'Form 2 patties',
      'Fry the patties for c. 4 minutes on each side',
      'Quickly fry the buns for c. 1 minute on each side',
      'Bruch buns with ketchup',
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c2','c11'],
    'Menengiç Kahvesi',
    'luxurious',
    'challenging',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5CU6dHsXjUl5ITKvonTTRy-Os33HMYEt-LA&s',
    60,
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      '100g Vegetable Oil',
      'Salt',
      'Lemon Slices'
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2'],
    'Ali Nazik Kebabı',
    'luxurious',
    'simple',
    'https://www.shutterstock.com/image-photo/turkish-ali-nazik-kebab-yogurt-600nw-2420025569.jpg',
    15,
    [
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper'
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c2'],
    'Patlıcan Kebabı',
    'affordable',
    'hard',
    'https://www.konyalihaciusta.com/wp-content/uploads/2020/01/patl%C4%B1can-kebap.png',
    240,
    [
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yoghurt',
      '200g Cream',
      'Orange Peel'
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c4'],
    'Kabak Çiçeği Dolması',
    'affordable',
    'simple',
    'https://www.guneyegeturkiye.com/assets/upload/fotograflar/3_1.jpg',
    20,
    [
      '1 1/2 Cups all-purpose Flour',
      '3 1/2 Teaspoons Baking Powder',
      '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted'
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c4'],
    'Şevketi Bostan',
    'pricey',
    'challenging',
    'https://www.ardaninmutfagi.com/wp-content/uploads/2013/04/pirincli-sevket-i-bostan.jpg',
    35,
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c4'],
    'Börülce',
    'affordable',
    'hard',
    'https://image.hurimg.com/i/hurriyet/75/750x422/5bd8349b67b0a804e81f38ef.jpg',
    45,
    [
      '1 Teaspoon melted Butter',
      '2 Tablespoons white Sugar',
      '2 Ounces 70% dark Chocolate, broken into pieces',
      '1 Tablespoon Butter',
      '1 Tablespoon all-purpose Flour',
      '4 1/3 tablespoons cold Milk',
      '1 Pinch Salt',
      '1 Pinch Cayenne Pepper',
      '1 Large Egg Yolk',
      '2 Large Egg Whites',
      '1 Pinch Cream of Tartar',
      '1 Tablespoon white Sugar'
    ],
    [
      'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
      'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
      'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
      'Place chocolate pieces in a metal mixing bowl.',
      'Place bowl over a pan of about 3 cups hot water over low heat.',
      'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
      'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
      'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
      'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
      'Transfer a little less than half of egg whites to chocolate.',
      'Mix until egg whites are thoroughly incorporated into the chocolate.',
      'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
      'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
      'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c4'],
    'İzmir Köfte',
    'luxurious',
    'simple',
    'https://st.depositphotos.com/4585465/57619/i/1600/depositphotos_576190666-stock-photo-traditional-homemade-turkish-food-kofte.jpg',
    30,
    [
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette'
    ],
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm11',
    ['c4'],
    'Fava',
    'EKONOMİK',
    'ORTA',
    'https://cdn.yemek.com/mncrop/600/315/uploads/2022/03/tekmil-fava-8.png',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm12',
    ['c4'],
    'Otlu Börek',
    'EKONOMİK',
    'ORTA',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2024/05/ispanakliborek.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm13',
    ['c4'],
    'Ege Keşkeği',
    'EKONOMİK',
    'ORTA',
    'https://www.guzelliginpesinde.com/wp-content/uploads/2022/03/keskek-tarifi.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm14',
    ['c5'],
    'Hamsi',
    'EKONOMİK',
    'ORTA',
    'https://c1.klipartz.com/pngpicture/108/676/sticker-png-turkey-european-anchovy-hamsi-tava-frying-pan-recipe-dish-fish-cuisine.png',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm15',
    ['c5'],
    'Kara Lahana Çorbası',
    'EKONOMİK',
    'ORTA',
    'https://www.nalia.com.tr/wp-content/uploads/2021/08/home-desktop-slider-03.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm16',
    ['c5'],
    'Kara Lahana Sarması',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuJzupxWdGnJBsI5W_XWwcXE3orn0n5oVLg&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm17',
    ['c5'],
    'Kuru Fasulye',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxecattO7W5aTwA9_XKeC7phzQZyYYk49VSQ&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm18',
    ['c5'],
    'Muhlama',
    'EKONOMİK',
    'ORTA',
    'https://e7.pngegg.com/pngimages/597/696/png-clipart-vegetarian-cuisine-kuymak-black-sea-region-fafuly-turkish-cuisine-others-food-recipe-thumbnail.png',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm19',
    ['c5'],
    'Karadeniz Pidesi',
    'EKONOMİK',
    'ORTA',
    'https://www.orkidepidebuca.com/images/icerik/38420.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm20',
    ['c5'],
    'Mısır Ekmeği',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO07yq6mUL10_JxWWKs1rATFPZ3NL0DoX92w&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm21',
    ['c6'],
    'İskender Kebabı',
    'EKONOMİK',
    'ORTA',
    'https://st2.depositphotos.com/9050074/11946/i/950/depositphotos_119467282-stock-photo-iskender-kebab-turkish-traditional-food.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm22',
    ['c6'],
    'İnegöl Köfte',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXx-ue51m_T5BC2BIvmDkH_ZVSrvaILWByQ&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm23',
    ['c6'],
    'Tahinli Pide',
    'EKONOMİK',
    'ORTA',
    'https://menderespide.com/Upload/Images/tahin-ceviz.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm24',
    ['c6'],
    'Süt Helvası',
    'EKONOMİK',
    'ORTA',
    'https://helvaciyakubefendi.com/wp-content/uploads/2020/03/sut-helvasi-urun-9.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm25',
    ['c6'],
    'Milföylü Yalova Kebabı',
    'EKONOMİK',
    'ORTA',
    'https://cdn.goturkiye.com/yalova/yalova-kebab-with-puff-pastry.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm26',
    ['c6'],
    'Pideli Köfte',
    'EKONOMİK',
    'ORTA',
    'https://w7.pngwing.com/pngs/641/857/png-transparent-souvlaki-kebab-meatball-kofta-%C4%86evapi-chicken-barbecue-food-animals-thumbnail.png',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm27',
    ['c6'],
    'Hamur Bamyası',
    'EKONOMİK',
    'ORTA',
    'https://cahidesultan.com/wp-content/uploads/2023/10/04b0c-16903129198_d7ed632041_c.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm28',
    ['c6'],
    'İstanbul Pilavı',
    'EKONOMİK',
    'ORTA',
    'https://iasbh.tmgrup.com.tr/e21b7d/812/467/0/728/1101/1362?u=http://i.tmgrup.com.tr/sfr/2013/07/30/Orjinal/415864517627.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm29',
    ['c6'],
    'Edirne Tava Ciğer',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzv1KIsrrhJoCA1rwKTkfCa0dwuHMNjx0Ng&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm30',
    ['c6'],
    'Islama köfte',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbt6b7fQKWOf_cY_Uo9X6Pp9SR29uTkDXsw&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm31',
    ['c6','c10'],
    'Hayrabolu Tatlısı',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5i_DfeUOvrJrae1-2f97moEh88NgHRrAFw&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm32',
    ['c6','c10'],
    'Höşmerim Tatlısı',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jO000HBPK_-C3UhBPARPXYcs6fTbKqkwDA&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm33',
    ['c7'],
    'Etli Ekmek',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOan4UAd56V6WDMw0gPZICGb9Lie6PZzS1A&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm34',
    ['c7'],
    'Ankara Tava',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLHdOOvH19UOS1mfk1zTE75ksjB8F-YqKIw&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm35',
    ['c7'],
    'Pastırma',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsN2k2wC32sHY97ZdOESudkQli9WLwicCPlA&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm36',
    ['c7'],
    'Çibörek',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXo38_-B613Vcs1zbpp7AlDTPj_EIfwoQ-uw&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm37',
    ['c7'],
    'Sivas Köfte',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjeDmfU1wVDr4zXSSxH86MaghXw6dnCvWSVw&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm38',
    ['c7'],
    'Keskin Tava',
    'EKONOMİK',
    'ORTA',
    'https://i.pinimg.com/236x/23/bd/2d/23bd2d91f5dabfde5b35fbd4724a1fd2.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm39',
    ['c7'],
    'Aksaray Bulaması',
    'EKONOMİK',
    'ORTA',
    'https://yeryuzuduragi.com/wp-content/uploads/2023/11/Aksaray-mutfagi.png',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm40',
    ['c7'],
    'Calla',
    'EKONOMİK',
    'ORTA',
    'https://www.mevlanayemek.com/wp-content/uploads/2015/11/calla.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm41',
    ['c8'],
    'Kaburga Dolması',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7zcB_7OueYfcQH0Dx5Am1r52TGwAqlYFSA&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm42',
    ['c8'],
    'Kaz Eti',
    'EKONOMİK',
    'ORTA',
    'https://image.hurimg.com/i/hurriyet/75/0x0/5bc6d6d40f25432744a9da06.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm43',
    ['c8','c10'],
    'Gül Tatlısı',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-PEo3oCun1BaN9FMeG47WMLRIe4T2J3JOg&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm44',
    ['c8','c1'],
    'Van Kahvaltısı',
    'EKONOMİK',
    'ORTA',
    'https://pasakirbahcesi.com.tr/img/urun/579dd826567e2d8087f1718d9a7afdan.png',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm45',
    ['c9'],
    'Hatay Kebabı',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimxuh7Au9Z6nr9YuDbppfbxfqxEEV16fATw&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm46',
    ['c9'],
    'Humus',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq8gu7PZ9WB9-HPwSjtCq9ucvane8b5pId1Q&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm47',
    ['c9','c10'],
    'Tahinli Kabak Tatlısı',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJV8WPQrh-7lHiYFJzoZMwSWBvIY1SMk5P2Q&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm48',
    ['c9'],
    'Tahinli Piyaz',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQME3ESKwWMHmc9E-c_f8PedQuM2bYXllh30Q&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm49',
    ['c9'],
    'Künefe',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1f69Wo5BLrgXZfDD2Bncm6q9rj4s3o9oZA&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm50',
    ['c9'],
    'Babagannuş',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCgv5aVxEHobBmGIHST9KlGCtjpsTz8AA6Q&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm51',
    ['c9'],
    'Adana Kebabı',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrHo0USZExbdz8lf7j4T1nZBYDvFbtMVR_Q&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm52',
    ['c9'],
    'Kabune',
    'EKONOMİK',
    'ORTA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3iXqxJ5XWVaO5Z88JKKH4HCDEXeWbAxio_Q&s',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),


];
