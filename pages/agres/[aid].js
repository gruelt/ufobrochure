import { useRouter} from "next/router";
import Layout from "../../components/layout/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import {Grid} from "@mui/material";
import ElementCard from "../../components/elementCard";
import SimpleBadge from "../../components/includes/appbar";

export async function getServerSideProps(context) {

    const { aid } = context.query;
    const res = await fetch(process.env.API_URL+'/api/agres/'+ aid+'/elements');
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
            <SimpleBadge count={data.length} />


            <Grid container spacing={1}>

                {data.map((elements) =>(

                    <ElementCard element={elements}></ElementCard>

                ))}


            </Grid>






        </Layout>
    )
}