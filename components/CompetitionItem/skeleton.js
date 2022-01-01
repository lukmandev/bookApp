import {Box, Card, CardContent, Skeleton} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {styles} from "./styles";


const useStyles = makeStyles({
    card: {
        width: '100%',
        height: styles.card.height,
        background: styles.card.background,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
    }
});


const CompetitionItemSkeleton = () => {
    const muiStyles = useStyles();
    return (
        <Card className={muiStyles.card}>
            <Skeleton variant="rectangular" width={styles.img.width} height="100%" />
            <CardContent sx={{width: '100%', height: '100%'}}>
                <Skeleton variant="rectangular" width="60%" height={20} />
                <Skeleton sx={{my: '5px'}} variant="rectangular" width="70%" height={20} />
                <Box sx={{display: 'flex', gridColumnGap: styles.buttonHolder.gridColumnGap}}>
                    <Skeleton width={65} height={40} />
                    <Skeleton width={100} height={40} />
                </Box>
            </CardContent>
        </Card>
    )
}

export default CompetitionItemSkeleton;