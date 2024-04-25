import { useState, useEffect } from "react";
import props from 'prop-types';
import { CircleStop, CirclePause, CirclePlay } from 'lucide-react';
import style from './speech.module.css';

const TextToSpeech = ({ joke }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);
  const [rate, setRate] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(joke);
    

    const voices = window.speechSynthesis.getVoices();

    const englishVoices = voices.filter(voice => {
      return voice.lang == 'en-US';
    });
  
    setVoice(englishVoices[0]);
    


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
      setIsPaused(false);
    }else if(!isSpeaking){
      setIsSpeaking(true);//let the voice tell the joke
      utterance.voice = voice;
      utterance.rate = rate;
      synth.speak(utterance);       
    }
    
    setIsSpeaking(false);//stop the voice from telling the joke more then 1 time by setting the state to false
    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    if(isPaused){
      setIsPaused(false);
      handlePlay();
    }else{
      synth.pause();
      setIsPaused(true);
    }

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
TextToSpeech.propTypes = {
  joke: props.string, 
};
export default TextToSpeech