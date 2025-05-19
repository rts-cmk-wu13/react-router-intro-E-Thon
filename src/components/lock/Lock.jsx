export default function Lock({header, text, icon}){
    return (
        <>
            <h2>{header}</h2>
            <p>{text}</p>
            <img src={icon} alt="Icon of the lock" />
        </>
    )
}