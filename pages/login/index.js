const plain = () => null;

export const getServerSideProps = async ({ res }) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('author', 'i-volobuev');
    res.end('i-volobuev');
    return { props: {} };
}

export default plain;