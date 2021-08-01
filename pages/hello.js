export default function Home(props){
    console.log(props);
    return <h1>hiii eieie{props.car.title}</h1>
}

// fetch('https://jsonplaceholder.typicode.com/todos/1')

export async function getServerSideProps(){
    const req = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await req.json();

    return {
        props:{car:data}
    }
}