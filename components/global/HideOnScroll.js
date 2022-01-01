import {Slide, useScrollTrigger} from "@mui/material";


const HideOnScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction={props.direction} in={!trigger}>
            {children}
        </Slide>
    );
}

export default HideOnScroll;