import { useState } from "react";
import { Card, CardActionArea, CardActions, CardContent, CardHeader, Dialog, DialogTitle,Grid, IconButton, Tabs, Tab, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {Delete, Edit, Close} from "@mui/icons-material";
import Announcement from "../models/Announcement";
import Repo from '../repositories'
import AnnouncementForm from "./announcement-form";

interface Prop {
    announcement: Announcement
    callbackFetchFn: () => void
}

function AnnouncementCard(props: Prop) {
    const [announcement, setAnnouncement] = useState<Announcement>(props.announcement)
    const [popup, setPopup] = useState(false)
    const [tabIndex, setTabIndex] = useState(0)

    const onUpdate = async (ann: Partial<Announcement>) => {
        const result = await Repo.announcements.update(ann)
        if (result) {
            setAnnouncement(result)
        }
        setPopup(false)
    }

    const onDelete = async () => {
        await Repo.announcements.delete(announcement.id)
        props.callbackFetchFn()
    }

    return (
        <Box>
            <Card sx={{ maxWidth: 500, height: 240}}>
                <CardHeader
                  sx={{ height: '30%'}}
                  title={announcement?.topic}
                  subheader={new Date(announcement?.pubDateTime?.toString()).toLocaleString('en-GB')}
                  action={
                    <IconButton sx={{ '&:hover': { color: 'red'} }} onClick={onDelete}>
                        <Delete />
                    </IconButton>
                  }
                />
                <CardActionArea sx={{ height: '56%' }} onClick={() => setPopup(true)}>
                    <CardContent sx={{ height: '40%' }}>
                        <Grid container spacing={2} columns={5}>
                            <Grid item xs={3}>
                                <Typography component='div'>
                                    {announcement.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'flex-end'}}>
                        <Edit color='primary' />
                    </CardActions>
                </CardActionArea>
            </Card>
            <Dialog PaperProps={{sx: { minWidth: '50%', height: '55$'} }} open={popup} onClose={() => setPopup(false)}>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Tabs value={tabIndex} onChange={(event: React.SyntheticEvent, newValue: number) => setTabIndex(newValue)} aria-label="basic tabs example">
                        <Tab label="General" />
                    </Tabs>
                    <IconButton onClick={() => setPopup(false)}>
                        <Close/>
                    </IconButton>
                </DialogTitle>
                <Box hidden={tabIndex !== 0}>
                    <AnnouncementForm announcement={announcement} callbackFn={onUpdate}></AnnouncementForm>
                </Box>
            </Dialog>
        </Box>
    )
}

export default AnnouncementCard
