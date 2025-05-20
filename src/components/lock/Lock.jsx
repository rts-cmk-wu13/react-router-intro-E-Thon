export default function Lock({header, text, icon}){
    return (
        <>
            <h2>{header}</h2>
            <p>{text}</p>
            <div>{icon}</div>
        </>
    )
}