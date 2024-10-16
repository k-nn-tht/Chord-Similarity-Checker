<form className="chord--progression">
                    <div>
                        <Items />
                        <Items />
                        <Items />
                        <select className="chord--numeral">
                            <optgroup label="Tonic">
                                <option value="majorTonic">I</option>
                                <option value="minorTonic">i</option>
                                <option value="diminishedTonic">i°</option>
                                <option value="augmentedTonic">I+</option>
                                <option value="dominantTonic">I7</option>
                            </optgroup>
                            <optgroup label="Supertonic">
                                <option value="majorSuperTonic">II</option>
                                <option value="minorSuperTonic">ii</option>
                                <option value="diminishedSuperTonic">ii°</option>
                                <option value="augmentedSuperTonic">II+</option>
                                <option value="dominantSuperTonic">II7</option>
                            </optgroup>
                            <optgroup label="Mediant">
                                <option value="majorMediant">III</option>
                                <option value="minorMediant">iii</option>
                                <option value="diminishedMediant">iii°</option>
                                <option value="augmentedMediant">III+</option>
                                <option value="dominantMediant">III7</option>
                            </optgroup>
                            <optgroup label="Subdominant">
                                <option value="majorSubdominant">IV</option>
                                <option value="minorSubdominant">iv</option>
                                <option value="diminishedSubdominant">iv°</option>
                                <option value="augmentedSubdominant">IV+</option>
                                <option value="dominantSubdominant">IV7</option>
                            </optgroup>
                            <optgroup label="Dominant">
                                <option value="majorDominant">V</option>
                                <option value="minorDominant">v</option>
                                <option value="diminishedDominant">v°</option>
                                <option value="augmentedDominant">V+</option>
                                <option value="dominantDominant">V7</option>
                            </optgroup>
                            <optgroup label="Submediant">
                                <option value="majorSubmediant">VI</option>
                                <option value="minorSubmediant">vi</option>
                                <option value="diminishedSubmediant">vi°</option>
                                <option value="augmentedSubmediant">VI+</option>
                                <option value="dominantSubmediant">VI7</option>
                            </optgroup>
                            <optgroup label="Leading Tone">
                                <option value="majorLeadingTone">VII</option>
                                <option value="minorLeadingTone">vii</option>
                                <option value="diminishedLeadingTone">vii°</option>
                                <option value="augmentedLeadingTone">VII+</option>
                                <option value="dominantLeadingTone">VII7</option>
                            </optgroup>
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="Add"/>
                    </div>
                </form>
                
                
                if (props.chordList1Shown[i] === props.chordList2Shown[j]) {
                    console.log(props.chordList1Shown[i]);
                }
            