function showPriceDetails() {
  let priceHtml = `
    <p class="propertyFormBoxPara2 black mb-0 font-weight-bolder">Additional Price Details</p>
                            <span><em>(Optional)</em></span>
                            <form>
                                <div class="form-group mt-3">
                                    <input type="number" class="carpetAreaForm mb-" id="floorDetails"
                                        placeholder="Total Floor">
                                    <select class="floorDetailsDropdown">
                                        <option>Monthly</option>
                                        <option>Annually</option>
                                        <option>One Time</option>
                                        <option>Per Unit/Monthly</option>
                                        <input type="number" class="carpetAreaForm priceBox mt-1" id="Maintenance"
                                            placeholder="Maintenance">
                                        <input type="number" class="carpetAreaForm  priceBox mt-1" id="ExpectedRent"
                                            placeholder=Expected Rent">
                                        <input type="number" class="carpetAreaForm mb-2 priceBox mt-1"
                                            id="Annualduespayable" placeholder="Annual dues payable">
                                    </select>
                                    
                                </div>
                            </form>
    `;
  let priceBoxDetails = document.getElementById("priceBoxDetails");
  priceBoxDetails.innerHTML = priceHtml;
  let collapsePriceBtn = document.getElementById("collapsePriceBtn");
  collapsePriceBtn.style.visibility = "inherit";
  document.getElementById("priceBoxDetails").style.display = "inline-block";
}

let addPriceBtn = document.getElementById("addPriceBtn");
addPriceBtn.addEventListener("click", showPriceDetails);

function hidePriceDetails() {
  document.getElementById("priceBoxDetails").style.display = "none";
  document.getElementById("collapsePriceBtn").style.visibility = "hidden";
}

let collapse = document.getElementById("collapsePriceBtn");
collapsePriceBtn.addEventListener("click", hidePriceDetails);
