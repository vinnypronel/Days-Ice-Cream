import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterGrid from "@/components/FilterGrid";

export default function ToppingsPage() {
  const categories = [
    { _id: "c1", title: "Sauces", slug: "sauces", order: 1 },
    { _id: "c2", title: "Candy", slug: "candy", order: 2 },
    { _id: "c3", title: "Nuts", slug: "nuts", order: 3 },
    { _id: "c4", title: "Fruit", slug: "fruit", order: 4 },
    { _id: "c5", title: "Sprinkles", slug: "sprinkles", order: 5 },
  ];

  const toppings = [
    { _id: "t1", name: "Hot Fudge", description: "Warm, thick dark chocolate fudge.", imageUrl: "https://placehold.co/600x450/020100/FDFFFC?text=Hot+Fudge", category: { title: "Sauces", slug: "sauces" } },
    { _id: "t2", name: "Caramel", description: "Buttery salted caramel sauce.", imageUrl: "https://placehold.co/600x450/D35400/FDFFFC?text=Caramel", category: { title: "Sauces", slug: "sauces" } },
    { _id: "t3", name: "Gummy Bears", description: "Classic assorted fruit gummies.", imageUrl: "https://placehold.co/600x450/FF4F79/FDFFFC?text=Gummy+Bears", category: { title: "Candy", slug: "candy" } },
    { _id: "t4", name: "M&Ms", description: "Mini chocolate button candies.", imageUrl: "https://placehold.co/600x450/E74C3C/FDFFFC?text=M%26Ms", category: { title: "Candy", slug: "candy" } },
    { _id: "t9", name: "Rainbow Sprinkles", description: "Classic carnival colored sprinkles.", imageUrl: "https://placehold.co/600x450/546A76/FDFFFC?text=Rainbow+Jimmies", category: { title: "Sprinkles", slug: "sprinkles" } },
    { _id: "t5", name: "Toasted Almonds", description: "Slivered, dry-roasted sliced almonds.", imageUrl: "https://placehold.co/600x450/A6ACAF/020100?text=Almonds", category: { title: "Nuts", slug: "nuts" } },
    { _id: "t6", name: "Crushed Peanuts", description: "Lightly salted chopped peanuts.", imageUrl: "https://placehold.co/600x450/D5DBDB/020100?text=Peanuts", category: { title: "Nuts", slug: "nuts" } },
    { _id: "t7", name: "Fresh Strawberries", description: "Hand-sliced fresh strawberries.", imageUrl: "https://placehold.co/600x450/E6B0AA/020100?text=Strawberry", category: { title: "Fruit", slug: "fruit" } },
    { _id: "t8", name: "Cherries", description: "Classic sweet maraschino cherries.", imageUrl: "https://placehold.co/600x450/C0392B/FDFFFC?text=Cherry", category: { title: "Fruit", slug: "fruit" } },
    { _id: "t10", name: "Chocolate Sprinkles", description: "Real premium cocoa bean sprinkles.", imageUrl: "https://placehold.co/600x450/5D6D7E/FDFFFC?text=Choco+Sprinkles", category: { title: "Sprinkles", slug: "sprinkles" } },
  ];

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ width: "100%" }}>
        <FilterGrid 
          items={toppings} 
          categories={categories} 
          pageTitle="Premium Toppings" 
          pageSubtitle="The perfect finish. Choose from our hot classic sauces, fresh fruit, and crunchy candies."
        />
      </main>
      <Footer />
    </>
  );
}
