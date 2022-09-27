const plain = () => null;

export const getServerSideProps = async ({ res }) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('author', 'i-volobuev');
    let date = new Date;
    res.end((date.getHours()).toString())
    return { props: {} };
}

export default plain;