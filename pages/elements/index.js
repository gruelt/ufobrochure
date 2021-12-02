import { useRouter} from "next/router";
import Layout from "../../components/layout/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import {Button, Grid} from "@mui/material";
import ElementCard from "../../components/elementCard";
import SimpleBadge from "../../components/includes/appbar";

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';







export async function getStaticProps(context) {
    const res = await fetch(process.env.API_URL+'/api/elements');
    const data = await res.json()
    //console.log(data)
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




                <Grid container spacing={1}>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                </Grid>



                <SimpleBadge count={data.length} />

                {data.map((elements) =>(

                    <ElementCard element={elements}></ElementCard>

                ))}


            </Grid>






        </Layout>
    )
}