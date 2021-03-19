import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setComponentView } from '../../store/actions';

export const Chatbot = () => {
    const { push } = useHistory();
    const dispatch = useDispatch();

    const commands = [
        {
            command: 'clear',
            callback: ({ resetTranscript }) => resetTranscript()
        },
        {
            command: 'say hello',
            callback: () => voiceOverOne()
        },
        {
            command: 'go to login',
            callback: () => push('/dashboard')
        },
        {
            command: 'go home',
            callback: () => push('/')
        },
        {
            command: 'component login',
            callback: () => test1()
        },
        {
            command: 'component sign up',
            callback: () => test2()
        }

    ]

    let vo1;
    let vo2;

    const voiceOverOne = () => {
        vo1 = new SpeechSynthesisUtterance("Hello, World!");
        setTimeout(() => {
            window.speechSynthesis.speak(vo1)
        }, 1000);
    }

    const test1 = () => {
        dispatch(setComponentView('login'))
    }

    const test2 = () => {
        dispatch(setComponentView('signup'))
    }

    let { transcript, resetTranscript } = useSpeechRecognition({ commands })
    
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    return (
        <div className="voice__bot__container">

            {/* All you need to say anything in the world */}
            <form className="voice__bot">
                <input
                    type='hidden'
                    value={transcript}
                />
            </form>

            <div>
                <button className="hidden" onLoad={SpeechRecognition.startListening({ continuous: false })}>Start</button>
                <button onClick={resetTranscript}>Reset</button>
            </div>
        </div>
    )
}