import React from "react"
import Keyboard from "./Keyboard"
import Progressions from "./Progressions"

export default function Hero() {
    const [chordList1, setChordList1] = React.useState([])
    const [wantNotes, setWantNotes] = React.useState(false)
    const [chordList1Shown, setChordList1Shown] = React.useState([])
    const [chordList2, setChordList2] = React.useState([])
    const [chordList2Shown, setChordList2Shown] = React.useState([])
    const [isChordList1, setIsChordList] = React.useState(true)
    
    const notes1 = chordList1.map((note) => {
        return note + " "
    })
    
    var count1 = 0
    
    const lines1 = chordList1Shown.map((line) => {
        count1 = count1 + 1
        return <Progressions line={line} count={count1} key={count1}List1/>
    })
    
    const notes2 = chordList2.map((note) => {
        return note + " "
    })
    
    var count2 = 0
    
    const lines2 = chordList2Shown.map((line) => {
        count2 = count2 + 1
        return <Progressions line={line} count={count2} key={count2}List2/>
    })
    
    
    return(
        <div className="hero">
            <div className="left--side">
                <div className="left--notes">
                    Chords: {notes1}
                </div>
                <div className="left--lines">
                <br></br>
                    {lines1}
                </div>
            </div>
            <div className="right--side">
                <div className="left--notes">
                    Chords: {notes2}
                </div>
                <div className="left--lines">
                <br></br>
                    {lines2}
                </div>
            </div>
            <Keyboard 
            wantNotes={wantNotes} setWantNotes={setWantNotes}
            chordList1={chordList1} setChordList1={setChordList1}
            chordList1Shown={chordList1Shown} setChordList1Shown={setChordList1Shown}
            chordList2={chordList2} setChordList2={setChordList2}
            chordList2Shown={chordList2Shown} setChordList2Shown={setChordList2Shown}
            isChordList1={isChordList1} setIsChordList={setIsChordList}
            /> 
        </div>
    )
}