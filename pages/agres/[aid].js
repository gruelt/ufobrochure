import {Router, useRouter} from "next/router";
import Layout from "../../components/layout/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import {Grid} from "@mui/material";
import ElementCard from "../../components/elementCard";
import SimpleBadge from "../../components/includes/appbar";
import {useEffect, useState} from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import { Slider,Checkbox } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import {FormGroup,FormControlLabel} from "@mui/material";



export async function getServerSideProps(context) {

    const { aid } = context.query;
    const res = await fetch(process.env.API_URL+'/api/agres/'+ aid+'/elements');
    const initialData = await res.json()
    //console.log(initialData + "iniital");
    if (!initialData) {
        return {
            notFound: true,
        }
    }

    const resfamilles = await fetch(process.env.API_URL+'/api/agres/'+ aid+'/familles');
    const familles = await resfamilles.json();


    return {
        props: { initialData,familles }, // will be passed to the page component as props
    }
}






export default function Agres({ initialData,familles }) {

    //Gets router parameter
    const router=useRouter();
    const {aid} = router.query;
    const API_URL = process.env.API_URL;


    //usestate for dynamic data
    const [data,setData] = useState(initialData);

    const [formText,setFormText] = useState('');
    const [range, setRange] = useState([0.1, 0.7]);
    const [selectedFamilly,setselectedFamilly] = useState([]);


    //Effect for formText
    useEffect(() => {
        console.log(selectedFamilly);
        let filteredData = initialData.filter(item => {

            return String(item.nom).toLowerCase().includes(formText.toLowerCase()) && item.difficulte >= range[0] && item.difficulte <= range[1];
        })



        setData(filteredData);

    },[formText,range,selectedFamilly]);





    const marks = [

        {
            value: 0.1,
            label: '0.1',
        },
        {
            value: 0.2,
            label: '0.2',
        },
        {
            value: 0.3,
            label: '0.3',
        },
        {
            value: 0.4,
            label: '0.4',
        },
        {
            value: 0.5,
            label: '0.5',
        },
        {
            value: 0.6,
            label: '0.6',
        },
        {
            value: 0.7,
            label: '0.7',
        },
    ];


    return (

        <Layout>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            {/*<SimpleBadge count={data.length} />*/}




            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <SimpleBadge count={data.length} />
                </Grid>


                <Grid item xs={12} sm={4}>


                        <InputLabel htmlFor="elementName">Nom</InputLabel>
                        <Input id="elementName" aria-describedby="elementsNameHelper" value={formText} onChange={(e) => setFormText(e.target.value)}/>
                        <FormHelperText id="elementNameHelper">Texte de l'élément.</FormHelperText>
                </Grid>
                <Grid item xs={12} sm={4}>

                    {/*<Slider*/}
                    {/*    size="small"*/}
                    {/*    step={0.1}*/}
                    {/*    valueLabelDisplay="on"*/}
                    {/*    marks*/}
                    {/*    aria-label="Small"*/}
                    {/*    valueLabelDisplay="auto"*/}
                    {/*    value={formMin} onChange={(e) => setFormMin(e.target.value)}*/}
                    {/*    max={0.7}*/}
                    {/*/>*/}

                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={range}
                        onChange={(e) => setRange(e.target.value)}
                        valueLabelDisplay="auto"
                        min={0.1}
                        max={0.7}
                        step={0.1}
                        marks={marks}
                    />



                </Grid>
                <Grid item xs={12} sm={4}>





                    <FormGroup>
                        {/*{familles.map((famille) =>(*/}

                        {/*//     <FormControlLabel*/}
                        {/*//     control={*/}
                        {/*//         <Checkbox defaultChecked checked={selectedFamilly[famille.id]} onChange={(e) => setselectedFamilly({...selectedFamilly, [famille.id]: e.target.checked})} name={famille.id} />*/}
                        {/*//     }*/}
                        {/*//     label={famille.nom}*/}
                        {/*// />*/}

                        {/*    */}

                        {/*    */}




                        {/*))}*/}


                    </FormGroup>



                </Grid>

                {data.map((elements) =>(


                    <ElementCard element={elements}></ElementCard>

                ))}


            </Grid>








        </Layout>
    )
}