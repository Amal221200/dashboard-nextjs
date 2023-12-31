
interface CardWrapperProps {
    children: React.ReactNode,
    additionalClassNames: string | ''
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children, additionalClassNames }) => {

    return (
        <article className={`shadow-card_shadow p-4 rounded-2xl ${additionalClassNames}`}>
            {children}
        </article>
    )
}
export default CardWrapper