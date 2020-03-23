// @ts-check
import React, { Component } from 'react';
import CreateRow from './CreateRow.jsx';
import Modal from './Modal.jsx';
import './table.css';
import './button.css';

export default class TicTacToe extends Component {
    state = {
        fields: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],
        count: 0,
        move: true,
        winningCombinations: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ],
        class: 'hidden',
        text: '',
    };

    handleMove = (row, col) => {
        if (this.state.fields[row][col] === null) {
            let fields = [...this.state.fields];
            let count = this.state.count;
            fields[row][col] = this.state.move ? 'X' : '0';
            ++count;
            this.setState({
                fields: fields,
                count: count,
                move: !this.state.move
            });
            this.handleWin();
        }
    };

    handleReset = () => {
        let fields = [...this.state.fields];
        fields = fields.map(row =>
            row.map(col => null)
        );
        let count = 0;
        let winClass = this.state.class;
        winClass = 'hidden';

        this.setState({
            fields: fields,
            count: count,
            class: winClass,
            text: 'Победили ',
            move: true
        });
    };

    handleWin = () => {
        let winClass = this.state.class;
        let winText = this.state.text;

        this.state.winningCombinations.forEach(win => {
            let cells = this.state.fields.reduce((acc, curr) => [...acc, ...curr], []);

            if (cells[win[0]] === 'X' && cells[win[1]] === 'X' && cells[win[2]] === 'X') {
                winText = 'Победили X';
                winClass = '';
            }

            if (cells[win[0]] === '0' && cells[win[1]] === '0' && cells[win[2]] === '0') {
                winClass = '';
                winText = 'Победили 0';
            }
        });

        if (winClass === 'hidden' && this.state.count >= 8) {
            winText = 'Ничья';
            winClass = '';
        }

        this.setState({
            class: winClass,
            text: winText
        });
    }

    render() {
        return (
            <React.Fragment>
                <div>{'Ходит: ' + (this.state.move ? 'X' : '0')}</div>
                <table>
                    <tbody>
                        {
                            this.state.fields.map((row, index) =>
                                <CreateRow
                                    cols={ row }
                                    row={ index }
                                    handleMove={ this.handleMove }
                                    key={ index }
                                />
                            )
                        }
                    </tbody>
                </table>
                <div 
                    onClick={ this.handleReset }
                    className="button"
                >Reset</div>
                <Modal
                    handleReset={ this.handleReset }
                    className={ this.state.class }
                    winText={ this.state.text }
                />
            </React.Fragment>
        );
    }
}

