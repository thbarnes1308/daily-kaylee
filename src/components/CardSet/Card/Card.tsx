import { LinkButton } from "../../LinkButton";

import './Card.css';

export type CardProps = {
    img: string;
    title: string;
    bullets: (string | React.ReactElement)[];
    linkText: string;
    linkHref: string;
}

export const Card = (props: CardProps) => {
    return <div className="card">
        <div className="card-upper">
            <img alt={props.title + " image"} src={props.img} />
            <h3>{props.title}</h3>
            <ul>
                {props.bullets.map(bullet => <li>{bullet}</li>)}
            </ul>
        </div>
        <LinkButton href={props.linkHref} text={props.linkText} />
    </div>
}
