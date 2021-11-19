import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: 0
    };
  }

  function calculate(balance, rate, term) {
    // principal
    const p = balance;
    // monthly rate, calculated by dividing annual interest rate by 100 to get percentage then divide by 12 months
    const r = (rate/100) / 12;
    // number of payments, calculated by multiplying the term by 12
    const n = term * 12;

    let top = r*((1+r)**n)
    let bottom = ((1+r)**n)-1
    
    return p*(top/bottom)
  }

  render() {
    return (
      <div className='container'>
        <form className='form-horizontal'>
          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-8'>
              <h1>Mortgage Calculator</h1>
              <hr />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='inputBalance' className='col-sm-2 control-label'>Loan Balance</label>
            <div className='col-sm-8'>
              <input 
                name='balance' type='number' id='inputBalance'placeholder='0' value={ this.state.balance }
              ></input>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='inputRate' className='col-sm-2 control-label'>Interest Rate (%)</label>
            <div className='col-sm-8'>
              <input
                name='rate' type='number' step='0.01' id='inputRate'
                placeholder='0' value={ this.state.rate }
              ></input>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='selectTerm' className='col-sm-2 control-label'>Loan Term (years)</label>
            <div className='col-sm-8'>
              <select name='term' id='selectTerm' value={ this.state.term }>
                <option value='15'>15</option>
                <option value='30'>30</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-8'>
              <button name='submit'>Calculate</button>
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-8' name='output' id='output'> </div>
          </div>

        </form>
      </div>
    );
  }
}
