import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';

export default function AddressForm() {
return (
<React.Fragment>
    <Typography variant="h6" gutterBottom>
    Dirección de Envío
    </Typography>
    <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
        <TextField
        required
        id="firstName"
        name="firstName"
        label="Nombre"
        fullWidth
        autoComplete="given-name"
        variant="standard"
        />
    </Grid>
    <Grid item xs={12} sm={6}>
        <TextField
        required
        id="lastName"
        name="lastName"
        label="Apellido"
        fullWidth
        autoComplete="family-name"
        variant="standard"
        />
    </Grid>
    <Grid item xs={12}>
        <TextField
        required
        id="address1"
        name="address1"
        label="Direccion 1"
        fullWidth
        autoComplete="shipping address-line1"
        variant="standard"
        />
    </Grid>
    <Grid item xs={12}>
        <TextField
        id="address2"
        name="address2"
        label="Direccion 2"
        fullWidth
        autoComplete="shipping address-line2"
        variant="standard"
        />
    </Grid>
    <Grid item xs={12} sm={6}>
        <TextField
        required
        id="city"
        name="city"
        label="Ciudad"
        fullWidth
        autoComplete="shipping address-level2"
        variant="standard"
        />
    </Grid>
    <Grid item xs={12} sm={6}>
        <TextField
        id="state"
        name="state"
        label="Estado/Provincia/Region"
        fullWidth
        variant="standard"
        />
    </Grid>
    <Grid item xs={12} sm={6}>
        <TextField
        required
        id="zip"
        name="zip"
        label="Codigo postal"
        fullWidth
        autoComplete="shipping postal-code"
        variant="standard"
        />
    </Grid>
    <Grid item xs={12} sm={6}>
        <TextField
        required
        id="country"
        name="country"
        label="Pais"
        fullWidth
        autoComplete="shipping country"
        variant="standard"
        />
    </Grid>
    <Grid item xs={12}>
        <FormControlLabel
        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
        label="Use esta dirección para detalles de pago"
        />
    </Grid>
    </Grid>
</React.Fragment>
);
}