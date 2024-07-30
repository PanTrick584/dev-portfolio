type TextProps = {
    text: string
}
const Section: React.FC<TextProps> = ({text}) => {
    return(
        <section className='section section-normal'>
            <p>{text}</p>
        </section>
    )
}

export default Section;