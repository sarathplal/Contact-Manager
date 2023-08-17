import { PersonAdd } from '@mui/icons-material'
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Contacts from './Contacts'

function Allcontacts() {
    return (
        <>

            <Container >
                <Grid mt={5} >
                    <Grid>
                        <Stack spacing={4} >
                            <Stack spacing={2} direction={'row'}>  <Typography variant='h4'>All Contacts</Typography><Button>< PersonAdd />Add New</Button></Stack>
                            <Typography variant='p'>
                                This is dummy content: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque
                                provident, quo excepturi amet, fugiat dolores pariatur sunt repudiandae a veniam possimus enim totam
                                velit! Commodi quam quaerat libero natus.
                                Perferendis fuga corrupti maiores molestiae dignissimos et atque eum iusto asperiores quia! Architecto
                                cum ea alias et ratione nesciunt voluptatum neque molestias doloribus, repellendus explicabo expedita
                                non ad deleniti corporis!
                                Perspiciatis doloribus ipsum tenetur quam dolorem laborum voluptatibus quisquam molestiae? Eos ullam cum
                                voluptatum, officia voluptas laboriosam explicabo voluptatem ipsa sit consequuntur aliquam veritatis
                                molestias, dolores alias incidunt assumenda animi!
                            </Typography>
                            <TextField style={{ 'width': '350px' }} id="outlined-basic" label="Search Contact" variant="outlined" />
                        </Stack>
                    </Grid>
                    <Grid mt={6}>

                        <Contacts/>

                    </Grid>

                </Grid>
            </Container>

        </>
    )
}

export default Allcontacts