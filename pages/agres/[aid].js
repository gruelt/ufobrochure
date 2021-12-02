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
import {FormGroup,FormControlLabel,Button,Modal,Box,Typography} from "@mui/material";
import MultipleSelect from "../../components/agres/MultipleSelect";
import {ArrowBack} from "@material-ui/icons";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};






export async function getStaticProps({params}) {

    //const { aid } = context.query;
    //const { aid } = params.aid;
    const res = await fetch(process.env.API_URL+'/api/agres/'+ params.aid+'/elements');
    const initialData = await res.json()
    //console.log(initialData + "iniital");;
    if (!initialData) {
        return {
            notFound: true,
        }
    }

    const resfamilles = await fetch(process.env.API_URL+'/api/agres/'+ params.aid+'/familles');
    const familles = await resfamilles.json();


    return {
        props: { initialData,familles }, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    const res = await fetch(process.env.API_URL+'/api/agres');
    const agres = await res.json()

    //Get the paths we want to pre-render based on posts
    const paths = agres.map((agre) => ({
        params: { aid: agre.id.toString() },
    }))
    //const paths = [];


    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: true }
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
    const [selectedFamilly,setSelectedFamilly] = useState([]);

    let previousFamilly = [];

    function presetN78()
    {
        setRange([0.1,0.2]);
    }

    function presetN6()
    {
        setRange([0.1,0.3]);
    }

    function presetN5()
    {
        setRange([0.2,0.4]);
    }

    function presetN4()
    {
        setRange([0.3,0.5]);
    }

    function presetN3()
    {
        setRange([0.3,0.6]);
    }

    function presetN2()
    {
        setRange([0.3,0.7]);
    }

    function presetN1()
    {
        setRange([0.3,0.7]);
    }


    //Effect for formText
    useEffect(() => {
        console.log(selectedFamilly);
        let filteredData = initialData.filter(item => {

            return String(item.nom).toLowerCase().includes(formText.toLowerCase())
                         && item.difficulte >= range[0]
                         && item.difficulte <= range[1]
                        &&  ( selectedFamilly.includes(item.famille_id) || selectedFamilly.length==0)
                ;
        })



        setData(filteredData);

    },[formText,range,selectedFamilly]);


    function callbackSelectedFamille(selectedFamilles){
        //etselectedFamilly(selectedFamilles);

        setSelectedFamilly(selectedFamilles);
        console.log(selectedFamilles);


    }



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

                <Grid item xs={6}>
                    <Link href={'/agres/'}>
                        <Button variant="contained" ><ArrowBack></ArrowBack> Liste Agrès</Button>
                    </Link>
                </Grid>

                <Grid item xs={6}>
                    <Button variant="contained" onClick={presetN78} >N8</Button>
                    <Button variant="contained" onClick={presetN78} >N7</Button>
                    <Button variant="contained" onClick={presetN6} >N6</Button>
                    <Button variant="contained" onClick={presetN5} >N5</Button>
                    <Button variant="contained" onClick={presetN4} >N4</Button>
                    <Button variant="contained" onClick={presetN3} >N3</Button>
                    <Button variant="contained" onClick={presetN2} >N2</Button>
                    <Button variant="contained" onClick={presetN1} >N1</Button>
                </Grid>




                <Grid item xs={12} sm={4}>


                        <InputLabel htmlFor="elementName">Nom</InputLabel>
                        <Input id="elementName" aria-describedby="elementsNameHelper" value={formText} onChange={(e) => setFormText(e.target.value)}/>
                        <FormHelperText id="elementNameHelper">Texte de l'élément.</FormHelperText>
                </Grid>
                <Grid item xs={12} sm={4}>


                    <Slider
                        getAriaLabel={() => 'Difficulté range'}
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

                    {/*<Button onClick={handleOpen}>Open modal</Button>*/}
                    {/*<Modal*/}
                    {/*    open={open}*/}
                    {/*    onClose={handleClose}*/}
                    {/*    aria-labelledby="modal-modal-title"*/}
                    {/*    aria-describedby="modal-modal-description"*/}
                    {/*>*/}
                    {/*    <Box sx={style}>*/}
                    {/*        {familles.map((famille) =>(*/}

                    {/*            <FormControlLabel*/}
                    {/*                control={*/}
                    {/*                    <Checkbox defaultChecked checked={selectedFamilly[famille.id]} onChange={(e) => setselectedFamilly({...selectedFamilly, [famille.id]: e.target.checked})} name={famille.id} />*/}
                    {/*                }*/}
                    {/*                label={famille.nom}*/}
                    {/*            />*/}
                    {/*        ))}*/}


                    {/*    </Box>*/}
                    {/*</Modal>*/}

                    <MultipleSelect familles={familles} callback={callbackSelectedFamille}></MultipleSelect>


                    {/*<FormGroup>*/}
                    {/*    {familles.map((famille) =>(*/}

                    {/*        <FormControlLabel*/}
                    {/*        control={*/}
                    {/*            <Checkbox defaultChecked checked={selectedFamilly[famille.id]} onChange={(e) => setselectedFamilly({...selectedFamilly, [famille.id]: e.target.checked})} name={famille.id} />*/}
                    {/*        }*/}
                    {/*        label={famille.nom}*/}
                    {/*    />*/}

                    {/*    ))}*/}


                    {/*</FormGroup>*/}



                </Grid>


                <Grid item xs={12}>
                    <SimpleBadge count={data.length} />
                </Grid>


                {data.map((elements) =>(




                    <ElementCard element={elements}></ElementCard>



                ))}


            </Grid>








        </Layout>
    )
}