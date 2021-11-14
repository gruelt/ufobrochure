import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from "next/image";






export default function ElementCard({ element }) {
    return (
        <Card sx={{ minWidth: 275 ,maxWidth:275}} >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {element.difficulte} - {element.famille}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <Image
                        width={250}
                        height={150}
                        src={'https://ufolepbrochure.s3.eu-west-3.amazonaws.com/' + element.image}
                    ></Image>
                </Typography>
                <Typography variant="body2">
                    {element.nom}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}