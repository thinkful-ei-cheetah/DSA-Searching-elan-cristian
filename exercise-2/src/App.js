import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    input: '',
    searchValue: '',
    linearResult: '',
    binaryResult: ''
  }

  handleBinarySearch = (arr, value, start=0, end=arr.length) => {
    let steps = 1
    const sortedArr = arr.sort()
    let middle = Math.floor((start+end) / 2)
    let item = sortedArr[middle]

    if(start > end) return -1

    if (item === value) {
      this.setState({ binaryResult: `${value} was found after ${steps} step/s` })
      return 1
    }

    else if (item < value) {
      steps++
      console.log(steps)
      return this.handleBinarySearch(sortedArr, value, middle+1, end)
    }
    
    else if (item > value) {
      steps++
      console.log(steps)
      return this.handleBinarySearch(sortedArr, value, start, middle-1)
    }

    else {
      return 1
    }
  }

  handleLinearSearch = (arr, value) => {
    let steps = 0
    for (let i = 0; i < arr.length; i++) {
      steps++
      if(arr[i] === value) {
        this.setState({ linearResult: `${value} is at ${i} after ${steps} steps`})
        return
      }
    }
    this.setState({ linearResult: `${value} not found in array after ${steps} steps` })
    return
  }

  handleInputChange = e => {
    this.setState({ input: e.target.value })
  }

  handleSearchValChange = e => {
    const searchToNum = parseInt(e.target.value)
    this.setState({ searchValue: searchToNum })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const inputArr = this.state.input.split(' ').map(elem => parseInt(elem))
    this.handleLinearSearch(inputArr, this.state.searchValue)
    this.handleBinarySearch(inputArr, this.state.searchValue)
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='search-bar'>
            Search
          </label>
          <input 
            type='text'
            id='search-bar'
            onChange={this.handleInputChange}
            value={this.state.input}
          />
          <label htmlFor='search-for'>Linear Search</label>
          <input 
            type='text'
            id='search-for'
            onChange={this.handleSearchValChange}
            value={this.state.searchValue}
          />
          <button type='submit'>Search</button>
        </form>
        <div>
          <p>{this.state.linearResult}</p>
          <p>{this.state.binaryResult}</p>
        </div>
      </div>
      );
    }
  }



export default App;
