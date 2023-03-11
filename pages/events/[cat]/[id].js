import SingleEvent from '../../../src/components/events/single-event';

/*
 third executed function: to present on the page
*/
const EventPage = ({ data }) => <SingleEvent data={data} />
export default EventPage;

/*
 first executed function: to get all the paths available
*/
export async function getStaticPaths() {
    const { allEvents } = await import('/data/data.json');
    const allPaths = allEvents.map((path) => {
        return {
            params: {
                cat: path.city, // child of the cat event page
                id: path.id,
            }
        };
    })
    return {
        paths: allPaths,
        fallback: false,
    }
}

/*
 second executed function: to get the specific data matches of the path
*/
export async function getStaticProps(context) {
    // console.log(context);
    const { allEvents } = await import('/data/data.json');
    const id = context.params.id;
    const eventData = allEvents.find((ev) => (id === ev.id))
    return {
        props: { data: eventData },
    };
}