import React,{Component} from 'react';
import ReactDOM from 'react-dom';

  class AudioTypes extends Component {
      state = {
        AudioTypes:"acoustic_grand_piano"
      };
  
      handleChange=(e)=>{
          this.setState({
            AudioTypes: e.target.value
          })
      }
  
    render() {
      return (
        <div>
           <form>
              <input type="radio" value="acoustic_grand_piano" id="acoustic_grand_piano"
                onChange={this.handleChange} name="acoustic_grand_piano" />
              <label htmlFor="acoustic_grand_piano">Acoustic grand piano</label>
  
              <input type="radio" value="marimba" id="marimba"
                onChange={this.handleChange} name="marimba"/>
              <label htmlFor="marimba">Marimba</label>
           </form>
  
           <p> {this.state.AudioTypes}</p>
        </div>
      );
    }
  }

  export default AudioTypes;