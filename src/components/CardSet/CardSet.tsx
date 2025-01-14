import { Card } from './Card';
import { CardProps } from './Card/Card';
import './CardSet.css';

const cards: CardProps[] = [
  {
    img: "/vip.jpg",
    title: "VIP OnlyFans",
    bullets: [
      <p>$5.25 <span style={{"color": "rgb(251, 46, 4)"}}><b>SALE TODAY!</b></span></p>,
      "Daily explicit content",
      "BG++, Solo, Foot",
      "Premium videos available at discount",
      "1-1 messaging",
      "Stories and encounters",
    ],
    linkHref: "https://onlyfans.com/kaylee",
    linkText: "VIP OnlyFans",
  },
  {
    img: "/free_page.jpg",
    title: "Free OnlyFans",
    bullets: [
      "Free to follow",
      "Premium video store",
      "Lewds",
      "VIP page previews",
      "Regular sales",
      <b>NO DMS!</b>,
    ],
    linkText: "Free OnlyFans",
    linkHref: "https://onlyfans.com/kaylee-free",
  },
];

export const CardSet = () => {
  return <div className="card-set">
    {cards.map(card => <Card {...card} />)}
  </div>
}
