import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Addcontact() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
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
    </>
  )
}

export default Addcontact