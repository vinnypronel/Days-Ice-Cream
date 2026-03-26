import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FilterGrid from "@/components/ui/FilterGrid";

export default function FlavorsPage() {
  const categories = [
    { _id: "c1", title: "Classic", slug: "classic", order: 1 },
    { _id: "c2", title: "Chocolate", slug: "chocolate", order: 2 },
    { _id: "c3", title: "Fruit", slug: "fruit", order: 3 },
    { _id: "c4", title: "Vegan", slug: "vegan", order: 4 },
    { _id: "c5", title: "Italian Ice", slug: "italian-ice", order: 5 },
  ];

  const flavors = [
    // Classic
    { _id: "f1", name: "Vanilla Bean", description: "Rich Madagascar vanilla steeped in sweet cream.", category: { title: "Classic", slug: "classic" } },
    { _id: "f2", name: "Mint Chip", description: "Fresh mint with dark chocolate chip ribbons.", category: { title: "Classic", slug: "classic" } },
    { _id: "f3", name: "Butter Pecan", description: "Buttery roasted pecans in golden cream.", category: { title: "Classic", slug: "classic" } },
    { _id: "f4", name: "Strawberry", description: "Classic fresh strawberry, just like the shore.", category: { title: "Classic", slug: "classic" } },
    { _id: "f5", name: "Rainbow Sherbet", description: "Orange, raspberry, and lime in one scoop.", category: { title: "Classic", slug: "classic" } },
    { _id: "f6", name: "Cinnamon", description: "Warm spiced cinnamon in a smooth cream base.", category: { title: "Classic", slug: "classic" } },
    { _id: "f7", name: "Toasted Coconut", description: "Shredded coconut toasted to golden perfection.", category: { title: "Classic", slug: "classic" } },
    { _id: "f8", name: "Salted Caramel Pretzel", description: "Sweet and salty with crunchy pretzel swirls.", category: { title: "Classic", slug: "classic" } },
    { _id: "f9", name: "Peanut Butter Moose Tracks", description: "Peanut butter base with fudge and peanut cups.", category: { title: "Classic", slug: "classic" } },
    { _id: "f10", name: "Cinnamon Bun", description: "Cinnamon swirl with icing ribbon strands.", category: { title: "Classic", slug: "classic" } },
    { _id: "f11", name: "Banana Pudding", description: "Creamy banana with vanilla wafer crumbles.", category: { title: "Classic", slug: "classic" } },
    { _id: "f12", name: "Fruity Pebbles", description: "Cereal-infused cream with rainbow crunch.", category: { title: "Classic", slug: "classic" } },
    { _id: "f13", name: "Birthday Cake", description: "Funfetti cake batter with rainbow sprinkles.", category: { title: "Classic", slug: "classic" } },
    { _id: "f14", name: "Almond Joy", description: "Chocolate, coconut, and whole toasted almonds.", category: { title: "Classic", slug: "classic" } },

    // Chocolate
    { _id: "f20", name: "Double Chocolate", description: "Dark cocoa base with thick fudge ribbons.", category: { title: "Chocolate", slug: "chocolate" } },
    { _id: "f21", name: "Mocha Brownie", description: "Espresso ice cream packed with brownie chunks.", category: { title: "Chocolate", slug: "chocolate" } },
    { _id: "f22", name: "Death by Chocolate", description: "Triple chocolate overload for serious fans.", category: { title: "Chocolate", slug: "chocolate" } },
    { _id: "f23", name: "Chocolate Peanut Butter", description: "Silky chocolate meets swirled peanut butter.", category: { title: "Chocolate", slug: "chocolate" } },
    { _id: "f24", name: "S'mores", description: "Graham cracker, marshmallow, and chocolate fudge.", category: { title: "Chocolate", slug: "chocolate" } },
    { _id: "f25", name: "Hazelnut Truffle Latte", description: "Chocolate hazelnut with espresso swirl.", category: { title: "Chocolate", slug: "chocolate" } },
    { _id: "f26", name: "Chocolate Chip Cookie Dough", description: "Vanilla base stuffed with cookie dough bites.", category: { title: "Chocolate", slug: "chocolate" } },
    { _id: "f27", name: "Fudge Striped Brownie Batter", description: "Raw brownie batter with dark fudge streaks.", category: { title: "Chocolate", slug: "chocolate" } },
    { _id: "f28", name: "Biscoff Cookie Butter", description: "Caramelized cookie spread swirled throughout.", category: { title: "Chocolate", slug: "chocolate" } },
    { _id: "f29", name: "Caramel Oreo", description: "Oreo crumbles in sweet salted caramel cream.", category: { title: "Chocolate", slug: "chocolate" } },
    { _id: "f30", name: "Raspberry Chip", description: "Tart raspberry base with dark chocolate chips.", category: { title: "Chocolate", slug: "chocolate" } },

    // Fruit
    { _id: "f40", name: "Blackberry Ripple", description: "Sweet cream layered with blackberry jam.", category: { title: "Fruit", slug: "fruit" } },
    { _id: "f41", name: "Mango Sorbet", description: "Dairy-free pure Alphonso mango sorbet.", category: { title: "Fruit", slug: "fruit" } },
    { _id: "f42", name: "Peach", description: "Sun-ripened Georgia peach in a summer cream.", category: { title: "Fruit", slug: "fruit" } },
    { _id: "f43", name: "Blueberry Cheesecake", description: "Tangy cheesecake with wild blueberry swirl.", category: { title: "Fruit", slug: "fruit" } },
    { _id: "f44", name: "Watermelon Sorbet", description: "Light, refreshing watermelon with a clean finish.", category: { title: "Fruit", slug: "fruit" } },
    { _id: "f45", name: "Pineapple Coconut", description: "Tropical blend of ripe pineapple and coconut.", category: { title: "Fruit", slug: "fruit" } },

    // Vegan
    { _id: "f50", name: "Vegan Coconut", description: "Creamy coconut milk base, entirely dairy-free.", category: { title: "Vegan", slug: "vegan" } },
    { _id: "f51", name: "Vegan Dark Chocolate", description: "Rich oat milk chocolate, no compromise.", category: { title: "Vegan", slug: "vegan" } },
    { _id: "f52", name: "Almond Milk Vanilla", description: "Clean Madagascar vanilla on almond milk base.", category: { title: "Vegan", slug: "vegan" } },
    { _id: "f53", name: "Soy Strawberry", description: "Bright strawberry sorbet on soy cream base.", category: { title: "Vegan", slug: "vegan" } },

    // Italian Ice
    { _id: "f60", name: "Lemon Ice", description: "Tart and bright pure lemon water ice.", category: { title: "Italian Ice", slug: "italian-ice" } },
    { _id: "f61", name: "Cherry Water Ice", description: "Classic boardwalk cherry - bold and sweet.", category: { title: "Italian Ice", slug: "italian-ice" } },
    { _id: "f62", name: "Blue Raspberry Ice", description: "Electric flavor packed into every icy layer.", category: { title: "Italian Ice", slug: "italian-ice" } },
    { _id: "f63", name: "Watermelon Ice", description: "Cool watermelon water ice, summer in a cup.", category: { title: "Italian Ice", slug: "italian-ice" } },
    { _id: "f64", name: "Green Apple Ice", description: "Crisp and tart Granny Smith apple Italian ice.", category: { title: "Italian Ice", slug: "italian-ice" } },
  ];

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ width: "100%" }}>
        <FilterGrid
          items={flavors}
          categories={categories}
          pageTitle="Our Flavors"
          pageSubtitle={<>Handcrafted daily in Ocean Grove.<br />From century-old classics to seasonal creations.</>}
          showImagePlaceholder={false}
          headerImage="/Flavors.png"
        />
      </main>
      <Footer />
    </>
  );
}
