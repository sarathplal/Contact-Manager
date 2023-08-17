import { MoreVert } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'

function Edit() {
    return (
        <>
            <Grid container spacing={6} mt={6}>
                <Grid item xs={4} md={3}></Grid>
                <Grid item xs={8} md={6}>
                    <Card sx={{ maxWidth: 500 ,padding:'10'}}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVert />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="/static/images/cards/paella.jpg"
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">Name</Typography>
                            <Typography variant="body2" color="text.secondary">Contact Number</Typography>
                            <Typography variant="body2" color="text.secondary">Email</Typography>
                            <Typography variant="body2" color="text.secondary">Company</Typography>
                            <Typography variant="body2" color="text.secondary">Title</Typography>
                            <Typography variant="body2" color="text.secondary">Group</Typography>

                        </CardContent>


                    </Card>
                </Grid>
                <Grid item xs={2} md={3}></Grid>
            </Grid>
        </>
    )
}

export default Edit