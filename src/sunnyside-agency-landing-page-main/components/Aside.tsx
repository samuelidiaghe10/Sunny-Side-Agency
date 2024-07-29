import cone from "../images/desktop/image-gallery-cone.jpg";
import milkbottles from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import sugarcubes from "../images/desktop/image-gallery-sugarcubes.jpg";

export const Aside = () => {
  return (
    <aside className="grid grid-cols-2 lg:grid-cols-4 ">
      <div>
        <img src={milkbottles} alt="" />
      </div>
      <div>
        <img src={orange} alt="" />
      </div>
      <div>
        <img src={cone} alt="" />
      </div>
      <div>
        <img src={sugarcubes} alt="" />
      </div>
    </aside>
  );
};
