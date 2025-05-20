export default function Cards ({header, icon, specifics}){
    return (
        <>
        <h3>{header}</h3>
        <div>{icon}</div>
        <p>{specifics}</p>
        </>
    )
}