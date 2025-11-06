import { Button } from "../button/Button";


export const Increment = ({onClick}) => {

    const handleClick = () => {
        onClick((currState) => currState + 1);
    }

    return (
        <Button onClick={handleClick}>
            Increment
        </Button>
    )
}