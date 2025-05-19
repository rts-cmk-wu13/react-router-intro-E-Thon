export default function Information ({header, text, img}){
    return (
        <>
            <h3>{header}</h3>
            <p>{text}</p>
            <img src={img} alt="MyScooter image" />
        </>
    )
}