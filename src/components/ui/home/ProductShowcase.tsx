import Carpets from "@/components/ui/carpets/Carpets";
import Curtains from "@/components/ui/curtains/Curtains";
import RollerBlinds from "@/components/ui/rollarblinds/RollarBlinds";
import Tvcabinets from "@/components/ui/tvcabinets/Tvcabinets";
import Wallpaper from "@/components/ui/wallpaper/Wallpaper";
import Link from "next/link";

const ProductShowcase = () => {
  const items = [
    {
      title: "Cartains",
      description: "New and wonder design to build up",
      component: <Curtains count={4} />,
      link: "/curtains",
    },
    {
      title: "Carpets",
      description: "New and wonder design to build up",
      component: <Carpets count={4} />,
      link: "/carpets",
    },
    {
      title: "Wallpaper",
      description: "New and wonder design to build up",
      component: <Wallpaper count={4} />,
      link: "/wallpaper",
    },
    {
      title: "TV cabinets",
      description: "New and wonder design to build up",
      component: <Tvcabinets count={4} />,
      link: "/tv-cabinet",
    },
    {
      title: "Rollar Blinds",
      description: "New and wonder design to build up",
      component: <RollerBlinds count={4} />,
      link: "/rollar-blinds",
    },
  ];
  return (
    <div className="container">
      {items.map((product: any, index) => (
        <div key={index} className="mb-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-medium">{product.title}</h2>
              <p>{product.description}</p>
            </div>
            <Link href={product.link} className="text-primary hover:underline">
              See all
            </Link>
          </div>

          <div>{product.component}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductShowcase;
