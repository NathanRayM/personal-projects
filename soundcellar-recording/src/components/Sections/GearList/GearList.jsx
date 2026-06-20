import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { gear } from "../../../data/gear";
import "./GearList.css";

function GearList() {
  const [openCategory, setOpenCategory] = useState(null);
  const [isPlus, setIsPlus] = useState(true);

  function handleToggle(id) {
    setOpenCategory((currentId) => (currentId === id ? null : id));
  }

  return (
    <section id="gear" className="gear">
      <div className="gear__left--container">
        <div className="gear__header--container">
          <h2 className="gear__title">Gear List</h2>
          <div className="gear__decorative--line"></div>
        </div>
        <div className="decorative--line"></div>
        <p className="gear__description">PROFESSIONAL GEAR. PREMIUM RESULTS.</p>
        <p className="gear__info">
          A carefully selected collection of industry-leading equipment that
          helps us capture every detail and deliver exceptional sound.
        </p>
      </div>

      <div className="gear__grid">
        {gear.map((category) => (
          <article className="gear__card" key={category.id}>
            <h3 className="gear__list--title">{category.title}</h3>

            <ul className="gear__list">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="gear__grid__mobile">
        {gear.map((category) => (
          <article className="gear__card" key={category.id}>
            <div className="gear__mobile--dropdown-top">
              <h3 className="gear__list--title">{category.title}</h3>
              <button
                className="gear__dropdown--button"
                onClick={() => handleToggle(category.id)}
              >
                {openCategory === category.id ? <Minus /> : <Plus />}
              </button>
            </div>
            {openCategory === category.id && (
              <div className="gear__mobile--dropdown-bottom">
                <ul className="gear__list">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default GearList;
