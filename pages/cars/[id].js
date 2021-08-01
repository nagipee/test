import {useRouter} from 'next/router';

export default function Car({car}){
    const router = useRouter();
    const { id } = router.query;
    return <h1>Hello {id} {car.title}</h1>
}

export async function getServerSideProps({params}){
    const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
    const data = await req.json();

    return {
        props:{car:data}
    }
}

// export async function getStaticProps({params}){
//     const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
//     const data = await req.json();

//     return {
//         props:{car:data}
//     }
// }