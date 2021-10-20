import { useRouter} from "next/router";
import Layout from "../../components/layout/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:8000/api/elements`)
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


export default function Elements({ data }) {



    return (
        <Layout>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

                <ul className={utilStyles.list}>


                    {data.map((elements) => (
                        <li class="" className={utilStyles.listItem} >
                            <b>{elements.id}</b>
                            <br/>
                            {elements.nom}
                            <br/>
                            <i>{elements.image}</i>
                            <Image
                                width={200}
                                height={150}
                                src={'https://ufolepbrochure.s3.eu-west-3.amazonaws.com/' + elements.image}
                            ></Image>

                            <br/>
                            <Link href={'elements/'+elements.id}>
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