import { useState } from 'react';
import classes from './App.module.scss';
import checkWin from './checkWin';
import FieldSpot from './components/field-spot/field-spot';

function App() {
    const [field, setField] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);
    const [turn, setTurn] = useState(true);
    const [win, setWin] = useState('');

    function move(params: number[]) {
        field[params[0]].splice(params[1], 1, `${turn ? 'x' : 'o'}`);
        setField(field);
        setWin(checkWin(field, turn));
        setTurn(!turn);
    }

    function reset() {
        setField([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ]);
        setWin('');
        setTurn(true);
    }

    return (
        <>
            <h2 className={classes.h2}>Tic-tac-toe</h2>
            {win === '' ? (
                <h3 className={classes.h3}>{turn ? 'X' : 'O'}</h3>
            ) : win === 'none' ? (
                <h3 className={classes.h3_draw}>Draw</h3>
            ) : (
                <h3 className={classes.h3_win}> {win === 'x' ? 'X' : 'O'}</h3>
            )}
            <div className={classes.field}>
                {field.map((item, rowIndex) => (
                    <div key={'Row' + rowIndex} className={classes.field_row}>
                        {item.map((e, spotIndex) => (
                            <FieldSpot
                                key={'Row' + rowIndex + 'Spot' + spotIndex}
                                click={move}
                                spot={[rowIndex, spotIndex]}
                                win={win}
                                field={field}
                            >
                                {e}
                            </FieldSpot>
                        ))}
                    </div>
                ))}
            </div>
            <button onClick={reset} className={classes.reset_btn}>
                Reset
            </button>
        </>
    );
}

export default App;
