import React, { Component } from "react";
import Menus from "./components/Menus";
import Menu from "./components/Menu";
import { Route, withRouter } from "react-router-dom";
import Liquid from "./components/Liquid";
import Specials from "./components/Specials";
import Breakfast from "./components/Breakfast";
import HighTea from "./components/HighTea";
import Events from "./components/Events";
import "./App.css";

class App extends Component {
  state = {
    data: [
      {
        "daily-issue": {
          Starters: [
            {
              name: "WILD MUSHROOM SOUP",
              description:
                "shitake, button mushrooms, portobello, porcini, cream, thyme, truffle oil, chives, artisanal toast",
              price: 15,
              image: "/images/wild-mushroom-soup.jpg"
            },
            {
              name: "POT OF MUSSELS & CLAMS",
              description:
                "boston mussels, brown clams, tomatoes, fennel, leeks, cream, white wine, artisanal toast",
              price: 25,
              image: "/images/pot-of-mussels-&-clams.jpg"
            },
            {
              name: "SMOKED SALMON & AVOCADO SALAD",
              description:
                "norwegian smoked salmon, avocado, romaine lettuce, edamame, broccolini, cherry tomato, fresh dill, micro cress, ikura, parmesan shavings, yuzu soy dressing",
              price: 21,
              image: "/images/smoked-salmon-avocado-salad.jpg"
            },
            {
              name: "OTAK-OTAK",
              description:
                "mackerel fish paste, cucumber ribbons, hand-picked greens, fine beans, coriander, tamarind dressing, crushed peanuts, toast",
              price: 19,
              image: "/images/otak-otak.jpg"
            },
            {
              name: "CRISPY PORK RIBS",
              description:
                "marinated pork ribs, mustard dressing, pickled chilli, coriander",
              price: 16,
              image: "/images/crispy-pork-ribs.jpg"
            },
            {
              name: "TCS WAGYU CUBES",
              description:
                "angus wagyu beef, mushroom salsa, mesclun salad, TCS dressing",
              price: 24,
              image: "/images/tcs-wagyu-cubes.jpg"
            },
            {
              name: "HAR CHEONG GAI",
              description: "deep fried prawn paste chicken wings, chilli sauce",
              price: 14,
              image: "/images/har-cheong-gai.jpg"
            },
            {
              name: "CALAMARI",
              description: "spiced salt and pepper squid, passion fruit mayo",
              price: 16,
              image: "/images/calamari.jpg"
            },
            {
              name: "PORTOBELLO FRIES",
              description:
                "portobello mushrooms, panko, parmesan shavings, cep powder, truffle mayonnaise",
              price: 15,
              image: "/images/portobello-fries.jpg"
            },
            {
              name: "TRUFFLE FRIES ",
              description:
                "straight-cut fries, truffle oil, truffle mayonnaise",
              price: 15,
              image: "/images/truffle-fries.jpg"
            },
            {
              name: "SWEET POTATO FRIES",
              description:
                "garlic, house seasoning, paprika, sriracha mayonnaise, parmesan shavings",
              price: 15,
              image: "/images/sweet-potato-fries.jpg"
            },
            {
              name: "SPAM FRIES ",
              description:
                "straight-cut luncheon meat, sriracha mayonnaise, chili sauce",
              price: 14,
              image: "/images/spam-fries.jpg"
            }
          ],
          Meat: [
            {
              name: "ALL DAY BREAKFAST",
              description:
                "truffle scrambled eggs, sauteed mushroom, bacon, avocado, mesclun salad, cherry tomato, sour dough",
              price: 25,
              image: "/images/all-day-breakfast.JPG"
            },
            /**/
            {
              name: "GRILLED CHICKEN",
              description:
                "chargrilled half chicken, kicap manis glaze, bib lettuce, coleslaw, thick-cut fries, charred lime, TCS sambal belacan",
              price: 26,
              image: "/images/grilled-chicken.JPG"
            },
            {
              name: "RIBEYE ROSTI",
              description:
                "angus ribeye (240g), hand-cut potato rosti, broccolini, ketchup jus",
              price: 41,
              image: "/images/ribeye-rosti.JPG"
            },
            {
              name: "GRILLED LAMB CHOPS",
              description:
                "new zealand lamb chops, fine beans, buttered oatmeal, cilantro, mint yogurt dressing, basil oil, swiss chard ",
              price: 39,
              image: "/images/grilled-lamb-chops.JPG"
            },
            {
              name: "BABY BACK RIBS",
              description:
                "bbq baby back ribs, apple cider glaze, buttered corn kernels, thick-cut fries, coleslaw",
              price: 38,
              image: "/images/baby-back-ribs.JPG"
            },
            {
              name: "PORTOBELLO CHEESE BURGER",
              description:
                "homemade wagyu beef patty (180g), grilled portobello, bacon, onions, homemade ketchup, melted cheese, gherkin, thick-cut fries, mesclun salad",
              description2: "+ fried egg $3",
              price: 26,
              image: "/images/portobello-burger.JPG"
            },
            {
              name: "SMOKED SALMON ROSTI SAUSAGE",
              description:
                "hand-cut potato rosti, chicken cheese sausage, norwegian smoked salmon, mesclun salad, sour cream",
              price: 24
            }
          ],
          Seafood: [
            {
              name: "WILD CATCH FISH",
              description: "COOKING STYLE: ",
              description2:
                "hong kong style with coriander - teochew steamed with pickled vegetables, tomato, shitake mushroom, tofu & plum - sour spicy steamed with pickled vegetables, lemongrass, tomato & plum - sichuan boiled fish with bean sprouts & tofu - ikan bakar (grilled) with TCS signature sambal, lemon & salad. served with a bowl of jasmine rice or porridge (allow 20 min cooking time) Additional bee hoon or kway teow on fish +8",
              price: "48",
              fishes: "Grouper | Pomfret | Snapper",
              image: "/images/hk-style-grouper.jpg"
            },
            {
              name: "GRILLED OCTOPUS",
              description:
                "char grilled octopus, rojak salad, fried tau pok, shrimp paste, peanuts, mesclun salad",
              price: 31
            } /*
            {
              name: "DOZEN STEAMED PRAWNS",
              description: "fresh prawns, rose wine, dashi steamed egg ",
              price: 31
            },*/,
            {
              name: "MALA SEAFOOD POT",
              description:
                "prawn, clam, mussel, lotus root, wood ear, broccolini, french bean, sichuan spices, jasmine rice",
              price: 29
            },
            {
              name: "SAMBAL SQUID",
              description:
                "grilled sambal squid with winged bean and lady’s finger ",
              price: 21
            },
            {
              name: "DRUNKEN LALA CLAMS",
              description: "chinese wine, ginger, mirin, coriander",
              price: 23
            },
            {
              name: "FISH & CHIPS",
              description:
                "beer battered atlantic cod, thick-cut fries, tomato, nori powder, mesclun salad, wasabi soy dressing, tartar sauce",
              price: 28,
              image: "/images/fish-n-chips.JPG"
            }
          ],
          Pizzas: [
            {
              name: "WAGYU BEEF & MUSHROOM",
              description:
                "sliced wagyu beef, sauteed mushrooms, caramelised onions, mozzarella, cheddar, white wine cream sauce",
              price: 25,
              image: "/images/wagyu-beef-&-mushroom.jpg"
            },
            {
              name: "PEPPERONI",
              description:
                "pepperoni, salami, mozzarella, cheddar, olives, red chilli, tomato sauce",
              price: 23,
              image: "/images/pepperoni-pizza.jpg"
            },
            {
              name: "HAWAIIAN",
              description:
                "gourmet ham, grilled pineapple, bacon, tomato sauce, bbq sauce",
              price: 23,
              image: "/images/hawaiian-pizza.jpg"
            },
            {
              name: "MARGHERITA",
              description: "tomato sauce, basil oil, cheddar, fresh mozzarella",
              price: 23,
              image: "/images/margherita-pizza.jpg"
            },
            {
              name: "AL FUNGHI",
              description:
                "assorted mushrooms, caramelised onion, mozzarella, cheddar, truffle parmesan, arugula, white wine cream sauce",
              price: 23,
              image: "/images/al-funghi-pizza.jpg"
            },
            {
              name: "HALF & HALF PIZZA",
              description: "any 2 of the above",
              price: 25,
              image: "/images/half-n-half-pizza.jpg"
            }
          ],
          "Rice and Noodles": [
            {
              name: "XO PRAWN AGLIO OLIO",
              description:
                "xo sauce, prawns, garlic confit, edamame, prawn stock, bird’s eye chilli, linguine",
              price: 25,
              image: "/images/xo-prawn-aglio-olio.jpg"
            },
            {
              name: "LINGUINE VONGOLE",
              description: "clam, tomato, fennel, leek",
              description2: "choice of sauce: white wine or cream",
              price: 25,
              image: "/images/linguine-vongole.jpg"
            },
            {
              name: "VEGETARIAN AGLIO OLIO",
              description:
                "broccolini, asparagus, garlic confit, edamame, bird’s eye chili",
              price: 25,
              image: "/images/vegetarian-aglio-olio.jpg"
            },
            {
              name: "TCS CRAYFISH & PRAWN LAKSA",
              description:
                "crayfish, prawns, hard shell scallop, tau pok, fish cake, bean sprouts, hard boiled egg, laksa leaves, thick rice noodle, yellow noodle",
              price: 25,
              image: "/images/tcs-crayfish-n-prawn-laksa.jpg"
            },
            {
              name: "TCS HOKKIEN MEE",
              description:
                "prawns, squid, brown clam, hard shell scallop, bean sprouts, chinese chives, homemade chilli, calamansi, pork & prawn stock, yellow noodle, rice noodle",
              price: 24,
              image: "/images/tcs-hokkien-mee.JPG"
            },
            {
              name: "OYSTER CHAR KUAY TEOW",
              description:
                "korean oysters, flat noodle, fish cake, asian greens, egg, flat rice noodle",
              price: 23,
              image: "/images/oyster-char-kuay-teow.jpg"
            },
            {
              name: "TCS NASI LEMAK ",
              description:
                "grilled tiger prawns, fried chicken, baked otak-otak, sunny-side up egg, ikan bilis, cucumber, sambal, coconut rice",
              price: 25,
              image: "/images/tcs-nasi-lemak.jpg"
            },
            {
              name: "TCS NASI CAMPUR ",
              description:
                "beef rendang, crispy chicken, otak-otak, sambal lady's finger, sunny side-up egg, achar, ikan bilis, coconut rice, TCS sambal chili",
              price: 26,
              image: "/images/tcs-nasi-campur.jpg"
            },
            {
              name: "BEEF RENDANG",
              description:
                "slow cooked beef, rendang spices, papadum, achar, jasmine rice",
              price: 23,
              image: "/images/tcs-beef-rendang.jpg"
            }
          ],
          Desserts: [
            {
              name: "TCS WAFFLE STACK",
              description:
                "freshly pressed waffle, banana, strawberry, nutella, maple syrup, chantilly cream, triple dark chocolate gelato",
              price: 14
            },
            {
              name: "ICE CREAM",
              description: "served in a wafer bowl",
              description2:
                "french vanilla | triple dark chocolate | D24 durian | peanut butter & jelly | green tea | korean yuzu sorbet",
              price: 7
            },
            {
              name: "DAILY CAKES",
              description: "available at our cake counter",
              price: 10
            }
          ],
          "Add-Ons": [
            {
              name: "SAMBAL KANGKONG",
              price: 13
            },
            {
              name: "BUTTER GRILLED CORN",
              price: 8
            },
            {
              name: "SAUTEED MUSHROOMS",
              price: 12
            },
            {
              name: "TRUFFLE MASHED POTATO",
              price: 8
            },
            {
              name: "MIXED GREEN SALAD W/ FETA AND BALSAMIC GLAZE",
              price: 9
            },
            {
              name: "CHARRED BROCOLINI W/ CRUMBLED FETA",
              price: 15
            },
            {
              name: "CHARRED ASPARAGUS",
              price: 15
            },
            {
              name: "JASMINE RICE",
              price: 4
            },
            {
              name: "COCONUT RICE",
              price: 5
            }
          ],
          Kids: [
            {
              name: "TATER TOTS AND NUGGETS",
              price: 12,
              image: "/images/tator-tots.JPG"
            },
            {
              name: "JUNIOR FISH AND CHIPS",
              description:
                "fish fingers, straight-cut fries, tartar sauce, lemon cheek",
              price: 14,
              image: "/images/kids-fish-n-chips.JPG"
            },
            {
              name: "SAUSAGE AND SPAGHETTI",
              description:
                "chicken cheese sausage, sunny-side up, tomato sauce, parmesan shavings",
              price: 15,
              image: "/images/kids-spaghetti.JPG"
            },
            {
              name: "CHEESE BURGER",
              description:
                "homemade wagyu beef patty (120g), melted cheese, tomato, romaine lettuce, ketchup, straight-cut fries",
              price: 16,
              image: "/images/kids-cheeseburger.JPG"
            }
          ]
        },
        "weekend-issue": {
          "Eggs and More": [
            {
              name: "THE SETTLEMENT BIG BREAKFAST",
              description:
                "creamed mushroom, maple glazed bacon, tater tots, chicken cheese sausage, cherry tomatoes, whipped butter, sour dough.",
              description2:
                "choice of eggs: sunny-side up | runny | scrambled | poached",
              price: 24,
              image: "/images/settlement-big-breakfast.jpg"
            },
            {
              name: "VEGGIE WONDERLAND",
              description:
                "truffle scrambled eggs, roasted portobello, avocado, tomatoes, wilted kale, sour dough",
              price: 25,
              image: "/images/veggie-wonderland.jpg"
            },
            {
              name: "TCS CRAB & EGGS",
              description:
                "norwegian smoked salmon, crab meat, poached eggs, avocado, ikura, dill, yuzu hollandaise, micro cress, croissant",
              price: 25
            },
            {
              name: "PULLED PORK BENEDICT",
              description:
                "bbq braised pulled pork, poached eggs, hollandaise, granny smith apple, coleslaw, arugula, croissant ",
              price: 24,
              image: "/images/pulled-pork-benedict.jpg"
            },
            {
              name: "SMASHED AVOCADO & EGGS",
              description:
                "poached eggs, avocado, tomato & feta salsa, sweet corn, basil, smoked salmon, sour dough",
              price: 24,
              image: "/images/smashed-advocado-and-eggs.jpg"
            },
            {
              name: "BREAKFAST SALMON ROSTI SAUSAGE",
              description:
                "sunny-side up egg, hand-cut potato rosti, creamed spinach, chicken cheese sausage, norwegian smoked salmon, guacamole, mesclun salad, sour cream",
              price: 24,
              image: "/images/breakfast-salmon-rosti-sausage.jpg"
            },
            {
              name: "BREAKFAST STEAK & EGGS",
              description:
                "angus minute steak (180g), sunny-side up eggs, asparagus, truffle fries, ketchup jus",
              price: 34,
              image: "/images/breakfast-steak-eggs.jpg"
            },
            {
              name: "BRUNCH WAGYU CHEESE BURGER",
              description:
                "wagyu beef (180g), grilled bacon, melted cheese, sunny-side up egg, gherkin, ketchup, romaine lettuce, thick-cut fries, mesclun salad",
              price: 28,
              image: "/images/brunch-waygu-cheeseburger.jpg"
            },
            {
              name: "FISH & CHIPS",
              description:
                "beer battered atlantic cod, thick-cut fries, tomato, nori powder, mesclun salad, wasabi soy dressing, tartar sauce",
              price: 28,
              image: "/images/fish-n-chips.JPG"
            },
            {
              name: "CHICKEN WAFFLE",
              description:
                "crispy chicken, freshly pressed croissant, plain fries, arugula, maple syrup",
              price: 23,
              image: "/images/chicken-waffle.jpg"
            },
            {
              name: "XO PRAWN AGLIO OLIO",
              description:
                "xo sauce, prawns, garlic confit, edamame, prawn stock, bird’s eye chilli, linguine",
              price: 25,
              image: "/images/xo-prawn-aglio-olio.JPG"
            },
            {
              name: "TRUFFLE MUSHROOM LINGUINE",
              description:
                "assorted mushrooms, parmesan cream sauce, white wine, arugula, truffle oil, parmesan shavings",
              price: 24,
              image: "/images/truffle-mushroom-linguine.JPG"
            },
            {
              name: "TCS CRAYFISH & PRAWN LAKSA",
              description:
                "crayfish, prawns, tau pok, fish cake, bean sprouts, hard boiled egg, laksa leaves, thick rice noodle, yellow noodle",
              price: 25
            },
            {
              name: "TCS HOKKIEN MEE",
              description:
                "prawns, squid, brown clams, bean sprouts, chinese chives, homemade chilli, calamansi, pork & prawn stock, yellow noodle, rice noodle",
              price: 24,
              image: "/images/hokkien-mee.JPG"
            },
            {
              name: "OYSTER CHAR KUAY TEOW",
              description:
                "korean oysters, flat noodle, fish cake, asian greens, egg ",
              price: 23
            },
            {
              name: "TCS NASI LEMAK",
              description:
                "grilled tiger prawns, fried chicken, baked otak-otak, sunny-side up egg, ikan bilis, cucumber, sambal, coconut rice",
              price: 25,
              image: "/images/nasi-lemak.JPG"
            }
          ],
          Sharing: [
            {
              name: "WILD MUSHROOM SOUP",
              description:
                "shitake, button mushrooms, portobello, porcini, cream, thyme, truffle oil, chives, artisanal toast",
              price: 15,
              image: "/images/wild-mushroom-soup.jpg"
            },
            {
              name: "SMOKED SALMON & AVOCADO SALAD",
              description:
                "norwegian smoked salmon, avocado, romaine lettuce, edamame, broccolini, cherry tomato, fresh dill, micro cress, ikura, parmesan shavings, yuzu soy dressing",
              price: 21,
              image: "/images/smoked-salmon-avocado-salad.JPG"
            },
            {
              name: "TCS WAGYU CUBES",
              description:
                "angus wagyu beef, mushroom salsa, mesclun salad, TCS dressing",
              price: 24
            },
            {
              name: "HAR CHEONG GAI",
              description: "deep fried prawn paste chicken wings, chilli sauce",
              price: 14,
              image: "/images/har-cheong-gai.JPG"
            },
            {
              name: "PORTOBELLO FRIES",
              description:
                "portobello mushrooms, panko, parmesan shavings, cep powder, truffle mayonnaise",
              price: 15,
              image: "/images/portobello-fries.JPG"
            },
            {
              name: "TRUFFLE FRIES ",
              description:
                "straight-cut fries, truffle oil, truffle mayonnaise",
              price: 15,
              image: "/images/truffle-fries.JPG"
            },
            {
              name: "SWEET POTATO FRIES",
              description:
                "garlic, house seasoning, paprika, sriracha mayonnaise, parmesan shavings",
              price: 15,
              image: "/images/sweet-potato-fries.JPG"
            },
            {
              name: "SPAM FRIES ",
              description:
                "straight-cut luncheon meat, sriracha mayonnaise, chili sauce",
              price: 14,
              image: "/images/spam-fries.JPG"
            }
          ],
          Pizzas: [
            {
              name: "WAGYU BEEF & MUSHROOM",
              description:
                "sliced wagyu beef, sauteed mushrooms, caramelised onions, mozzarella, cheddar, white wine cream sauce",
              price: 25,
              image: "/images/wagyu-beef-n-mushroom-pizza.JPG"
            },
            {
              name: "PEPPERONI",
              description:
                "pepperoni, salami, mozzarella, cheddar, olives, red chilli, tomato sauce",
              price: 23
            },
            {
              name: "HAWAIIAN",
              description:
                "gourmet ham, grilled pineapple, bacon, tomato sauce, bbq sauce",
              price: 23
            },
            {
              name: "MARGHERITA",
              description: "tomato sauce, basil oil, cheddar, fresh mozzarella",
              price: 23,
              image: "/images/margherita-pizza.JPG"
            },
            {
              name: "AL FUNGHI",
              description:
                "assorted mushrooms, caramelised onion, mozzarella, cheddar, truffle parmesan, arugula, white wine cream sauce",
              price: 23,
              image: "/images/al-funghi-pizza.JPG"
            },
            {
              name: "HALF & HALF PIZZA",
              description: "any 2 of the above",
              price: 25,
              image: "/images/half-n-half-pizza.JPG"
            }
          ],
          Desserts: [
            {
              name: "MAPLE PANCAKE",
              description:
                "french vanilla gelato, nut crumble, strawberry, banana, fresh cream, maple syrup",
              price: 14
            },
            {
              name: "TCS WAFFLE STACK",
              description:
                "freshly pressed waffle, banana, strawberry, nutella, maple syrup, chantilly cream, triple dark chocolate gelato",
              price: 14
            },
            {
              name: "ICE CREAM",
              description: "served in a wafer bowl",
              description2:
                "french vanilla | triple dark chocolate | D24 durian | peanut butter & jelly | green tea | korean yuzu sorbet",
              price: 7
            },
            {
              name: "DAILY CAKES",
              description: "available at our cake counter",
              price: 10
            }
          ],
          Kids: [
            {
              name: "TATER TOTS AND NUGGETS",
              price: 12,
              image: "/images/tator-tots.JPG"
            },
            {
              name: "JUNIOR FISH AND CHIPS",
              description:
                "fish fingers, straight-cut fries, tartar sauce, lemon cheek",
              price: 14,
              image: "/images/kids-fish-n-chips.JPG"
            },
            {
              name: "SAUSAGE AND SPAGHETTI",
              description:
                "chicken cheese sausage, sunny-side up, tomato sauce, parmesan shavings",
              price: 15,
              image: "/images/kids-spaghetti.JPG"
            },
            {
              name: "CHEESE BURGER",
              description:
                "homemade wagyu beef patty (120g), melted cheese, tomato, romaine lettuce, ketchup, straight-cut fries",
              price: 16,
              image: "/images/kids-cheeseburger.JPG"
            }
          ]
        }
      }
    ],
    month: new Date().getMonth(),
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  };
  render() {
    return (
      <div className="App">
        <div>
          <img
            className="logo"
            src="https://i.imgur.com/wWxOWWa.png"
            alt="test"
          />
          <hr />
          <hr id="top" />
          <span id="edition">
            Singapore Edition | Menu&nbsp; - &nbsp;
            {this.state.months[this.state.month]} 2019
          </span>
          <hr id="bottom" />
          <hr id="bottom2" />

          <Route exact path="/" component={Menus} />
          <Route
            exact
            path="/menu/:category"
            render={props => <Menu {...props} data={this.state.data} />}
          />
          <Route exact path="/liquid" component={Liquid} />
          <Route exact path="/specials" component={Specials} />
          <Route exact path="/high-tea" component={HighTea} />
          <Route exact path="/christmas" component={Events} />
          <Route
            exact
            path="/breakfast"
            render={props => (
              <Breakfast {...props} data={this.state.Breakfast} />
            )}
          />
        </div>
        <div id="aaa">
          <hr />
          <hr />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
