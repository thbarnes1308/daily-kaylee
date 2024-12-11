import './LinkButton.css';

export type LinkButtonProps = {
    href: string;
    text: string;
}

export const LinkButton = ({ href, text }: LinkButtonProps) => {
    return (
        <a className='link-button' href={href}>{text}</a>
    )
};
