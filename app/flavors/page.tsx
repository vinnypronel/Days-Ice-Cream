import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterGrid from "@/components/FilterGrid";

export default function FlavorsPage() {
  const categories = [
    { _id: "c1", title: "Classic", slug: "classic", order: 1 },
    { _id: "c2", title: "Chocolate", slug: "chocolate", order: 2 },
    { _id: "c3", title: "Fruit", slug: "fruit", order: 3 },
    { _id: "c4", title: "Vegan", slug: "vegan", order: 4 },
    { _id: "c5", title: "Italian Ice", slug: "italian-ice", order: 5 },
    { _id: "c6", title: "Seasonal", slug: "seasonal", order: 6 },
  ];

  const flavors = [
    { _id: "f1", name: "Vanilla Bean", description: "Rich Madagascar vanilla steeped in sweet cream.", imageUrl: "https://placehold.co/600x450/FDFFFC/020100?text=Vanilla", category: { title: "Classic", slug: "classic" } },
    { _id: "f3", name: "Double Chocolate", description: "Dark cocoa & fudge ribboned carefully.", imageUrl: "https://placehold.co/600x450/020100/FDFFFC?text=Chocolate", category: { title: "Chocolate", slug: "chocolate" } },
    { _id: "f2", name: "Strawberry", description: "Fresh local strawberries blended perfectly.", imageUrl: "https://placehold.co/600x450/FF4F79/FDFFFC?text=Strawberry", category: { title: "Fruit", slug: "fruit" } },
    { _id: "f4", name: "Mint Chip", description: "Fresh mint and dark chocolate chips.", imageUrl: "https://placehold.co/600x450/546A76/FDFFFC?text=Mint+Chip", category: { title: "Classic", slug: "classic" } },
    { _id: "f5", name: "Vegan Coconut", description: "Creamy coconut milk base, entirely dairy-free.", imageUrl: "https://placehold.co/600x450/ececec/020100?text=Coconut", category: { title: "Vegan", slug: "vegan" } },
    { _id: "f10", name: "Mocha Brownie", description: "Coffee ice cream loaded with brownie chunks.", imageUrl: "https://placehold.co/600x450/3E2723/FDFFFC?text=Mocha", category: { title: "Chocolate", slug: "chocolate" } },
    { _id: "f6", name: "Lemon Ice", description: "Tart and refreshing pure lemon.", imageUrl: "https://placehold.co/600x450/FFD166/020100?text=Lemon", category: { title: "Italian Ice", slug: "italian-ice" } },
    { _id: "f7", name: "Pumpkin Spice", description: "Fall favorite with cinnamon and nutmeg.", imageUrl: "https://placehold.co/600x450/E59866/020100?text=Pumpkin", category: { title: "Seasonal", slug: "seasonal" } },
    { _id: "f8", name: "Mango Sorbet", description: "Dairy-free pure Alphonso mango sorbet.", imageUrl: "https://placehold.co/600x450/FFB833/020100?text=Mango", category: { title: "Vegan", slug: "vegan" } },
    { _id: "f9", name: "Blackberry Ripple", description: "Sweet cream layered with blackberry jam.", imageUrl: "https://placehold.co/600x450/9B59B6/FDFFFC?text=Blackberry", category: { title: "Fruit", slug: "fruit" } },
    { _id: "f11", name: "Cherry Water Ice", description: "Classic boardwalk cherry water ice.", imageUrl: "https://placehold.co/600x450/E74C3C/FDFFFC?text=Cherry", category: { title: "Italian Ice", slug: "italian-ice" } },
    { _id: "f12", name: "Peppermint Bark", description: "White chocolate peppermint with crushed candy cane.", imageUrl: "https://placehold.co/600x450/F1948A/020100?text=Peppermint", category: { title: "Seasonal", slug: "seasonal" } },
  ];

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ width: "100%" }}>
        <FilterGrid 
          items={flavors} 
          categories={categories} 
          pageTitle="Our Flavors" 
          pageSubtitle="Handcrafted daily in Ocean Grove. From century-old classics to modern seasonal creations."
        />
      </main>
      <Footer />
    </>
  );
}
