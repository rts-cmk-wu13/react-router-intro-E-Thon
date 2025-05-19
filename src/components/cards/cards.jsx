export default function Cards ({header, icon, specifics}){
    return (
        <>
        <h3>{header}</h3>
        <img src={icon} alt={`${icon} representing ${header}`} />
        <p>{specifics}</p>
        </>
    )
}