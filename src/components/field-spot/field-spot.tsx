import classes from './field-spot.module.scss';
import { ChangeColor } from '../../checkWin';

function FieldSpot(props: {
    children: string;
    click: (params: number[]) => void;
    spot: number[];
    win: string;
    field: string[][];
}) {
    const winingSpots = ChangeColor(props.field, props.win);

    return (
        <div
            className={classes.field_spot}
            onClick={() =>
                props.children === '' && props.win === '' ? props.click(props.spot) : null
            }
        >
            {props.children && (
                <p
                    className={
                        winingSpots?.find((e) => e.toString() === props.spot.toString())
                            ? classes.field_spot_colored
                            : classes.field_text
                    }
                >
                    {props.children}
                </p>
            )}
        </div>
    );
}

export default FieldSpot;
