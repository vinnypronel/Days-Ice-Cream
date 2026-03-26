import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FilterGrid from "@/components/ui/FilterGrid";

export default function ToppingsPage() {
  const categories = [
    { _id: "c1", title: "Sauces", slug: "sauces", order: 1 },
    { _id: "c2", title: "Candy", slug: "candy", order: 2 },
    { _id: "c3", title: "Nuts", slug: "nuts", order: 3 },
    { _id: "c4", title: "Fruit", slug: "fruit", order: 4 },
    { _id: "c5", title: "Sprinkles", slug: "sprinkles", order: 5 },
  ];

  const toppings = [
    // Sauces
    { _id: "t1", name: "Hot Fudge", description: "Warm, thick dark chocolate fudge.", category: { title: "Sauces", slug: "sauces" } },
    { _id: "t2", name: "Caramel Sauce", description: "Buttery salted caramel poured warm.", category: { title: "Sauces", slug: "sauces" } },
    { _id: "t3", name: "Marshmallow", description: "Fluffy marshmallow crème drizzle.", category: { title: "Sauces", slug: "sauces" } },
    { _id: "t4", name: "Strawberry Sauce", description: "Fresh strawberry purée poured over top.", category: { title: "Sauces", slug: "sauces" } },
    { _id: "t5", name: "Pineapple Sauce", description: "Tropical sweet pineapple topping.", category: { title: "Sauces", slug: "sauces" } },
    { _id: "t6", name: "Chocolate Syrup", description: "Classic thin chocolate drizzle.", category: { title: "Sauces", slug: "sauces" } },
    { _id: "t7", name: "Butterscotch", description: "Rich golden butterscotch sauce.", category: { title: "Sauces", slug: "sauces" } },
    { _id: "t8", name: "Raspberry Sauce", description: "Bright tart raspberry coulis.", category: { title: "Sauces", slug: "sauces" } },
    { _id: "t9", name: "Birthday Cake Cone Dip", description: "White chocolate funfetti cone dip.", category: { title: "Sauces", slug: "sauces" } },
    { _id: "t10", name: "Chocolate Cone Dip", description: "Classic dark chocolate hardening shell.", category: { title: "Sauces", slug: "sauces" } },
    { _id: "t11", name: "Cherry Cone Dip", description: "Sweet cherry-red hardening shell.", category: { title: "Sauces", slug: "sauces" } },

    // Candy
    { _id: "t20", name: "Gummy Bears", description: "Assorted fruit gummy bears.", category: { title: "Candy", slug: "candy" } },
    { _id: "t21", name: "M&Ms", description: "Mini chocolate button candies.", category: { title: "Candy", slug: "candy" } },
    { _id: "t22", name: "Reese's Pieces", description: "Peanut butter candy shells.", category: { title: "Candy", slug: "candy" } },
    { _id: "t23", name: "Oreo Crumbles", description: "Crushed Oreo cookies for crunch.", category: { title: "Candy", slug: "candy" } },
    { _id: "t24", name: "Cookie Dough Bites", description: "Mini raw cookie dough pieces.", category: { title: "Candy", slug: "candy" } },
    { _id: "t25", name: "Brownie Bites", description: "Fudgy small brownie chunks.", category: { title: "Candy", slug: "candy" } },
    { _id: "t26", name: "Caramel Truffles", description: "Smooth caramel chocolate truffles.", category: { title: "Candy", slug: "candy" } },
    { _id: "t27", name: "Chocolate Cake Crunch", description: "Crunchy chocolate cake pieces.", category: { title: "Candy", slug: "candy" } },
    { _id: "t28", name: "Chocolate Chips", description: "Semi-sweet mini chocolate chips.", category: { title: "Candy", slug: "candy" } },
    { _id: "t29", name: "Gummy Worms", description: "Sour and sweet gummy worm slices.", category: { title: "Candy", slug: "candy" } },
    { _id: "t30", name: "Heath Bar Crunch", description: "Toffee and chocolate bar crumbles.", category: { title: "Candy", slug: "candy" } },
    { _id: "t31", name: "Crushed Graham Crackers", description: "Sweet honey graham cracker crumbs.", category: { title: "Candy", slug: "candy" } },

    // Nuts
    { _id: "t40", name: "Toasted Almonds", description: "Slivered dry-roasted sliced almonds.", category: { title: "Nuts", slug: "nuts" } },
    { _id: "t41", name: "Crushed Peanuts", description: "Lightly salted chopped peanuts.", category: { title: "Nuts", slug: "nuts" } },
    { _id: "t42", name: "Walnuts", description: "Rough-chopped toasted walnuts.", category: { title: "Nuts", slug: "nuts" } },
    { _id: "t43", name: "Pecans", description: "Buttered roasted pecan halves.", category: { title: "Nuts", slug: "nuts" } },
    { _id: "t44", name: "Macadamia Nuts", description: "Rich buttery macadamia pieces.", category: { title: "Nuts", slug: "nuts" } },

    // Fruit
    { _id: "t50", name: "Fresh Strawberries", description: "Hand-sliced fresh strawberries.", category: { title: "Fruit", slug: "fruit" } },
    { _id: "t51", name: "Cherries", description: "Classic sweet maraschino cherries.", category: { title: "Fruit", slug: "fruit" } },
    { _id: "t52", name: "Banana Slices", description: "Fresh ripe banana rounds.", category: { title: "Fruit", slug: "fruit" } },
    { _id: "t53", name: "Blueberries", description: "Fresh wild blueberries.", category: { title: "Fruit", slug: "fruit" } },
    { _id: "t54", name: "Pineapple Chunks", description: "Sweet fresh pineapple pieces.", category: { title: "Fruit", slug: "fruit" } },

    // Sprinkles
    { _id: "t60", name: "Rainbow Sprinkles", description: "Classic carnival-colored confetti jimmies.", category: { title: "Sprinkles", slug: "sprinkles" } },
    { _id: "t61", name: "Chocolate Sprinkles", description: "Real premium cocoa bean sprinkles.", category: { title: "Sprinkles", slug: "sprinkles" } },
    { _id: "t62", name: "Gold Sanding Sugar", description: "Shimmering edible gold sugar crystals.", category: { title: "Sprinkles", slug: "sprinkles" } },
    { _id: "t63", name: "Pink Sprinkles", description: "Bright pink single-color sprinkle mix.", category: { title: "Sprinkles", slug: "sprinkles" } },
  ];

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ width: "100%" }}>
        <FilterGrid
          items={toppings}
          categories={categories}
          pageTitle="Premium Toppings"
          pageSubtitle="The perfect finish. Hot classic sauces, fresh fruit, sprinkles, candy, nuts and more!"
          showImagePlaceholder={true}
          headerImage="/toppings.png"
        />
      </main>
      <Footer />
    </>
  );
}
