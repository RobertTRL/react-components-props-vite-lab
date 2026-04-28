export default function Article({ title, date, preview }) {
    return (
        <article>
            <h2>{title}</h2>
            <small>{(date)? date: "January 1, 1970"}</small>
            <p>{preview}</p>
        </article>
    )
}