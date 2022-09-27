const plain = () => null;

export const getServerSideProps = async ({ res }) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('author', 'i-volobuev');
    let date = new Date
    let date_local = date.toLocaleString("ru-Ru", {timeZone: "Europe/Moscow"})
        .split(':')[0]
        .split(',')[1]
    res.end(date_local)
    return { props: {} };
}

export default plain;