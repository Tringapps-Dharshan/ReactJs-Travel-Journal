import React from 'react'
import { Card, Box, Typography, CardContent, CardMedia,IconButton } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
function CardDetails({ details }) {
    return (
        <div>
            {
                details.map((i) => {
                    return (
                        <>
                            <Card sx={{display:'flex',margin:'50px',backgroundColor:'lightgray'}}>
                                <CardMedia>
                                    <img src={i.imageUrl} alt={i.title} width='250vw' height='290vh' className='display-img'/>
                                </CardMedia>
                                <Box sx={{ display: 'flex', flexDirection: 'column',padding:'10px'}}>
                                    <CardContent sx={{ flex: '1 0 auto'}}>
                                        <Typography component="div" variant="h5">
                                            <IconButton>
                                                <LocationOnIcon/>
                                            </IconButton>
                                            <span className='location'>{i.location}</span>  
                                            <a href={i.googleMapsUrl} className='a-link'>View on Google-Map</a>
                                        </Typography>
                                        <Typography variant="subtitle1" component="div">
                                            <h1>{i.title}</h1>
                                        </Typography>
                                        <Typography variant="subtitle1" component="div">
                                            <h3>{i.startDate} - {i.endDate}</h3>
                                        </Typography>
                                        <Typography variant="subtitle1" component="div">
                                            <span>
                                            {i.description}
                                            </span>
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>
                        </>
                    )
                })
            }
        </div>
    )
}

export default CardDetails