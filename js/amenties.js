function show() {
  let html = `
                    <li>
                        <input type='radio' value='Recently Renovated' name='Recently Renovated'
                            id='Recently Renovated' />
                        <label for='Recently Renovated'>Recently Renovated</label>
                    </li>
                    <li>
                        <input type='radio' value='Close to Railway Station' name='Close to Railway Station'
                            id='Close to Railway Station' />
                        <label for='Close to Railway Station'>Close to Railway Station</label>
                    </li>
                    <li>
                        <input type='radio' value='Close to Bank' name='Close to Bank' id='Close to Bank' />
                        <label for='Close to Bank'>Close to Bank</label>
                    </li>
                    <li>
                        <input type='radio' value='Natural Light' name='Natural Light' id='Natural Light' />
                        <label for='Natural Light'>Natural Light</label>
                    </li>
                    <li>
                        <input type='radio' value='Natural Light' name='Natural Light' id='Natural Light' />
                        <label for='Natural Light'>Natural Light</label>
                    </li>
                    <li>
                        <input type='radio' value='Spacious Interiors' name='Spacious Interiors'
                            id='Spacious Interiors' />
                        <label for='Spacious Interiors'>Spacious Interiors</label>
                    </li>
                    <li>
                        <input type='radio' value='Low density Society' name='Low density Society'
                            id='Low density Society' />
                        <label for='Low density Society'>Low density Society</label>
                    </li>
                    <li>
                        <input type='radio' value='High Ceiling height' name='High Ceiling height'
                            id='High Ceiling height' />
                        <label for='High Ceiling height'>High Ceiling height</label>
                    </li>
                    <li>
                        <input type='radio' value='False Ceiling Lighting' name='False Ceiling Lighting'
                            id='False Ceiling Lighting' />
                        <label for='False Ceiling Lighting'>False Ceiling Lighting</label>
                    </li>
                    <li>
                        <input type='radio' value='No open drainage around' name='No open drainage around'
                            id='No open drainage around' />
                        <label for='No open drainage around'>No open drainage around</label>
                    </li>
                    <li>
                        <input type='radio' value='Furnished' name='Furnished' id='Furnished' />
                        <label for='Furnished'>Furnished</label>
                    </li>
    `;
  document.getElementById("ups").innerHTML = html;
}

document.getElementById("upsBtn").addEventListener("click", show);
