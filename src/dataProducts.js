const products = [
    {
      id: 1,
      type: "pizza",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/1-1-600x600.png',
      title: 'Apricot Chicken',
      description: 'Crispy bacon, tasty ham, pineapple, onion and stretchy mozzarella, finished with a BBQ swirl.',
      price: 18.30,
      hasDiscount: false,
      rate: 0
    },
    {
      id: 2,
      type: "pasta",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/3-1-600x600.png',
      title: 'BBQ chicken breast',
      description: 'A mighty meaty double helping of all the reasons you love our burger.',
      price: 8.00,
      oldPrice: 12.61,
      hasDiscount: true,
      rate: 4
    },
    {
      id: 3,
      type: "burger",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/2-1-600x600.png',
      title: 'Bacon Burger',
      description: 'A mighty meaty double helping of all the reasons you love our burger.',
      price: 10.95,
      hasDiscount: false,
      rate: 0
    },
    {
      id: 4,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/5-1-600x600.png',
      title: 'Blueberry Shake',
      description: 'Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental division',
      price: 10.68,
      hasDiscount: false,
      rate: 3
    },
    {
      id: 5,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/27-1-600x600.png',
      title: 'Kiwi Smoothie',
      description: 'Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental division',
      price: 12.33,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 6,
      type: "burger",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/7-1-600x600.png',
      title: 'Cheese Butter',
      description: 'A mighty meaty double helping of all the reasons you love our burger.',
      price: 15.76,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 7,
      type: "pizza",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/17-1-600x600.png',
      title: 'Grand Italiano',
      description: 'Quisque pretium turpis non tempus cursus. Nulla consequat, mi nec pellentesque imperdiet, mi quam congue magna, tristique commodo.',
      price: 7.00,
      oldPrice: 11.42,
      hasDiscount: true,
      rate: 4
    },
    {
      id: 8,
      type: "desert",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/11-1-600x600.png',
      title: 'Chocolate Muffin',
      description: 'Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts',
      price: 17.20,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 9,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/54.1-450x450.png',
      title: 'Water Bottle',
      description: 'Investing in a reusable water bottle that you can refill throughout the day. Carrying one around with you will make you more likely to drink up.',
      price: 10.18,
      hasDiscount: false,
      rate: 3
    },
    {
      id: 10,
      type: "pizza",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/53-1-600x600.png',
      title: 'Vegge Lover',
      description: 'Extra-virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives',
      price: 14.90,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 11,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/52-1-600x600.png',
      title: 'Tropicana Juice',
      description: 'View great tasting Tropicana Orange Juice and Juice Drink Products. Featuring Tropicana Orange Juice.',
      price: 11.11,
      hasDiscount: false,
      rate: 5
    },
    {
      id: 12,
      type: "pizza",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/51-1-600x600.png',
      title: 'Trio Cheese',
      description: 'Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella,',
      price: 12.00,
      oldPrice: 16.93,
      hasDiscount: true,
      rate: 4
    },
    {
      id: 13,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/50-1-600x600.png',
      title: 'Trio Cafe',
      description: 'Trio Cafe is Family owned establishment located in Boston Waterfront next to World Trade Center.',
      price: 12.18,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 14,
      type: "pasta",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/49-1-600x600.png',
      title: 'Tagliatelle Molto',
      description: 'A mighty meaty double helping of all the reasons you love our burger.',
      price: 15.61,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 15,
      type: "pizza",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/48-1-600x600.png',
      title: 'Supreme Pizza',
      description: 'Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped with lightly drizzled red sauce, pesto, and fresh basil',
      price: 6.00,
      oldPrice: 11.75,
      hasDiscount: true,
      rate: 4
    },
    {
      id: 16,
      type: "pizza",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/47-1-600x600.png',
      title: 'Summer Pizza',
      description: 'Shrimp, Red Capsicum, Green Capsicum, Onion, Chilli flakes, Lemon Pepper, Mozzarella, finished with Aioli',
      price: 9.00,
      oldPrice: 12.15,
      hasDiscount: true,
      rate: 4
    },
    {
      id: 17,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/4-1-600x600.png',
      title: 'Black Coffee',
      description: 'Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts',
      price: 11.76,
      hasDiscount: false,
      rate: 0
    },
    {
      id: 18,
      type: "pasta",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/6-1-600x600.png',
      title: 'Bolognese Pasta',
      description: 'A mighty meaty double helping of all the reasons you love our burger.',
      price: 8.00,
      oldPrice: 10.41,
      hasDiscount: true,
      rate: 3
    },
    {
      id: 19,
      type: "burger",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/8-1-600x600.png',
      title: 'Chicken Burger',
      description: 'A mighty meaty double helping of all the reasons you love our burger.',
      price: 16.75,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 20,
      type: "pizza",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/9-1-600x600.png',
      title: 'Chicken Hawaii',
      description: 'Extra-virgin olive oil, mozzarella cheese, thinly-sliced steak meat, garlic, green peppers, mushrooms and tomatoes.',
      price: 14.94,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 21,
      type: "desert",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/10-1-600x600.png',
      title: 'Chocolate cake',
      description: 'Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts',
      price: 11.00,
      oldPrice: 17.30,
      hasDiscount: true,
      rate: 3
    },
    {
      id: 22,
      type: "burger",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/13-1-600x600.png',
      title: 'Country Burger',
      description: 'A mighty meaty double helping of all the reasons you love our burger.',
      price: 11.24,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 23,
      type: "burger",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/14-1-600x600.png',
      title: 'Double Beef Burge',
      description: 'A mighty meaty double helping of all the reasons you love our burger.',
      price: 13.17,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 24,
      type: "burger",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/15-1-600x600.png',
      title: 'Double Cheese',
      description: 'A mighty meaty double helping of all the reasons you love our burger.',
      price: 9.00,
      oldPrice: 12.04,
      hasDiscount: true,
      rate: 4
    },
    {
      id: 25,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/16-1-600x600.png',
      title: 'Fresh Lime',
      description: 'Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts.',
      price: 16.02,
      hasDiscount: false,
      rate: 3
    },
    {
      id: 26,
      type: "pizza",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/18-1-600x600.png',
      title: 'Hawaii Vegetarian Pizza',
      description: 'Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella, seasoned with garlic and oregano.',
      price: 12.16,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 27,
      type: "pizza",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/19-1-600x600.png',
      title: 'Hawaii Vegetarian Pizza',
      description: 'Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella, seasoned with garlic and oregano.',
      price: 18.98,
      hasDiscount: false,
      rate: 3
    },
    {
      id: 28,
      type: "pizza",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/20-1.png',
      title: 'Hawaii Vegetarian Pizza',
      description: "Although the legendary Double Burger really needs no introduction, please allow us… Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger's own paprika and cucumber mayonnaise add the crowning touch. Oh baby!",
      price: 15.53,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 29,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/21-1-600x600.png',
      title: 'Hot Cappuccino',
      description: 'Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental division',
      price: 19.68,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 30,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/22-1-600x600.png',
      title: 'Ice Lime Cola',
      description: 'Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts',
      price: 11.00,
      oldPrice: 16.78,
      hasDiscount: true,
      rate: 3
    },
    {
      id: 31,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/23-1-600x600.png',
      title: 'Iced Coffee',
      description: 'Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental division',
      price: 18.01,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 32,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/24-1-600x600.png',
      title: 'Iced Tea',
      description: 'Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts',
      price: 8.00,
      oldPrice: 12.46,
      hasDiscount: true,
      rate: 5
    },
    {
      id: 33,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/25-1-600x600.png',
      title: 'Iced Tea Bottle',
      description: 'Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental division',
      price: 11.89,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 34,
      type: "pizza",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/26-1-600x600.png',
      title: 'Italiano Original',
      description: 'Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped with lightly drizzled red sauce, pesto, and fresh basil',
      price: 13.63,
      hasDiscount: false,
      rate: 3
    },
    {
      id: 35,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/28-1-600x600.png',
      title: 'Lemonades Drink',
      description: 'Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts',
      price: 18.26,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 36,
      type: "pasta",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/29-1-600x600.png',
      title: 'Molto Tagliatelle',
      description: 'A mighty meaty double helping of all the reasons you love our burger.',
      price: 8.00,
      oldPrice: 14.56,
      hasDiscount: true,
      rate: 5
    },
    {
      id: 37,
      type: "pasta",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/30-1-600x600.png',
      title: 'Muffin Chocolate',
      description: 'Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental division',
      price: 11.00,
      oldPrice: 19.94,
      hasDiscount: true,
      rate: 4
    },
    {
      id: 39,
      type: "burger",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/32-1-600x600.png',
      title: 'Orange Juice',
      description: 'Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental division',
      price: 11.00,
      oldPrice: 14.64,
      hasDiscount: true,
      rate: 4
    },
    {
      id: 40,
      type: "burger",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/33-1-450x450.png',
      title: 'Original Burger',
      description: 'A mighty meaty double helping of all the reasons you love our burger.',
      price: 13.94,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 41,
      type: "burger",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/34-1-600x600.png',
      title: 'Pene Salmone',
      description: 'A mighty meaty double helping of all the reasons you love our burger.',
      price: 10.00,
      oldPrice: 13.52,
      hasDiscount: true,
      rate: 4
    },
    {
      id: 42,
      type: "pasta",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/35-1-600x600.png',
      title: 'Penne Funghi Chicken',
      description: 'A mighty meaty double helping of all the reasons you love our burger.',
      price: 14.40,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 43,
      type: "pizza",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/36-1-600x600.png',
      title: 'Pepperoni Calzone',
      description: 'Piled with shrimp, calamari, clams, mussels, surimi and stretchy mozzarella, seasoned with tangy lemon pepper.',
      price: 12.00,
      oldPrice: 15.80,
      hasDiscount: true,
      rate: 4
    },
    {
      id: 44,
      type: "pizza",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/37-1-600x600.png',
      title: 'Pepperoni Pizza',
      description: 'Extra-virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives, fresh tomatoes.',
      price: 19.75,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 45,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/38-1-600x600.png',
      title: 'Pizzaro Coffee',
      description: 'Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts',
      price: 11.50,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 46,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/39-1-600x600.png',
      title: 'Plain Tea',
      description: 'Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental division',
      price: 18.31,
      hasDiscount: false,
      rate: 3
    },
    {
      id: 47,
      type: "pizza",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/40-1-600x600.png',
      title: 'Primo Meat',
      description: 'Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella,',
      price: 9.00,
      oldPrice: 15.83,
      hasDiscount: true,
      rate: 4
    },
    {
      id: 48,
      type: "desert",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/41-1-600x600.png',
      title: 'Red Chocolate Cake',
      description: 'Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts',
      price: 17.14,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 49,
      type: "desert",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/42-1-600x600.png',
      title: 'Red Velvet Cake',
      description: 'Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental division',
      price: 18.13,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 50,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/22-1-600x600.png',
      title: 'Soda Bottles',
      description: 'Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts',
      price: 10.78,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 51,
      type: "pasta",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/43-1-600x600.png',
      title: 'Spaghetti Bolognese',
      description: 'A mighty meaty double helping of all the reasons you love our burger.',
      price: 8.00,
      oldPrice: 10.16,
      hasDiscount: true,
      rate: 4
    },
    {
      id: 52,
      type: "desert",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/44-1-600x600.png',
      title: 'Stawberry Ice',
      description: 'This strawberry ice cream is the freshest of fresh. Its so creamy and has the perfect fresh strawberry flavor',
      price: 16.78,
      hasDiscount: false,
      rate: 4
    },
    {
      id: 53,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/45-1-600x600.png',
      title: 'Strawberry Shake',
      description: 'Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts',
      price: 14.00,
      oldPrice: 18.86,
      hasDiscount: true,
      rate: 5
    },
    {
      id: 54,
      type: "drinks",
      img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/46-1-600x600.png',
      title: 'Strawberry Tea',
      description: 'Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts',
      price: 9.00,
      oldPrice: 15.87,
      hasDiscount: true,
      rate: 4
    }
  ]

  export default products
