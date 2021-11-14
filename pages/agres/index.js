import { useRouter} from "next/router";
import Layout from "../../components/layout/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import {Button} from "@mui/material";
import Image from "next/image";


export async function getStaticProps(context) {
    const res = await fetch(process.env.API_URL+'/api/agres');
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
                        <Link href={'agres/'+agres.id}>
                        <li class="" className={utilStyles.listItem} style={{
                            backgroundColor: agres.color,
                            width: '100px',
                            height: '100px'
                        }}>

                            <Image
                                width={250}
                                height={150}
                                src={'https://ufolepbrochure.s3.eu-west-3.amazonaws.com/' + agres.image}

                            ></Image>

                            <b>{agres.name}</b>
                            <br/>
                            {agres.description}
                            <br/>
                            <i>{agres.image}</i>

                            <br/>
                            <Link href={'agres/'+agres.id}>

                                    <Button variant="contained" >Voir </Button>

                            </Link>


                        </li>
                        </Link>
                    ))}
                </ul>

            </section>
        </Layout>
    )
}