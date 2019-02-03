import React, { Component } from "react";

import "./App.css";

const pads = [
  {
    id: "Q",
    clipSrc:
      "https://sampleswap.org/samples-ghost/ MAY 2014 LATEST ADDITIONS/DRUMS (FULL KITS)/Another Real Life Kit/34[kb]real-life-CAMEO_SN.WAV.mp3"
  },
  {
    id: "W",
    clipSrc:
      "https://sampleswap.org/samples-ghost/ MAY 2014 LATEST ADDITIONS/DRUMS (FULL KITS)/Another Real Life Kit/248[kb]real-life-CRASH1.WAV.mp3"
  },
  {
    id: "E",
    clipSrc:
      "https://sampleswap.org/samples-ghost/ MAY 2014 LATEST ADDITIONS/DRUMS (FULL KITS)/Another Real Life Kit/180[kb]real-life-CRASH2.WAV.mp3"
  },
  {
    id: "A",
    clipSrc:
      "https://sampleswap.org/samples-ghost/ MAY 2014 LATEST ADDITIONS/DRUMS (FULL KITS)/Another Real Life Kit/25[kb]real-life-GATEKICK.WAV.mp3"
  },
  {
    id: "S",
    clipSrc:
      "https://sampleswap.org/samples-ghost/ MAY 2014 LATEST ADDITIONS/DRUMS (FULL KITS)/Another Real Life Kit/25[kb]real-life-KICK.WAV.mp3"
  },
  {
    id: "D",
    clipSrc:
      "https://sampleswap.org/samples-ghost/ MAY 2014 LATEST ADDITIONS/DRUMS (FULL KITS)/Another Real Life Kit/49[kb]real-life-KICK1.WAV.mp3"
  },
  {
    id: "Z",
    clipSrc:
      "https://sampleswap.org/samples-ghost/ MAY 2014 LATEST ADDITIONS/DRUMS (FULL KITS)/Another Real Life Kit/206[kb]real-life-RIDE.WAV.mp3"
  },
  {
    id: "X",
    clipSrc:
      "https://sampleswap.org/samples-ghost/ MAY 2014 LATEST ADDITIONS/DRUMS (FULL KITS)/Another Real Life Kit/5[kb]real-life-RIM.WAV.mp3"
  },
  {
    id: "C",
    clipSrc:
      "https://sampleswap.org/samples-ghost/ MAY 2014 LATEST ADDITIONS/DRUMS (FULL KITS)/Another Real Life Kit/32[kb]real-life-SN1.WAV.mp3"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastKey: "Press a key"
    };
    this.keyHandler = this.keyHandler.bind(this);
  }
  keyHandler(key) {
    this.setState({ lastKey: key });
  }
  render() {
    return (
      <div className="App bg-dark container-fluid h-100 d-flex justify-content-center align-items-center">
        <div id="drum-machine" className="p-3 d-flex flex-column border rounded ">
          <h1 className="text-light">Drum Machine</h1>
          <DisplayBox lastKey={this.state.lastKey} />
          <DrumPads handler={this.keyHandler} />
        </div>
      </div>
    );
  }
}

export default App;

class DrumPads extends Component {
  render() {
    let drumPads = pads.map(x => <DrumButton handler={this.props.handler} id={x.id} clipSrc={x.clipSrc} />);
    return <div className="d-flex justify-content-center">{drumPads}</div>;
  }
}
const DrumButton = props => {
  let audioId = "audio" + props.id;
  let playSound = () => {
    let clip = document.getElementById(props.id);
    clip.currentTime = 0;
    clip.play();
    props.handler(props.id);
  };
  return (
    <button id={audioId} className="drum-pad btn btn-secondary mx-1 btn-lg" onClick={playSound}>
      {props.id}
      <audio className="clip" id={props.id} src={props.clipSrc}>
        Your browser does not support the audio element.
      </audio>
    </button>
  );
};

const DisplayBox = props => {
  return (
    <p id="display" className="text-light">
      {props.lastKey}
    </p>
  );
};
