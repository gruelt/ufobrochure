import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import {Chip} from "@mui/material";






export default function ElementCard({ element }) {

    return (
        <Card sx={{ minWidth: 275 ,maxWidth:275}} >
            <CardContent>


                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <Image
                        width={850}
                        height={450}
                        src={'https://ufolepbrochure.s3.eu-west-3.amazonaws.com/' + element.image}
                    ></Image>
                </Typography>


                <Typography sx={{ fontSize: 14 }}  gutterBottom>

                    <span style={{
                        backgroundColor: '#000000' , color:'white' , fontFamily: 'Roboto', fontSize:'12px',padding:'2px'}}>{element.difficulte}</span>

                    <span style={{
                        backgroundColor: element.agres.color , color:'white' , fontFamily: 'Roboto', fontSize:'12px',padding:'2px'

                    }}><Image
                        width={16}
                        height={14}
                        src={'https://ufolepbrochure.s3.eu-west-3.amazonaws.com/' + element.agres.image}

                    ></Image>

                        {element.famille.nom}</span>





                </Typography>


                <Typography variant="body2">
                    {element.nom}
                </Typography>

            </CardContent>

        </Card>
    )
}