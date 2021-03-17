import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const Chatbot = () => {
    let voiceOverOne = new SpeechSynthesisUtterance("Hello, World!");

    const commands = [
        {
            command: 'clear',
            callback: ({ resetTranscript }) => resetTranscript()
        },
        {
            command: 'say hi',
            callback: () => window.speechSynthesis.speak(voiceOverOne)
        }
    ]

    let { transcript, resetTranscript } = useSpeechRecognition({ commands })
    
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    return (
        <div className="voice__bot__container">
            <form className="voice__bot">
                <input
                    type='text'
                    value={transcript}
                />
                <button>Enter</button>
            </form>

            <div>
                <button className="hidden" onLoad={SpeechRecognition.startListening({ continuous: true })}>Start</button>
                <button onClick={resetTranscript}>Reset</button>
            </div>
        </div>
    )
}