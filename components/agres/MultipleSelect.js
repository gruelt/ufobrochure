import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Button} from "@mui/material";
import {useEffect} from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



export default function MultipleSelect(props) {
    const theme = useTheme();
    const [familleSelected, setFamilleSelected] = React.useState([]);


    useEffect(() => {
        console.log('useeffect');
        props.callback(familleSelected);

    },[familleSelected]);



    const handleChange = (event) => {

            const {
                target: { value },
            } = event;
            setFamilleSelected(
                // On autofill we get a the stringified value.
                typeof value === 'string' ? value.split(',') : value,
            );
            props.callback(familleSelected);
    };





    return (
        <div>


            <FormControl sx={{ m: 1, width: 300 }}>

                <InputLabel id="demo-multiple-name-label">Famille</InputLabel>

                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={familleSelected}
                    onChange={handleChange}
                    input={<OutlinedInput label="Famille" />}
                    MenuProps={MenuProps}
                >



                    {props.familles.map((famille) => (
                        <MenuItem
                            key={famille.id}
                            value={famille.id}

                        >
                            {famille.nom}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
