import { useRouter} from "next/router";
import Layout from "../../components/layout/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";


export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:8000/api/agres`)
    const data = await res.json()
    console.log(data)
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}


export default function Agres({ data }) {



    return (
        <Layout>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

                <ul className={utilStyles.list}>


                    {data.map((agres) => (
                        <li class="" className={utilStyles.listItem} >
                            <b>{agres.name}</b>
                            <br/>
                            {agres.description}
                            <br/>
                            <i>{agres.image}</i>

                            <br/>
                            <Link href={'agres/'+agres.id}>
                                <a>
                                    HomePage
                                </a>
                            </Link>


                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}