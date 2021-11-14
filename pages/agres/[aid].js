import { useRouter} from "next/router";
import Layout from "../../components/layout/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import {Grid} from "@mui/material";
import ElementCard from "../../components/elementCard";
import SimpleBadge from "../../components/includes/appbar";




export async function getStaticProps(context) {
    const res = await fetch(process.env.API_URL+'/api/agres/');
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
    const router = useRouter();
    const { aid } = router.query;

    return (
        <Layout>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <SimpleBadge count={data.length} />


            <Grid container spacing={1}>

                {data.map((elements) =>(

                    <ElementCard element={elements}></ElementCard>

                ))}


            </Grid>






        </Layout>
    )
}