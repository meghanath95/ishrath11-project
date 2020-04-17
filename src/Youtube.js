import React, {Component} from 'react';


const API = 'AIzaSyBxMrq5AwBbTPGkEO5CRytF0E7FrcE9XE4'
const channelID = 'UCH8NnRkxQg1zX7mHFRPq73g'
const result = 10;


var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelID=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {

    constructor(props){
        super(props);

        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }
clicked(){
    fetch(finalURL)
     .then((response) => response.json())
     .then((responseJson) => {
      //console.log(responseJson);
      const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" +obj.id.videoId);
      this.setState({resultyt});
      
    })
    .catch((error) => {
      console.error(error);
    });
}

    render(){
        // console.log(finalURL);
        console.log(this.state.resultyt);
        return(
            <div>
                <button onClick={this.clicked}>Get youtube Videos</button>
                 {
                  this.state.resultyt.map((link, i) => {
                     console.log(link);
                      var frame = <div className="youtube"><iframe key={i}  width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                       return frame;

                  })
              }
              {this.frame}                
               
 
              
            </div>
        );
    }
}

export default Youtube;