import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';

const speechsdk = require('microsoft-cognitiveservices-speech-sdk')

async function SpeechToText() {
    const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(process.env.SPEECH__KEY, tokenObj.region.SPEECH__REGION);
    speechConfig.speechRecognitionLanguage = 'en-US';
    const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);
    let displayText;
    recognizer.recognizeOnceAsync(result => {
        if (result.reason === ResultReason.RecognizedSpeech) {
            displayText = `RECOGNIZED: Text=${result.text}`
        } else {
            displayText = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
        }
    })
    return displayText;
}

export default SpeechToText
