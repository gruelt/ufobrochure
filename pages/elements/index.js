import { useRouter} from "next/router";
import Layout from "../../components/layout/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import {Grid} from "@mui/material";

export async function getStaticProps(context) {
    const res = await fetch(process.env.API_URL+'/api/elements');
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

            <Grid container spacing={1}>

            {data.map((elements) => (

                    <Grid item xs={2}>


                        <Image
                            width={250}
                            height={150}
                            src={'https://ufolepbrochure.s3.eu-west-3.amazonaws.com/' + elements.image}
                        ></Image>

                        {/*{elements.nom}*/}

                    </Grid>


            ))}
            </Grid>





            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

                <ul className={utilStyles.list}>


                    {data.map((elements) => (
                        <li class="" className={utilStyles.listItem} >
                            <b>{elements.id}</b>
                            {elements.difficulte}
                            <br/>
                            {elements.nom}
                            <br/>

                            <Image
                                width={250}
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