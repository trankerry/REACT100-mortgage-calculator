import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      rate: 0,
      term: '15',
      output: ''
    };
    this.calculate = this.calculate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  calculate(balance, rate, term) {
// principal
    const p = this.state.balance;
/* monthly rate, calculated by dividing annual interest
rate by 100 to get percentage then divide by 12 months*/
    const r = (this.state.rate / 100) / 12;
// number of payments, calculated by multiplying the term by 12
    const n = this.state.term * 12;

    const top = r * ((1 + r) ** n);
    const bottom = ((1 + r) ** n) - 1;

    return p * (top / bottom);
  }

  handleClick() {
    const monthly = this.calculate();
    this.setState({ output: `$${monthly.toFixed(2)} is your monthly payment.` });
  }

  render() {
    return (
      <div className='container'>
        <form className='form-horizontal'>
          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-8'>
              <h3>Mortgage Calculator</h3>
              <hr />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='inputBalance' className='col-sm-2 control-label'>Loan Balance</label>
            <div className='col-sm-8'>
              <input
                name='balance'
                type='number'
                id='inputBalance'
                value={ this.state.balance }
                onChange={ this.handleChange }
              />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='inputRate' className='col-sm-2 control-label'>Interest Rate (%)</label>
            <div className='col-sm-8'>
              <input
                name='rate'
                type='number'
                step='0.01'
                id='inputRate'
                value={ this.state.rate }
                onChange={ this.handleChange }
              />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='selectTerm' className='col-sm-2 control-label'>Loan Term (years)</label>
            <div className='col-sm-8'>
              <select
                name='term'
                id='selectTerm'
                value={ this.state.term }
                onChange={ this.handleChange }
              >
                <option value='15'>15</option>
                <option value='30'>30</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-8'>
              <button
                type='button'
                name='submit'
                value={ this.state.output }
                onClick={ this.handleClick }
              >Calculate</button>
            </div>
          </div>
          <div className='form-group'>
            <div
              className='col-sm-offset-2 col-sm-8'
              name='output'
              id='output'
            >{this.state.output}</div>
          </div>

        </form>
      </div>
    );
  }
}
