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
            </form>

            {
                /*
                    Setting 'continuous: true' to 'continuous: false' 
                    should allow for the start button to operate normally.

                    3.17.21 - 'continuous: false' not working
                */
            }

            <div>
                <button className="hidden" onLoad={SpeechRecognition.startListening({ continuous: false })}>Start</button>
                <button onClick={resetTranscript}>Reset</button>
            </div>
        </div>
    )
}