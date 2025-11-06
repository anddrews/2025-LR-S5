import { Button } from "../button/Button";

export const Decrement = ({onClick}) => {

    const handleClick = () => {
        onClick((currState) => currState - 1);
    }

    return (
    <Button onClick={handleClick}>
        Decrement
    </Button>
    )
}