export default function About({image, about}) {
    return (
        <aside>
            <img src={(image.src)? image.src : "https://via.placeholder.com/215"} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}