import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here:');
    const [btn1Value, setBtn1Value] = useState('Read');
    const [btn2Value, setBtn2Value] = useState('Pause');
    const [isReading, setReadingState] = useState(false);
    const [isPaused, setPausedState] = useState(false);

    // Function for inputting text in textarea
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    // // Function to change border when focussed
    // const focusBorder = (event) => {
    //     event.target.classList.remove('border-dark-subtle');
    //     event.target.classList.add('border-dark');
    // }
    // // Function to revert back the border when notfocussed
    // const blurBorder = (event) => {
    //     event.target.classList.remove('border-dark');
    //     event.target.classList.add('border-dark-subtle');
    // }
    // Function for changing text to lower case
    const handleUpperCaseClick = () => {
        setText(text.toUpperCase());
        props.showAlert(btnTheme, "Converted to upper case!");
    }
    // Function for changint text to upper case
    const handleLowerCaseClick = () => {
        setText(text.toLowerCase());
        props.showAlert(btnTheme, "Converted to lower case!");
    }
    // Function for clearing the textarea
    const clearBox = () => {
        setText('');
        document.querySelector('textarea').focus();
        props.showAlert(btnTheme, "Text cleared!");
    }

    const copyText = (event) => {
        try {
            navigator.clipboard.writeText(text);
        } catch(e) {
            const tempInput = document.createElement('input');
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            tempInput.setSelectionRange(0, 99999);
            document.execCommand('copy');
            document.body.removeChild(tempInput);
        }
        props.showAlert(btnTheme, "Text copied to clipboard!");
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert(btnTheme, "Removed extra spaces!");
    }

    window.addEventListener('load', () => {
        if(!('speechSynthesis' in window)) {
            document.querySelector('#readBtn').style.visibility = 'hidden';
            document.querySelector('#pauseBtn').style.visibility = 'hidden';
        }
    });
    // Functionality for Read and Cancel/Reset Button
    const read = (event) => {
        if('speechSynthesis' in window && text.length !== 0) {
            const speech = new SpeechSynthesisUtterance(text);
            speech.pitch = 1.2;
            speech.rate = 1;
    
            if(!isReading) {
                speechSynthesis.speak(speech);
                setReadingState(true);
                setBtn1Value('Cancel');
            } else {
                speechSynthesis.cancel();
                setReadingState(false);
                setBtn1Value('Read');
                setPausedState(false);
                setBtn2Value('Pause');
            }
    
            speech.onend = () => {
                setReadingState(false);
                setBtn1Value('Read');
            }
        } else if(text.length === 0) { 
            props.showAlert(btnTheme, 'Type something to read!');
         } else {
            event.target.style.visibility = 'hidden';
            document.querySelector('#pauseBtn').style.visibility = 'hidden';
            props.showAlert(btnTheme, 'Read is not supported!');
        }
    }

    // Functionality for Pause and Resume Button
    const pause = () => {
        if(!isPaused) {
            window.speechSynthesis.pause();
            setPausedState(true);
            setBtn2Value('Resume');
        } else {
            window.speechSynthesis.resume();
            setPausedState(false);
            setBtn2Value('Pause');
        }
    }

    const lightModeTheme = {
        backgroundColor: '#F8F9FA',
        color: '#212529',
        borderColor: '#212529'
    }
    
    const darkModeTheme = {
        backgroundColor: '#212529',
        color: '#F8F9FA',
        borderColor: 'F8F9FA'
    }

    const [style, setStyle] = useState(lightModeTheme);
    const [btnTheme, setBtnTheme] = useState(props.mode);
    // window.addEventListener('load', () => {
    //     if(props.mode === 'light') {
    //         setStyle(lightModeTheme);
    //         setBtnTheme('dark');
    //     } else {
    //         setStyle(darkModeTheme);
    //         setBtnTheme('light');
    //     }
    // });
    useEffect(() => {
        if(props.mode === 'light') {
            setStyle(lightModeTheme);
            setBtnTheme('dark');
        } else {
            setStyle(darkModeTheme);
            setBtnTheme('light');
        }
        // eslint-disable-next-line
    }, [props.mode]);

    const countWords = (str) => {
        let words;
        if(text.trim() === '') {
            words = '0';
        } else {
            words = str.trim().split(/\s+/).length;
        }
        return words;
    };

  return (
    <>
    <div className="container rounded" style={style}>
        <h1 className="display-1">{ props.heading }</h1>
        <div className="input-div mt-3 mb-2">
            <label 
                htmlFor="text-content" 
                className="form-label display-6">
                    { props.label }
            </label>
            <textarea 
                name="text-content" 
                className={`form-control border`} 
                style={{...style, height: 15+'rem'}}
                // style={ style } 
                value={ text } 
                onChange={ handleOnChange } 
                // onFocus={ focusBorder }  
                // onBlur={ blurBorder }
                >
            </textarea>
        </div>

        <div className="buttons-div d-flex flex-row flex-wrap justify-content-between">
            <button 
                className={`btn btn-${btnTheme} rounded-5 flex-shrink-1 m-1`} 
                onClick={ handleUpperCaseClick }>
                    UpperCase
            </button>
            <button 
                className={`btn btn-${btnTheme} rounded-5 flex-shrink-1 m-1`}
                onClick={ handleLowerCaseClick }>
                    LowerCase
            </button>
            <button 
                className={`btn btn-${btnTheme} rounded-5 flex-shrink-1 m-1`}
                onClick={ clearBox }>
                    Clear Text
            </button>
            <button 
                className={`btn btn-${btnTheme} rounded-5 flex-shrink-1 m-1`}
                onClick={ copyText }>
                Copy Text
            </button>
            <button 
                className={`btn btn-${btnTheme} rounded-5 flex-shrink-1 m-1`}
                onClick={ removeExtraSpaces }>
                Remove Spaces
            </button>
            <button 
                className={`btn btn-${btnTheme} rounded-5 flex-shrink-1 m-1`}
                onClick={ read }
                id='readBtn'>
                    { btn1Value }
            </button>
            <button 
                className={`btn btn-${btnTheme} rounded-5 flex-shrink-1 m-1`}
                id='pauseBtn'
                disabled={ !isReading }
                onClick={ pause }>
                    { btn2Value }
            </button>
        </div>
    </div>
    <div className="container rounded mt-3 p-3" style={style}>
        <h1>Your text summary:</h1>
        <p>{ countWords(text) } words and { text.length } characters</p>
        {/* <p>{ text.split('\n').length } lines</p> */}
        <p>{ (60 / 300 * text.split(' ').length).toFixed(2) } minutes to read</p>
        <h2>Preview: </h2>
        <p className="rounded p-3 border" style={style}>{ (text.length > 0) ? text : 'You\'ll preview the text above here.' }</p>
    </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string,
    label: PropTypes.string
}

TextForm.defaultProps = {
    mode: 'light'
}