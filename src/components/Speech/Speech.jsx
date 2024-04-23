import React, { useState, useEffect } from "react";
import { CircleStop, CirclePause, CirclePlay } from 'lucide-react';
import style from './speech.module.css';

const TextToSpeech = ({ joke }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(joke);
    

    const voices = window.speechSynthesis.getVoices();

    const englishVoices = voices.filter(voice => {
      return voice.lang == 'en-US';
    });
  
    setVoice(englishVoices[0]);
    console.log(englishVoices);


    setUtterance(u);
    setRate(0.5);
    

    return () => {
      synth.cancel();
    };
  }, [joke]);
  
  

  const handlePlay = () => {
    const synth = window.speechSynthesis;
    synth.lang = "en-US";

    if (isPaused) {
      synth.resume();
    }else{
        utterance.voice = voice;
        utterance.rate = rate;
        synth.speak(utterance);
    }

    

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(false);
  };

  return (
    <div className={style.btns}>
      <CirclePlay className={style.start} onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</CirclePlay>
      <CirclePause className={style.start} onClick={handlePause}>Pause</CirclePause>
      <CircleStop className={style.start} onClick={handleStop}>Stop</CircleStop>
    </div>
  );
};

export default TextToSpeech