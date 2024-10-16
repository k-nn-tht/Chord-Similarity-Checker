import React from "react"
import Progressions from "./Progressions"

export default function Keyboard(props) {
    
    const [wasChecked, setWasChecked] = React.useState(false)
    const [buttonsShow, setButtonsShow] = React.useState(true)
    function changeIsChordList() {
        props.setIsChordList(prevState => !prevState)
    }
    
    function handleNotes() {
        props.setWantNotes(prevState => !prevState)
    }
    
    function handleNextLine() {
        props.isChordList1 ? 
        (props.setChordList1Shown(prevState => [...prevState, props.chordList1]), props.setChordList1(prevState => [])):
        (props.setChordList2Shown(prevState => [...prevState, props.chordList2]), props.setChordList2(prevState => []))
    }
    
    function addNote(note) {
        return function() {
            props.isChordList1 ? props.setChordList1(prevState => [...prevState, note + " "]) 
            : props.setChordList2(prevState => [...prevState, note + " "]) 
        }
    }
    
    function deleteNote() {
        props.isChordList1 ? props.setChordList1(prevState => {
            let tempState = prevState.slice(0, prevState.length-1)
            return tempState
        }) 
        : props.setChordList2(prevState => {
            let tempState = prevState.slice(0, prevState.length-1)
            return tempState
        })
    }
    const [similarities, setSimilarities] = React.useState([])
    
    function findSimilarities() {
        setSimilarities(prevState => [])
        for (let i = 0; i < props.chordList1Shown.length; i++) {
            let temp1 = props.chordList1Shown[i]
            temp1 = JSON.stringify(temp1)
            for (let j = 0; j < props.chordList2Shown.length; j++) {
                let temp2 = props.chordList2Shown[j]
                temp2 = JSON.stringify(temp2)
                if(temp1 === temp2) {
                    setSimilarities(prevState => [...prevState, props.chordList2Shown[j]])
                }
            }
        }
        setWasChecked(prevState => !prevState)
        setButtonsShow(prevState => !prevState)
        if(props.wantNotes === true) {
            props.setWantNotes(prevState => !prevState)
        }
    }
    
    function closeCheckedScreen() {
        setWasChecked(prevState => !prevState)
        setButtonsShow(prevState => !prevState)
    }
    
    let count3 = 0
    
    const lines3 = similarities.map((line) => {
        count3 = count3 + 1
        return <Progressions line={line} count={count3} key={count3}List3/>
    })
    
    return(
        <div>
        {props.wantNotes && <div className="keys">
            <div className="tonic">
                <div className="majorTonic" onClick={addNote("I")}>I</div>
                <div className="minorTonic" onClick={addNote("i")} >i</div>
                <div className="diminishedTonic" onClick={addNote("i°")}>i°</div>
                <div className="augmentedTonic" onClick={addNote("I+")}>I+</div>
                <div className="dominantTonic" onClick={addNote("I7")}>I7</div>
            </div>
            <div className="supertonic">
                <div className="majorSuperTonic" onClick={addNote("II")}>II</div>
                <div className="minorSuperTonic" onClick={addNote("ii")}>ii</div>
                <div className="diminishedSuperTonic" onClick={addNote("ii°")}>ii°</div>
                <div className="augmentedSuperTonic" onClick={addNote("II+")}>II+</div>
                <div className="dominantSuperTonic" onClick={addNote("II7")}>II7</div>
            </div>
            <div className="mediant">
                <div className="majorMediant" onClick={addNote("III")}>III</div>
                <div className="minorMediant" onClick={addNote("iii")}>iii</div>
                <div className="diminishedMediant" onClick={addNote("iii°")}>iii°</div>
                <div className="augmentedMediant" onClick={addNote("III+")}>III+</div>
                <div className="dominantMediant" onClick={addNote("III7")}>III7</div>
            </div>
            <div className="subdominant">
                <div className="majorSubdominant" onClick={addNote("IV")}>IV</div>
                <div className="minorSubdominant" onClick={addNote("iv")}>iv</div>
                <div className="diminishedSubdominant" onClick={addNote("iv°")}>iv°</div>
                <div className="augmentedSubdominant" onClick={addNote("IV+")}>IV+</div>
                <div className="dominantSubdominant" onClick={addNote("IV7")}>IV7</div>
            </div>
            <div className="dominant">
                <div className="majorDominant" onClick={addNote("V")}>V</div>
                <div className="minorDominant" onClick={addNote("v")}>v</div>
                <div className="diminishedDominant" onClick={addNote("v°")}>v°</div>
                <div className="augmentedDominant" onClick={addNote("V+")}>V+</div>
                <div className="dominantDominant" onClick={addNote("V7")}>V7</div>
            </div>
            <div className="submediant">
                <div className="majorSubmediant" onClick={addNote("VI")}>VI</div>
                <div className="minorSubmediant" onClick={addNote("vi")}>vi</div>
                <div className="diminishedSubmediant" onClick={addNote("vi°")}>vi°</div>
                <div className="augmentedSubmediant" onClick={addNote("VI+")}>VI+</div>
                <div className="dominantSubmediant" onClick={addNote("VI7")}>VI7</div>
            </div>
            <div className="leadingTone">
                <div className="majorLeadingTone" onClick={addNote("VII")}>VII</div>
                <div className="minorLeadingTone" onClick={addNote("vii")}>vii</div>
                <div className="diminishedLeadingTone" onClick={addNote("vii°")}>vii°</div>
                <div className="augmentedLeadingTone" onClick={addNote("VII+")}>VII+</div>
                <div className="dominantLeadingTone" onClick={addNote("VII7")}>VII7</div>
            </div>
            </div>}
            {buttonsShow && <div className="keysEnabler" onClick={handleNotes}>Notes</div>}
            {props.wantNotes && <div className="nextLine" onClick={handleNextLine}>Next Line</div>}
            {props.wantNotes && <div className="changeChordList" onClick={changeIsChordList}
            >Change</div>}
            {buttonsShow && <div className="check" onClick={findSimilarities}>Check</div>}
            {props.wantNotes && <div className="deleteButton" onClick={deleteNote}
            >Delete</div>}
            {wasChecked && <div className="checkedScreen">
                <div className="x" onClick={closeCheckedScreen}>X</div>
                <div className="checkedList">
                    Similar Chord Progressions: <br></br><br></br>
                    {lines3}
                </div>
            </div>}
            
        </div>
    )
}