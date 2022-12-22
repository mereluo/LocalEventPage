import Image from 'next/image';
import Link from 'next/link'; // enable to go to pages without refresh

const EventsCatPage = ({ data, pageName }) => {
    return <div>
        <h1>Events in {pageName}</h1>
        <div>
            {data.map(ev => (
                <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                    <a>
                        <Image width={300} height={300} alt={ev.title} src={ev.image} />
                        <h2>{ev.title}</h2>
                        <p> {ev.description}</p>
                    </a>
                </Link>
            ))}
        </div>
    </div>;
}

export default EventsCatPage;

/*
how many valid paths do we need to take care of
*/
export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                cat: ev.id.toString(),
            },
        };
    });
    // console.log(allPaths);
    return {
        paths: allPaths,
        fallback: false,    // other path names will not be valid
    };
}

/*
get the data that we want to have
*/
export async function getStaticProps(context) {
    const id = context.params.cat;
    const { allEvents } = await import('/data/data.json');
    const data = allEvents.filter(ev => ev.city === id);
    return {
        props: { data, pageName: id }
    };
}