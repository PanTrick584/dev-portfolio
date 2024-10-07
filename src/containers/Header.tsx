import "./styles/header.scss";

type TextProps = {
    texts: string[]
}

const Header: React.FC<TextProps> = ({ texts }) => {
    return (
        <section className='section section-header'>
            <h3>{texts.map((text => <>{text}<br /></>))}</h3>
        </section>
    )
}

export default Header;