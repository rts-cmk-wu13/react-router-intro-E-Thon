export default function Cards ({header, icon, distance}){
    return (
        <>
        <h3>{header}</h3>
        <img src={icon} alt={`${icon} representing ${header}`} />
        <p>{distance}</p>
        </>
    )
}