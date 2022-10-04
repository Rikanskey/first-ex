const plain = () => null;
export const getServerSideProps = async (context) => {
    const id = context['params'].id
    const kodak_res = await fetch(`https://nd.kodaktor.ru/users/${id}`)
        .then((response) => response.json())
    const res = context['res']
    res.setHeader('author', 'i-volobuev');
    res.end(kodak_res.login);
    return { props:{} };
}

export default plain;